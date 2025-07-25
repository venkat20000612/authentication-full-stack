import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // true if token exists
  }, []);

  const handleShowImage = () => {
    setShowImage(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="p-8 text-center">
        <h1 className="text-3xl font-semibold text-gray-800">
          Welcome to Your Dream World!..
        </h1>
        <p className="text-gray-600 mt-4">Your favorite platform!</p>

        {isLoggedIn && !showImage && (
          <button
            className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition cursor-pointer"
            onClick={handleShowImage}
          >
            See Special Image
          </button>
        )}

        {isLoggedIn && showImage && (
          <div className="mt-6 flex flex-col items-center">
            <img
            src="https://media.istockphoto.com/id/1495430612/vector/coming-soon-with-colorful-cut-out-foil-ribbon-confetti-background.jpg?s=612x612&w=0&k=20&c=0HjZUHqlNnUedZmJCbMpooiY92f4tgGCh_jZK51zSmU="
            alt="edhi nuvve"
            className="max-w-md rounded shadow-lg"
            />
            <h2 className="text-xl text-blue-700 mt-4">Nuvve kadha edhi</h2>
        </div>
        )}
      </main>
    </div>
  );
}
