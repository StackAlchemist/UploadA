import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

const Signup = () => {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const signUp = async()=>{
    try {
      setIsLoading(true)
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/signup`, {name, email, password},
        {headers:{
          'Content-Type':'application/json'
        }}
      )
      console.log(response.data)
      localStorage.setItem('userId', response.data.user)
      localStorage.setItem('authToken', response.data.token)
      toast.success('Logged in Successfully')
      console.log('data sent')
    } catch (error) {
      toast.error(`Let's try that again`)
      console.error(error)
    }finally{
      setIsLoading(false)
    }
    
  }

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Logging in with:", {name, email, password });
    signUp()
  };

  

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-gray-100"

    >


      {/* Login Form */}
      <div className="relative z-10 bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Input */}
          <div>
            <label htmlFor="na,e" className="block text-gray-700 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:ring focus:ring-blue-300"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:ring focus:ring-blue-300"
              placeholder="Enter your password"
            />
          </div>


          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition items-center justify-center flex"
          >
            { !isLoading ? 'Sign Up':<p className="flex justify-center items-center gap-1">
              Signing you up...
               <ClipLoader color="#ffffff" size={24}/>
            </p>
           }
          </button>
        </form>

        {/* Sign-up Link */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an Account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login

          </Link>
        </p>
      </div>
    </section>
  );
};

export default Signup;
