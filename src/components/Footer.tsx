import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6 px-10 " 

    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-6">
        {/* Logo & Brand */}
        <div className="text-xl font-bold">
          <Link to="/">UplodA</Link>
        </div>



        
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-4 opacity-75">
        © {new Date().getFullYear()} UplodA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
