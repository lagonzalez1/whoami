"use client"
import React, { useState } from 'react';
import ImageDialog from '../Dialog/ImageDialog';

export default function ProjectCard({ 
  index,
  img_path, 
  title1, 
  subtitle1, 
  body1,
  setImagePath,
  setOpenImage
}) {
  const [expanded, setExpanded] = useState(false);

  const handleOpenImage = (image_path) => {
    setImagePath(image_path);
    setOpenImage(true);
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-8">
      <div className="group overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-gray-800/60 via-gray-900/50 to-black/40 hover:shadow-2xl transition-transform transform hover:-translate-y-1 duration-300">
        {/* Image Header */}
        <div className="relative rounded-t-2xl overflow-hidden">
          <img
            src={img_path || '/api/placeholder/800/600'}
            alt={title1}
            loading="lazy"
            onClick={() => handleOpenImage(img_path)}
            className="w-full h-64 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              {title1}
            </h3>
            <h4 className="text-lg md:text-xl font-semibold text-teal-300/90 mt-1">
              {subtitle1}
            </h4>
          </div>
        </div>

        {/* Content */}
        <div className="bg-black/30 backdrop-blur-sm p-6 rounded-b-2xl">
          <div className={`relative overflow-hidden transition-all duration-300 ${expanded ? 'max-h-full' : 'max-h-32 md:max-h-40'}`}>
            <p className="text-sm md:text-base text-gray-100 leading-relaxed">
              {body1}
            </p>
            {!expanded && (
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
            )}
          </div>
          <div className="mt-4 flex justify-end">
            <button 
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-teal-600/20 hover:bg-teal-600/30 text-teal-200 font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <span>{expanded ? 'Show Less' : 'Read More'}</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-5 w-5 transform transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export const ProjectCards = ({ projects, title = "Projects", onEditClick }) => {

  const [openImage, setOpenImage] = useState(false);
  const [imagePath, setImagePath] = useState(null);

  const handleCloseImage = () => {
    setOpenImage(false)
    setImagePath(null);
  }

  return (
    <div className="mt-24">
      <p className="text-md text-center mb-12">{title}</p >
        <div className="flex flex-col items-center gap-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={project.index}
              img_path={project.details.img_path}
              title1={project.details.title1}
              subtitle1={project.details.subtitle1}
              body1={project.details.body1}
              hoverShadowColor={project.hoverShadowColor}
              onEditClick={onEditClick}
              setImagePath={setImagePath}
              setOpenImage={setOpenImage}
            />
          ))}
        </div>

        <ImageDialog open={openImage} img_path={imagePath} onClose={handleCloseImage} />
    </div>
  );
};

