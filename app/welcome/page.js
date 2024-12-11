import Link from 'next/link';

export default function WelcomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to the BMI Calculator!</h1>
      <p className="text-lg mb-6">Track how fat you are!!!</p>
      <Link href="/bmi-calculator">
        <button className="p-2 bg-blue-500 text-white rounded">
          Go to BMI Calculator
        </button>
      </Link>
    </div>
  );
}