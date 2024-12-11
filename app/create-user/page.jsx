"use client";

import { useState } from "react";

export default function CreateUserForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    Weight: "",
    Height: "",
    Gender: "",
    Age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting data:", formData);

    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert("User created successfully: " + JSON.stringify(data));
        setFormData({
          email: "",
          password: "",
          name: "",
          Weight: "",
          Height: "",
          Gender: "",
          Age: "",
        });
      } else {
        const errorData = await response.json();
        alert("Error: " + errorData.error);
      }
    } catch (error) {
      alert("Failed to create user: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="Weight"
        placeholder="Weight (kg)"
        value={formData.Weight}
        onChange={handleChange}
      />
      <input
        type="number"
        name="Height"
        placeholder="Height (m)"
        value={formData.Height}
        onChange={handleChange}
      />
      <select name="Gender" value={formData.Gender} onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <input
        type="number"
        name="Age"
        placeholder="Age"
        value={formData.Age}
        onChange={handleChange}
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Create User
      </button>
    </form>
  );
}
