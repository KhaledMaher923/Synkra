import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

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
        setLoading(false)
      }
    )

    // تنظيف الـ Subscription عند تفكيك الـ Component
    return () => {
      subscription.unsubscribe()
    }
  }, [])

  // دالة تسجيل الدخول
  const signIn = (email, password) => {
    return supabase.auth.signInWithPassword({ email, password })
  }

  // دالة إنشاء حساب جديد
  const signUp = (email, password, fullName) => {
    return supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
        emailRedirectTo: `${window.location.origin}/`,
      },
    })
  }

  // دالة تسجيل الخروج
  const signOut = () => {
    return supabase.auth.signOut()
  }

  const value = {
    user,
    session,
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