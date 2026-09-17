import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

export default function SignUpForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorState,setErrorState] = useState('');
  const {signUp} = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorState('');
    try{
      const { error } = await signUp(email, password, fullName);
      if(error){
        setErrorState(error.message);
      }
    }catch(e){
      setErrorState(e.message || 'Unexpected Error');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 rounded-2xl border border-slate-200 bg-white shadow-sm">
      <h1 className="text-2xl font-semibold font-sans-serif text-center mb-2">Create account</h1>
      <p className="text-sm text-slate-500 text-center mb-6">
        Get started with your free workspace
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            required
            name="full_name"
            value={fullName}
            maxLength={20}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Alex Rivera"
            className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            required
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="alex@company.com"
            autoComplete="email"
            className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            required
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            autoComplete="new-password"
            className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm outline-none focus:ring-2 focus:ring-blue-400"
            minLength={8}
          />
        </div>
        {errorState && <p className="text-red-700">{errorState}</p>}

        <button
          type="submit"
          className="w-full py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700"
        >
          Create Account
        </button>
      </form>

      <p className="text-center text-sm text-slate-500 mt-5">
        {"Already have an account? "}
        <Link to="/signin" className="text-blue-600 font-medium">
          Sign in
        </Link>
      </p>
    </div>
  );
}