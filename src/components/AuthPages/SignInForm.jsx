import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorState, setErrorState] = useState('');
  const { signIn } = useAuth();

  const handleSubmit = async(e) => {
    e.preventDefault();
    setErrorState('');
    try{
      const { error } = await signIn(email, password);
      if(error){
        setErrorState(error.message);
      }
    }catch(e){
      setErrorState(e.message || 'Unexpected Error');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 rounded-2xl border border-slate-200 bg-white shadow-sm">
      <h1 className="text-2xl font-semibold font-sans text-center mb-2">Welcome back</h1>
      <p className="text-sm text-slate-500 text-center mb-6">
        Sign in to your account
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            required
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@company.com"
            autoComplete="username"
            className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" id="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            autoComplete="current-password"
            minLength={8}
            className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        {errorState && <p className="text-red-700">{errorState}</p>}
        <button
          type="submit"
          className="w-full py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700"
        >
          Sign In
        </button>
      </form>

      <p className="text-center text-sm text-slate-500 mt-5">
        {"Don't have an account? "}
        <Link to="/signup" className="text-blue-600 font-medium">
          Create one
        </Link>
      </p>
    </div>
  );
}