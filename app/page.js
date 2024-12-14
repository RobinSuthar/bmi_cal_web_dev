import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">
        Welcome to the BMI Calculator!
      </h1>
      <p className="text-lg mb-8 text-gray-700 text-center">
        Monitor your health and track your Body Mass Index to know how fat you are.
      </p>
      <Link href="/signup">
        <button
          className="px-4 py-2 bg-blue-500 text-white text-lg font-medium rounded shadow hover:bg-blue-600 transition duration-300"
          aria-label="Go to Signup Page"
        >
          Get Started
        </button>
      </Link>
    </div>
  );
}
