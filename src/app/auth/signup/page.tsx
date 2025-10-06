// app/signup/page.tsx
"use client";

import Galaxy from "@/components/Galaxy";
import { useState } from "react";

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

  const [step, setStep] = useState(1);

 const allInterests = [
  "Web Development",
  "AI/ML",
  "Open Source",
  "Blockchain",
  "Cloud Computing",
  "Cybersecurity",
  "Data Science",
  "Mobile Apps",
  "Gaming",
  "UI/UX Design",
  "Robotics",
  "IoT",
  "VR/AR",
  "Quantum Computing",
  "DevOps",
  "Digital Marketing",
  "Startups",
  "Photography",
  "3D Modeling",
  "Entrepreneurship",
  "Networking",
  "Big Data"
];

const allHobbies = [
  "Coding",
  "Reading",
  "Playing Guitar",
  "Football",
  "Basketball",
  "Swimming",
  "Traveling",
  "Cooking",
  "Gaming",
  "Painting",
  "Writing",
  "Cycling",
  "Photography",
  "Hiking",
  "Yoga",
  "Dancing",
  "Music Production",
  "Meditation",
  "Gardening",
  "Sketching",
  "Board Games",
  "Collecting"
];

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
    <div className="relative w-full h-screen">
      {/* Hyperspeed Background */}
      
       <div style={{ width: '100%', height: '800px', position: 'absolute'}}>
      <Galaxy />
       
      </div>

      {/* Form */}
      <div className="relative flex items-center justify-center w-full h-full p-6">
        <form
          onSubmit={handleSubmit}
          className="backdrop-blur-md bg-white/5 border border-white/20 rounded-3xl p-8 w-full max-w-lg space-y-6 shadow-xl text-white transition-all duration-500"
        >
          <h2 className="text-3xl font-bold text-center mb-4">Sign Up</h2>

          {step === 1 && (
            <div className="space-y-4">
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
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="bg-blue-500 hover:bg-blue-600 py-2 px-6 rounded-xl font-semibold transition"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              {/* Interests */}
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

              {/* Hobbies */}
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

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="bg-gray-500 hover:bg-gray-600 py-2 px-6 rounded-xl font-semibold transition"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 py-2 px-6 rounded-xl font-semibold transition"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
