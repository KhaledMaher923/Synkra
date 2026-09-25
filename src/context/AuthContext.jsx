import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../supabase'
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({})
const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'https://gig-program-apis-production.up.railway.app').replace(/\/$/, '')
const API_ACCESS_TOKEN_KEY = 'gigApiAccessToken'
const API_REFRESH_TOKEN_KEY = 'gigApiRefreshToken'

async function postApiAuth(path, payload) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  })
  const body = await response.json().catch(() => null)
  return { response, body }
}

function getApiError(body, fallback) {
  return body?.detail || body?.email?.[0] || body?.password?.[0] || fallback
}

async function authenticateApiUser(email, password, fullName = '') {
  let { response, body } = await postApiAuth('/api/login/', { email, password })
  if (response.ok && body?.access) return body
  if (response.status !== 401) {
    throw new Error(getApiError(body, 'Could not authenticate with the subscription service.'))
  }

  const registration = await postApiAuth('/api/register/', {
    email,
    password,
    profile_data: fullName ? { full_name: fullName } : {},
  })
  ;({ response, body } = await postApiAuth('/api/login/', { email, password }))
  if (response.ok && body?.access) return body

  throw new Error(
    getApiError(registration.body, getApiError(body, 'Could not authenticate with the subscription service.'))
  )
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [session, setSession] = useState(null)
  const [apiTokens, setApiTokens] = useState(() => ({
    access: sessionStorage.getItem(API_ACCESS_TOKEN_KEY),
    refresh: sessionStorage.getItem(API_REFRESH_TOKEN_KEY),
  }))
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();

  const saveApiTokens = (tokens) => {
    const nextTokens = { access: tokens.access, refresh: tokens.refresh || apiTokens.refresh }
    sessionStorage.setItem(API_ACCESS_TOKEN_KEY, nextTokens.access)
    if (nextTokens.refresh) sessionStorage.setItem(API_REFRESH_TOKEN_KEY, nextTokens.refresh)
    setApiTokens(nextTokens)
  }

  const clearApiTokens = () => {
    sessionStorage.removeItem(API_ACCESS_TOKEN_KEY)
    sessionStorage.removeItem(API_REFRESH_TOKEN_KEY)
    setApiTokens({ access: null, refresh: null })
  }

  const refreshApiToken = async () => {
    if (!apiTokens.refresh) throw new Error('Your subscription-service session expired. Please sign in again.')

    const { response, body } = await postApiAuth('/api/token/refresh/', { refresh: apiTokens.refresh })
    if (!response.ok || !body?.access) {
      clearApiTokens()
      throw new Error(getApiError(body, 'Your subscription-service session expired. Please sign in again.'))
    }

    saveApiTokens({ access: body.access, refresh: body.refresh })
    return body.access
  }
  useEffect(() => {
    // 1. جلب الجلسة الحالية عند بداية التحميل
    const getInitialSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        setSession(session)
        setUser(session?.user ?? null)
      } catch (error) {
        console.error('Error fetching session:', error)
      } finally {
        setLoading(false)
      }
    }

    getInitialSession()

    // 2. الاستماع اللحظي لتغيرات الـ Auth State (مثل التأكيد عبر الإيميل أو تسجيل الدخول)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session)
        setUser(session?.user ?? null)
        if (_event === 'SIGNED_OUT') clearApiTokens()
        setLoading(false)
        if(_event === "SIGNED_IN" && session) {
            navigate('/', { replace: true });
        }
      }
    )

    // تنظيف الـ Subscription عند تفكيك الـ Component
    return () => {
      subscription.unsubscribe()
    }
  }, [])

  // دالة تسجيل الدخول
  const signIn = async (email, password) => {
    const result = await supabase.auth.signInWithPassword({ email, password })
    if (result.error) return result

    try {
      const tokens = await authenticateApiUser(email, password, result.data.user?.user_metadata?.full_name)
      saveApiTokens(tokens)
      return result
    } catch (error) {
      await supabase.auth.signOut()
      return { ...result, error }
    }
  }

  // Create the account in Supabase and the subscription API.
  const signUp = async (email, password, fullName) => {
    const result = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
        emailRedirectTo: `${window.location.origin}/`,
      },
    })
    if (result.error) return result

    try {
      const tokens = await authenticateApiUser(email, password, fullName)
      if (result.data.session) saveApiTokens(tokens)
      return result
    } catch (error) {
      return { ...result, error }
    }
  }

  // دالة تسجيل الخروج
  const signOut = async () => {
    clearApiTokens()
    return supabase.auth.signOut()
  }

  const value = {
    user,
    session,
    apiAccessToken: apiTokens.access,
    refreshApiToken,
    loading,
    signIn,
    signUp,
    signOut,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

// Custom Hook لسهولة الاستخدام داخل باقي المكونات
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}