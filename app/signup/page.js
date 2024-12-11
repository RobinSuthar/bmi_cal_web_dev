import Link from 'next/link';

export default function signup() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Image */}
      <img
        src="/french fries dab.jpg"
        alt="french fries dab"
        className="w-40 h-40 rounded-3xl mb-6" 
      />

      {/* Sign Up Title */}
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>

      {/* Sign Up Form */}
      <form className="flex flex-col gap-4 w-1/3 bg-white p-8 rounded-lg shadow-lg">
      
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Email*/}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Password*/}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Sign Up Button */}
        <button
          type="button"
          className="w-full bg-blue-500 text-white p-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
        >
          Sign Up
        </button>
      </form>

      {/* Go to Login Page */}
      <p className="mt-4">
        Already have an account?{' '}
        <Link href="/login">
          <span className="text-blue-500 cursor-pointer">Log In</span>
        </Link>
      </p>

      {/*Guest Button */}
      <Link href="/welcome">
        <button className="mt-6 p-2 bg-green-500 text-white rounded">
          Continue as Guest
        </button>
      </Link>
    </div>
  );
}