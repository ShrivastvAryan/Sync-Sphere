// app/signup/page.tsx
"use client";

import { useState } from "react";
import Hyperspeed from "@/components/Hyperspeed";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    user_id: "",
    name: "",
    age: "",
    country: "",
    state: "",
    city: "",
    interest: [] as string[],
    hobbies: [] as string[],
  });

  const allInterests = ["Web Development", "AI/ML", "Open Source"];
  const allHobbies = ["Coding", "Reading", "Playing Guitar", "Football"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMultiSelect = (item: string, type: "interest" | "hobbies") => {
    const list = formData[type];
    if (list.includes(item)) {
      setFormData({ ...formData, [type]: list.filter((i) => i !== item) });
    } else {
      setFormData({ ...formData, [type]: [...list, item] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Signup successful!");
  };

  return (
    <div className="relative  h-screen ">
      {/* Hyperspeed background */}
      <div className="absolute inset-0 -z-10">
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => {},
            onSlowDown: () => {},
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xFFFFFF,
              brokenLines: 0xFFFFFF,
              leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
              rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
              sticks: 0x03B3C3,
            },
          }}
        />
      </div>

      {/* Foreground Signup Form */}
      <div className="relative flex items-center justify-center p-10">
        <form
          onSubmit={handleSubmit}
          className="backdrop-blur-md bg-white/5 border border-white/20 rounded-3xl p-8 w-full max-w-lg space-y-6 shadow-xl text-white"
        >
          <h2 className="text-3xl font-bold text-center mb-4">Sign Up</h2>

          {["user_id", "name", "age", "country", "state", "city"].map((field) => (
            <input
              key={field}
              type={field === "age" ? "number" : "text"}
              name={field}
              placeholder={field.replace("_", " ").toUpperCase()}
              value={formData[field as keyof typeof formData] as string | number}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          ))}

          <div>
            <p className="mb-2 font-semibold text-white">Interests</p>
            <div className="flex flex-wrap gap-3">
              {allInterests.map((interest) => {
                const selected = formData.interest.includes(interest);
                return (
                  <button
                    type="button"
                    key={interest}
                    onClick={() => handleMultiSelect(interest, "interest")}
                    className={`px-4 py-2 rounded-full border border-white/30 text-white transition-all ${
                      selected ? "bg-white/20 backdrop-blur-md" : "hover:bg-white/10"
                    }`}
                  >
                    {interest}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <p className="mb-2 font-semibold text-white">Hobbies</p>
            <div className="flex flex-wrap gap-3">
              {allHobbies.map((hobby) => {
                const selected = formData.hobbies.includes(hobby);
                return (
                  <button
                    type="button"
                    key={hobby}
                    onClick={() => handleMultiSelect(hobby, "hobbies")}
                    className={`px-4 py-2 rounded-full border border-white/30 text-white transition-all ${
                      selected ? "bg-white/20 backdrop-blur-md" : "hover:bg-white/10"
                    }`}
                  >
                    {hobby}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition-colors py-3 rounded-2xl font-semibold text-white text-lg"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
