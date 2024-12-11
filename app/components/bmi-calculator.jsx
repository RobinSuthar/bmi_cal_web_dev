'use client';

import { useState } from 'react';

export default function BMICalculator() {
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');

  const handleCalculateBMI = async () => {
    if (!height || !weight || !gender || !age) {
      alert("All fields are required.");
      return;
    }

    const heightInMeters = height / 100;
    const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(calculatedBMI);

    let category = '';
    if (calculatedBMI < 18.5) category = 'Underweight';
    else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) category = 'Normal weight';
    else if (calculatedBMI >= 25 && calculatedBMI < 29.9) category = 'Overweight';
    else category = 'Obese';
    setBmiCategory(category);

    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: '',
          password: '',
          name: '',
          Weight: weight,
          Height: height,
          Gender: gender,
          Age: age,
        }),
      });

       // Need to connect to database // Need to connect to database
      if (!response.ok) {
        throw new Error("Failed to save user data");
      }

     
      const result = await response.json();
      console.log("Saved user data:", result);
      alert("Data saved successfully!");
    } catch (error) {
      console.error("Error saving data:", error.message);
      alert("Failed to save data.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          French Fries BMI Calculator
        </h1>
        <form
          className="flex flex-col gap-5"
          onSubmit={(e) => {
            e.preventDefault();
            handleCalculateBMI();
          }}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
            <input
              type="number"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Height (cm)</label>
            <input
              type="number"
              placeholder="Enter your height in cm"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
            <input
              type="number"
              placeholder="Enter your weight in kg"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="" disabled>Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
          >
            Calculate BMI
          </button>
        </form>
        {bmi && (
          <div className="mt-6 text-center">
            <h2 className="text-xl font-semibold">Your BMI: {bmi}</h2>
            <p className="text-lg text-gray-700 mt-2">Category: {bmiCategory}</p>
          </div>
        )}
      </div>
    </div>
  );
}
