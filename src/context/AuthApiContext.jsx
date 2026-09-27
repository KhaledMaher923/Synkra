import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { toast } from 'sonner';

const API_BASE = "https://gig-program-apis-production.up.railway.app/api";
const DEFAULT_AVATAR =
  "https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg";

const AuthApiContext = createContext(null);

export const AuthApiProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies([
    "email",
    "access",
    "refresh",
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
      console.error(
        "Profile fetch error:",
        error.response?.data || error.message,
      );
      if (error.response?.data.code == "token_not_valid") {
        await refreshApiToken();
      }
      return null;
    }
  }, []);

  // Sync state on initial application load or cookie hydration
  useEffect(() => {
    let isMounted = true;

    const initAuth = async () => {
      if (cookies.access && cookies.email) {
        const userProfile = await fetchUserProfile(
          cookies.access,
          cookies.email,
        );
        if (isMounted) setProfile(userProfile);
      } else if (isMounted) {
        setProfile(null);
      }
      if (isMounted) setLoading(false);
    };

    initAuth();

    return () => {
      isMounted = false;
    };
  }, [cookies.access, cookies.email, fetchUserProfile, profile]);
  const logIn = async (email, password) => {
    setLoading(true);
    try {
      const loginRes = await axios.post(`${API_BASE}/login/`, {
        email: email,
        password: password,
      });

      const token = loginRes.data.access;
      const refresh = loginRes.data.refresh;

      setCookie("email", email, { path: "/", maxAge: 604800 });
      setCookie("access", token, { path: "/", maxAge: 604800 });
      setCookie("refresh", refresh, { path: "/", maxAge: 604800 });

      const userProfile = await fetchUserProfile(token, email);
      setProfile(userProfile);

      navigate("/", { replace: true });
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.detail || "Authentication failed.",
      };
    } finally {
      setLoading(false);
      toast.success('Welcome back!')
    }
  };

  const createProfileRecord = async (token, email, name, phone) => {
    return await axios.post(
      `${API_BASE}/profiles/`,
      {
        name: name,
        username: email,
        image: DEFAULT_AVATAR,
        bio: null,
        role: phone,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
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
      const refresh = loginRes.data.refresh;

      setCookie("email", email, { path: "/", maxAge: 604800 });
      setCookie("access", token, { path: "/", maxAge: 604800 });
      setCookie("refresh", refresh, { path: "/", maxAge: 604800 });

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
        error: error.response?.data.email || "Registration pipeline failed.",
      };
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => {
    try {
      removeCookie("email", { path: "/" });
      removeCookie("access", { path: "/" });
      removeCookie("refresh", { path: "/" });
      setProfile(null);
    } catch (error) {
      return {
        success: false,
        error: error.response?.data.email || "Registration pipeline failed.",
      };
    } finally {
      setLoading(false);
      navigate("/", { replace: true });
      toast.success('You have Signed Out')
    }
  };
  const refreshApiToken = async () => {
    if (!cookies.refresh)
      throw new Error(
        "Your subscription-service session expired. Please sign in again.",
      );
    try {
      const response = await axios.post(`${API_BASE}/token/refresh/`, {
        refresh: cookies.refresh,
      });
      const token = response.data.access;
      setCookie("access", token, { path: "/", maxAge: 604800 });
      return { success: true };
    } catch (e) {
      return {
        success: false,
        error: error.response?.data.detail || "Getting access token failed",
      };
    }
  };
  const editProfileImage = async (
    imageurl,
    token = cookies.access,
    id = profile.id,
  ) => {
    if (imageurl == null) imageurl = DEFAULT_AVATAR;
    try {
      const editResponse = await axios.patch(
        `${API_BASE}/profiles/${id}/`,
        {
          image: imageurl,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      const userProfile = await fetchUserProfile(token, email);
      setProfile(userProfile);
    } catch (e) {
      return {
        success: false,
        error: e.message || "Getting access token failed",
      };
    }
  };
  const editProfileInfo = async ({
    token = cookies.access,
    id = profile.id,
    bio = profile.bio,
    email = profile.username,
    name = profile.name,
    phone = profile.role,
  }) => {
    try {
      const editResponse = await axios.patch(
        `${API_BASE}/profiles/${id}/`,
        {
          name: name,
          username: email,
          bio: bio,
          role: phone,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      const userProfile = await fetchUserProfile(token, email);
      setProfile(userProfile);
    } catch (e) {
      return {
        success: false,
        error: e.message || "Getting access token failed",
      };
    }
  };
  const value = useMemo(
    () => ({
      logIn,
      signUp,
      signOut,
      profile,
      loading,
      refreshApiToken,
      editProfileImage,
      editProfileInfo,
      isAuthenticated: Boolean(cookies.refresh && cookies.access && profile),
    }),
    [profile, loading, cookies.refresh, cookies.access],
  );
  return (
    <AuthApiContext.Provider value={value}>{children}</AuthApiContext.Provider>
  );
};

export const useAuthApi = () => {
  const context = useContext(AuthApiContext);
  if (!context) {
    throw new Error("useAuthApi must be used within an AuthApiProvider");
  }
  return context;
};
