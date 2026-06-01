import { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md border border-gray-200 rounded-lg p-10 bg-white shadow-sm">
        <h1 className="text-2xl font-light mb-8">Please login</h1>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <label className="w-32 text-right text-gray-600 text-sm">
              email address:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-purple-500"
            />
          </div>
          <div className="flex items-center gap-4">
            <label className="w-32 text-right text-gray-600 text-sm">
              password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-purple-500"
            />
          </div>
          <div className="flex justify-end mt-2">
            <button className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors text-sm cursor-pointer">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
