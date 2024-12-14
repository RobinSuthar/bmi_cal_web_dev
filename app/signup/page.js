import Link from "next/link";

export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
      <img
        src="/french fries dab.jpg"
        alt="French fries dab"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-6 shadow-lg"
      />

      <h1 className="text-3xl font-bold mb-6 text-blue-700 text-center">
        Create Your Account
      </h1>

      <main className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <form className="flex flex-col gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              aria-label="Full Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              aria-label="Email Address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              aria-label="Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <input
              id="confirm-password"
              type="password"
              placeholder="Confirm your password"
              aria-label="Confirm Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link href="/login">
            <span className="text-blue-500 font-medium cursor-pointer hover:underline">
              Log In
            </span>
          </Link>
        </p>
      </main>

      <Link href="/welcome">
        <button
          className="mt-6 px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium shadow-md hover:bg-green-600 transition"
          aria-label="Continue as Guest"
        >
          Continue as Guest
        </button>
      </Link>
    </div>
  );
}
