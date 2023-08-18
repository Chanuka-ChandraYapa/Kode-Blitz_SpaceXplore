import React, { useState, useEffect } from "react";
import "./bg.css"; // Import the background CSS file

const images = [
  "https://images6.alphacoders.com/132/1322318.jpeg",
  "https://4kwallpapers.com/images/wallpapers/beautiful-girl-woman-monochrome-dark-background-portrait-3840x2160-2965.jpeg", // Add more image URLs here
  "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000",
  // ... add more image URLs
];

const BGComponent = ({ children }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 5 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    >
      {children}
    </div>
  );
};

export default BGComponent;
