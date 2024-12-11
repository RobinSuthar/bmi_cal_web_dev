import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
     
      <img
        src="/french fries dab.jpg"
        alt="french fries dab"
        className="w-400 h-40 rounded-3xl mb-6" 
      />
      
      <h1 className="text-2xl font-bold mb-4">Log In</h1>
      
      {/* Log in form */}
      <form className="flex flex-col gap-4 w-1/3">

      {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="p-2 border rounded"
        />

     {/*Password  */}
        <input
          type="password"
          placeholder="Password"
          className="p-2 border rounded"
        />
        <button className="p-2 bg-blue-500 text-white rounded">Log In</button>
      </form>

     {/* Sign up */}
      <p className="mt-4">
        Dont have an account?{' '}
        <Link href="/signup">
           <span className="text-blue-500 cursor-pointer">Sign up</span>
        </Link>
      </p>
    
    {/* Google login */}
      
      <button
      // onClick={() => signIn("google")}
      className="flex items-center gap-4 shadow-lg rounded-md pl-3"
    >
      {/* <Image src="/google-logo.png" width={30} height={30} alt="Google Icon" /> */}
      <img src="/google-logo.png" alt="Google Icon" className='w-10 h-10 '/>
      <span className="bg-blue-500 text-white px-4 py-3">Sign with Google</span>
    </button>


    {/* Guest for trying */}
    <Link href="/welcome">
        <button className="mt-6 p-2 bg-green-500 text-white rounded">
          Continue as Guest
        </button>
      </Link>
    </div>
  );
}