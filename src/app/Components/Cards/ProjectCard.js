"use client";

import React from 'react';

export default function ProjectCard({
  img_path,
  title1,
  subtitle1,
  body1,
  setImagePath,
  setOpenImage,
  link,
  github
}) {
  const handleOpenImage = () => {
    setImagePath(img_path);
    setOpenImage(true);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleOpenImage}
      className="w-full bg-black rounded-lg shadow-md transition-transform duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer p-6"
    >
      {/* Image */}
      <img
        src={img_path || '/api/placeholder/800/600'}
        alt={title1}
        loading="lazy"
        className="w-full h-64 md:h-96 object-cover rounded-md mb-6"
      />

      {/* Title & Subtitle */}
      <h3 className="text-white text-2xl font-semibold mb-2">{title1}</h3>
      <p className="text-gray-400 text-lg mb-4">{subtitle1}</p>

      {/* Body */}
      <p className="text-gray-200 text-base mb-6 whitespace-pre-wrap break-words">{body1}</p>

      {/* Links */}
      <div className="flex space-x-6">
        {link !== '' ? 
        <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-teal-300 text-sm hover:underline"
      >
        Link
      </a>: null}
      {
        github !== '' ?
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-300 text-sm hover:underline"
        >
          GitHub
        </a>
        : null
      }
        
      </div>
    </div>
  );
}