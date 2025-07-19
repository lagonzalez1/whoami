"use client"
import React, { useState } from 'react';
import ImageDialog from '../Dialog/ImageDialog';
import ProjectCard from './ProjectCard';



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
              link={project.link}
              github={project.github}
            />
          ))}
        </div>

        <ImageDialog open={openImage} img_path={imagePath} onClose={handleCloseImage} />
    </div>
  );
};

