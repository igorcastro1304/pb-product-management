import { useState } from "react";

export default function UserCard({ email, password }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full max-w-sm p-6 mx-auto my-4 rounded-lg shadow-lg bg-black/20">
      <h2 className="mb-2 text-xl font-bold text-yellow-400">{email}</h2>
      <div className="flex items-center justify-between">
        <span className="font-mono text-yellow-400">
          {showPassword ? password : "••••••••"}
        </span>
        <button
          className="ml-4 text-yellow-400 transition cursor-pointer hover:text-yellow-700"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? "Ocultar" : "Mostrar"}
        </button>
      </div>
    </div>
  );
}
