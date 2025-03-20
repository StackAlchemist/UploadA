import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-blue-500 text-white px-6 text-center">
      {/* Hero Section */}
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-yellow-300">UplodA</span>
        </h1>
        <p className="text-lg md:text-xl opacity-90">
          The easiest way to upload, manage, and share your files securely. Start now and enjoy a seamless experience!
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
          <Link
            to="/signup"
            className="bg-yellow-300 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            Get Started
          </Link>
          <Link
            to="/uploads"
            className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-500 transition"
          >
            Explore Uploads
          </Link>
        </div>
      </div>

      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-700 opacity-20"></div>
    </section>
  );
};

export default Home;
