// app/signin/page.tsx
"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export default function SigninPage() {
  const [formData, setFormData] = useState({
    user_id: "",
    password: "",
  });

  const mutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const res = await axios.post("http://localhost:3000/api/signin", data, {
        headers: { "Content-Type": "application/json" },
      });
      return res.data;
    },
    onSuccess: (data) => {
      console.log("Login successful:", data);
      alert("Login successful!");
    },
    onError: (error: any) => {
      alert(`Login failed: ${error.response?.data?.error || error.message}`);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <div className="w-full flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-md bg-white/5 border border-white/20 rounded-3xl p-8 w-full max-w-md space-y-6 shadow-xl text-white transition-all duration-500"
      >
        <h2 className="text-3xl font-bold text-center mb-4">Welcome Back</h2>

        {["user_id", "password"].map((field) => (
          <div key={field} className="flex flex-col">
            <label
              className="py-2 font-semibold text-white capitalize"
              htmlFor={field}
            >
              {field.replace("_", " ")}
            </label>
            <input
              id={field}
              type={field === "password" ? "password" : "text"}
              name={field}
              placeholder={`Enter ${field.replace("_", " ")}`}
              value={formData[field as keyof typeof formData]}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 py-3 px-6 rounded-xl font-semibold transition"
        >
          Sign In
        </button>
        <div className="text-center">
          <p className="text-gray-500 text-1xl">Don't have an account yet? </p>
          <a
            href="/auth/signup"
            className="text-blue-500 hover:text-blue-600 text-1xl font-semibold"
          >
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
}
