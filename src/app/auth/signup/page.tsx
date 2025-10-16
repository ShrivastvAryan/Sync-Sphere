// app/signup/page.tsx
"use client";

import Galaxy from "@/components/Galaxy";
import { use, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    user_id: "",
    name: "",
    age: "",
    country: "",
    state: "",
    city: "",
    password: "",
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
    "Big Data",
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
    "Collecting",
  ];

  const mutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const res = await axios.post("http://localhost:3000/api/user", data, {
        headers: { "Content-Type": "application/json" },
      });
      return res.data; // Axios puts the response body in res.data
    },
    onSuccess: (data) => {
      console.log("User created:", data);
      // alert("Signup successful!");
      toast("Signup successful!");
      setTimeout(() => {
        router.push("/services");
      }, 3000);
    },
    onError: (error: any) => {
      // alert(`Signup failed: ${error.response?.data?.error || error.message}`);
      toast(`Signup failed`);
    },
  });

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
    mutation.mutate(formData);
  };

  return (
    <div className=" w-full ">
      {/* Background */}

      {/* Form */}
      <div className=" flex items-center justify-center p-6">
        <form
          onSubmit={handleSubmit}
          className="backdrop-blur-md bg-white/5 border border-white/20 rounded-3xl p-8 w-full max-w-4xl space-y-6 shadow-xl text-white transition-all duration-500"
        >
          <h2 className="text-3xl font-bold text-center mb-4">
            Welcome to Sync Sphere
          </h2>

          {/* Step 1 */}
          {step === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "user_id",
                "name",
                "age",
                "country",
                "state",
                "city",
                "password",
              ].map((field) => (
                <div key={field} className="flex flex-col">
                  <label
                    className="py-2 font-semibold text-white capitalize"
                    htmlFor={field}
                  >
                    {field.replace("_", " ")}
                  </label>
                  <input
                    id={field}
                    type={
                      field === "age"
                        ? "number"
                        : field === "password"
                        ? "password"
                        : "text"
                    }
                    name={field}
                    placeholder={`Enter ${field.replace("_", " ")}`}
                    value={
                      formData[field as keyof typeof formData] as
                        | string
                        | number
                    }
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    required
                  />
                </div>
              ))}
              {/* Next button spans both columns */}
              <div className="md:col-span-2 flex justify-end mt-4">
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

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-6 space-x-3">
              <div className="flex flex-col lg:flex-row w-full gap-12">
                {/* Interests */}
                <div className="flex-1">
                  <p className="pb-4 font-semibold text-white">Interests</p>
                  <div className="flex flex-wrap gap-3">
                    {allInterests.map((interest) => {
                      const selected = formData.interest.includes(interest);
                      return (
                        <button
                          type="button"
                          key={interest}
                          onClick={() =>
                            handleMultiSelect(interest, "interest")
                          }
                          className={`px-4 py-2 rounded-full border border-white/30 text-white transition-all ${
                            selected
                              ? "bg-white/20 backdrop-blur-md"
                              : "hover:bg-white/10"
                          }`}
                        >
                          {interest}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Hobbies */}
                <div className="flex-1">
                  <p className="pb-2 font-semibold text-white">Hobbies</p>
                  <div className="flex flex-wrap gap-3">
                    {allHobbies.map((hobby) => {
                      const selected = formData.hobbies.includes(hobby);
                      return (
                        <button
                          type="button"
                          key={hobby}
                          onClick={() => handleMultiSelect(hobby, "hobbies")}
                          className={`px-4 py-2 rounded-full border border-white/30 text-white transition-all ${
                            selected
                              ? "bg-white/20 backdrop-blur-md"
                              : "hover:bg-white/10"
                          }`}
                        >
                          {hobby}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-6">
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
