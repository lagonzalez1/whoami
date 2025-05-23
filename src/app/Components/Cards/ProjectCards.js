"use client"
import React, { useState } from 'react';
import ImageDialog from '../Dialog/ImageDialog';

const ProjectCard = ({ 
  index,
  img_path, 
  title1, 
  subtitle1, 
  body1,
  onEditClick,
  setImagePath,
  setOpenImage
}) => {
  const [expanded, setExpanded] = useState(false);


  const handleOpenImage = (image_path) => {
    setImagePath(image_path)
    setOpenImage(true);
  }


  return (
    <div className="w-full max-w-3xl mx-auto my-6">
      <div className="group rounded-1xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-transparent backdrop-blur-sm border border-white/10">
        
        {/* Header with image and overlay */}
        <div className="relative">
          {/* Image container with gradient overlay */}
          <div className="w-full h-64 md:h-96 lg:h-[31rem] relative overflow-hidden">
            <img
              src={img_path || "/api/placeholder/800/600"}
              loading="lazy"
              alt={title1}
              onClick={() => handleOpenImage(img_path)}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient overlay that fades up from bottom */}
          </div>
          
          {/* Title positioned over the image */}
          <div className="absolute bottom-0 left-0 w-full p-3">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-1">
              {title1}
            </h3>
            <h4 className="text-lg md:text-xl font-medium text-teal-300/90 mb-2">
              {subtitle1}
            </h4>
          </div>
        </div>
        
        {/* Content area with expandable text */}
        <div className="px-6 pt-4 pb-6 bg-transparent backdrop-blur-md">
          <div className={`relative overflow-hidden transition-all duration-300 ${expanded ? "max-h-full" : "max-h-32 md:max-h-40"}`}>
            <p className="text-xs md:text-sm text-white/90 leading-relaxed">
              {body1}
            </p>
            
            {/* Fade out effect when collapsed */}
            {!expanded && (
              <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black/20 to-transparent" />
            )}
          </div>
          <div className='flex gap-2'>
          {/* Read more/less button */}
          <button 
            onClick={() => setExpanded(!expanded)} 
            className="mt-4 px-4 py-2 bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 text-sm font-medium rounded-lg transition-colors duration-200 flex items-center"
          >
            {expanded ? "Show less" : "Read more"}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-4 w-4 ml-1 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <button 
            onClick={() => onEditClick({img_path, title1, subtitle1, body1, index})} 
            className="mt-4 px-4 py-2 bg-teal-500/20 hover:bg-blue-500/30 text-blue-300 text-sm font-medium rounded-lg transition-colors duration-200 flex items-center"
          >
            {expanded ? "Edit" : "Edit"}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-4 w-4 ml-1 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} 
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
};

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

