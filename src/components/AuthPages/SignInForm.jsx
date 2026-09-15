import { useState } from "react";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign in:", { email, password });
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 rounded-2xl border border-slate-200 bg-white shadow-sm">
      <h1 className="text-2xl font-semibold font-sans-serif text-center mb-2">Welcome back</h1>
      <p className="text-sm text-slate-500 text-center mb-6">
        Sign in to your account
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@company.com"
            className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700"
        >
          Sign In
        </button>
      </form>

      <p className="text-center text-sm text-slate-500 mt-5">
        Don't have an account?{" "}
        <a href="/signup" className="text-blue-600 font-medium">
          Create one
        </a>
      </p>
    </div>
  );
}