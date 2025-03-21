import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 text-center">
      {/* Hero Section */}
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-green-400">UplodA</span>
        </h1>
        <p className="text-lg md:text-xl opacity-90">
          The easiest way to upload, manage, and share your files securely. Start now and enjoy a seamless experience!
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
          <Link
            to="/signup"
            className="bg-green-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Get Started
          </Link>
          <Link
            to="/uploads"
            className="border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 hover:text-gray-900 transition"
          >
            Explore Uploads
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
