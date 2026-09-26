import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

const API_BASE = "https://gig-program-apis-production.up.railway.app/api";

const AuthApiContext = createContext(null);

export const AuthApiProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies([
    "email",
    "sessionid",
  ]);

  const navigate = useNavigate();

  // Helper to fetch profile securely using the access token
  const fetchUserProfile = useCallback(async (token, email) => {
    try {
      const response = await axios.get(`${API_BASE}/profiles/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      // Filter applied server-side in production; fallback lookup for current schema
      const userProfile = response.data.find((p) => p.username === email);
      return userProfile || null;
    } catch (error) {
      console.error("Profile fetch error:", error.response?.data || error.message);
      return null;
    }
  }, []);

  // Sync state on initial application load or cookie hydration
  useEffect(() => {
    const initAuth = async () => {
      if (cookies.sessionid && cookies.email) {
        const userProfile = await fetchUserProfile(cookies.sessionid, cookies.email);
        setProfile(userProfile);
      }
      setLoading(false);
    };
    initAuth();
  }, [cookies.sessionid, cookies.email, fetchUserProfile]);

  const logIn = async (email, password) => {
    setLoading(true);
    try {
      const loginRes = await axios.post(`${API_BASE}/login/`, {
        email: email,
        password: password,
      });

      const token = loginRes.data.access;

      setCookie("email", email, { path: "/", maxAge: 604800 });
      setCookie("sessionid", token, { path: "/", maxAge: 604800 });

      const userProfile = await fetchUserProfile(token, email);
      setProfile(userProfile);

      navigate("/", { replace: true });
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.detail || "Authentication failed." 
      };
    } finally {
      setLoading(false);
    }
  };

  const createProfileRecord = async (token, email, name, phone) => {
    return await axios.post(
      `${API_BASE}/profiles/`,
      {
        name: name,
        username: email,
        image: null,
        bio: null,
        role: phone,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  };

  const signUp = async (email, password, name, phone) => {
    setLoading(true);
    try {
      // Step 1: Account Registration
      await axios.post(`${API_BASE}/register/`, {
        email: email,
        password: password,
      });

      // Step 2: Immediate Authentication to retrieve JWT
      const loginRes = await axios.post(`${API_BASE}/login/`, {
        email: email,
        password: password,
      });

      const token = loginRes.data.access;

      setCookie("email", email, { path: "/", maxAge: 604800 });
      setCookie("sessionid", token, { path: "/", maxAge: 604800 });

      // Step 3: Profile Creation with Bearer token
      await createProfileRecord(token, email, name, phone);

      // Step 4: Fetch populated profile and update global state
      const userProfile = await fetchUserProfile(token, email);
      setProfile(userProfile);

      navigate("/", { replace: true });
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data.email || "Registration pipeline failed." 
      };
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => {
    removeCookie("email", { path: "/" });
    removeCookie("sessionid", { path: "/" });
    setProfile(null);
    navigate("/", { replace: true });
  };

  const value = {
    logIn,
    signUp,
    signOut,
    profile,
    loading,
    isAuthenticated: Boolean(cookies.sessionid && profile),
  };

  return (
    <AuthApiContext.Provider value={value}>
      {children}
    </AuthApiContext.Provider>
  );
};

export const useAuthApi = () => {
  const context = useContext(AuthApiContext);
  if (!context) {
    throw new Error("useAuthApi must be used within an AuthApiProvider");
  }
  return context;
};