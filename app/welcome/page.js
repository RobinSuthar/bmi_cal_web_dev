import Link from 'next/link';

export default function WelcomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-4 text-center">
        Welcome to the BMI Calculator!
      </h1>

      <p className="text-lg text-gray-700 mb-6 text-center">
        Stay healthy and monitor your Body Mass Index with ease.
      </p>

      <Link href="/bmi-calculator">
        <button
          className="px-4 py-2 bg-blue-500 text-white text-lg font-regular rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          aria-label="Go to BMI Calculator"
        >
          Go to BMI Calculator
        </button>
      </Link>
    </div>
  );
}
