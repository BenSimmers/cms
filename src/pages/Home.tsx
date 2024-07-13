import React from "react";
import { Link } from "react-router-dom";
import { useMarkdownManager } from "../hooks";
export const Home: React.FC = () => {
  // getTop3MarkdownFiles




  return (
    <div className="bg-gray-900 text-white flex items-center justify-center bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 min-h-[calc(100vh-64px)] h-screen">
      <div className="text-center max-w-2xl px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
          Simple CMS
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6">
          A simple content management system to store your markdown files and edit them.
        </p>
        <Link
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 sm:px-8 rounded-lg shadow-lg"
          to={"/editor"}
        >
          Get Started
        </Link>

        <hr className="my-8 border-gray-800" />
      </div>
    </div>
  );
};

export default Home;
