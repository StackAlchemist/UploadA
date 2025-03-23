import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const [username, setUsername] = useState<string>('')
    const authToken: string | null = localStorage.getItem('authToken')
    const [isLoading, setIsLoading] = useState<boolean>(false)
  
    const isActive = (path: string) => location.pathname === path;

    const getUser = async()=>{
      try {
        setIsLoading(true)
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/whoami`,{
          headers:{
             Authorization: `Bearer ${authToken}`
          },
          withCredentials: true,
        })
        console.log(response.data)
        localStorage.setItem('username', response.data);
        setUsername(response.data)
      } catch (error) {
        console.error(error)
      }finally{
        setIsLoading(false)
      }
    }
    useEffect(()=>{
      getUser();
    },[])

    // useEffect(()=>{
    //   const storedUsername = localStorage.getItem('username');
    //   if (storedUsername) {
    //     setUsername(storedUsername);
    //   }
    // },[])
  
    return (
<header className="bg-blue-600 py-4 px-10 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="text-white text-xl font-bold">
        <Link to="/">UplodA</Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex gap-6">
        {[
          { path: "/uploads", label: "Upload" },
          { path: "/views", label: "Views" },
        ].map(({ path, label }) => (
          <div key={path} className="relative">
            <Link
              to={path}
              className={`text-white hover:text-gray-200 transition ${
                isActive(path) ? "font-semibold" : ""
              }`}
            >
              {label}
            </Link>
            {isActive(path) && (
              <div className="absolute left-0 w-full h-1 bg-white rounded-full mt-1"></div>
            )}
          </div>
        ))}
      </nav>

      {/* Auth Buttons */}
      {localStorage.getItem('username')? <p>{localStorage.getItem('username')}</p>:<div className="flex gap-4">
        <button onClick={()=>navigate('/login')} className="px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-blue-500 transition">
          Login
        </button>
        <button onClick={()=>navigate('/signup')} className="px-4 py-2 bg-white text-blue-500 rounded-lg hover:bg-blue-600 hover:text-white transition">
          Sign Up
        </button>
      </div>}
    </header>
    );
  };
  
  export default Navbar;