"use client";
import React, { useState, useEffect } from 'react';
import { projects } from './Data';

const ProjectsContent = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeTab, setActiveTab] = useState('video'); // 'video' | 'image'
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
  
    useEffect(() => {
      if (selectedProject) {
        setActiveTab(selectedProject.video ? 'video' : 'image');
        setCurrentImgIndex(0); // Reset index when opening new project
      }
    }, [selectedProject]);
  
    // Navigation handlers for image array
    const nextImg = () => {
      setCurrentImgIndex((prev) => (prev + 1) % selectedProject.images.length);
    };
  
    const prevImg = () => {
      setCurrentImgIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    };

  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="opacity-70 max-w-2xl mx-auto">
            A selection of my recent work. Click on a project to view details.
          </p>
        </div>

        {/* 1. GRID VIEW */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group border border-transparent hover:border-primary/20"
              onClick={() => setSelectedProject(project)}
            >
              <div className="card-body">
                <div className="flex justify-between items-start">
                  <h3 className="card-title text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.hasWebPlayer && (
                    <div className="badge badge-secondary badge-outline text-xs">App</div>
                  )}
                </div>
                <p className="text-sm opacity-70 mt-2 line-clamp-3">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="badge badge-ghost badge-sm">{tag}</span>
                  ))}
                </div>
                <div className="card-actions justify-end mt-6">
                  <button className="btn btn-sm btn-outline group-hover:btn-primary">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. MODAL VIEW (FULL SCREEN) */}
        {selectedProject && (
          <dialog className="modal modal-open modal-bottom md:modal-middle backdrop-blur-md">
            <div className="modal-box w-full max-w-full h-full max-h-full rounded-none bg-base-100 p-0 overflow-hidden relative">              
              <button 
                className="btn btn-sm btn-circle btn-neutral absolute right-6 top-6 z-50 shadow-lg" 
                onClick={() => setSelectedProject(null)}
              >✕</button>

              <div className="flex flex-col lg:flex-row h-full">
                
                {/* --- VISUALS COLUMN --- */}
                <div className="lg:w-3/5 bg-neutral p-0 lg:p-8 flex items-center justify-center relative group">
                  
                  {/* Floating Toggle: Video vs Gallery */}
                  {selectedProject.video && selectedProject.images?.length > 0 && (
                    <div className="absolute top-6 left-6 z-30">
                      <div className="join shadow-2xl border border-white/10 bg-base-100/20 backdrop-blur-md">
                        <button 
                          className={`join-item btn btn-sm ${activeTab === 'video' ? 'btn-primary' : 'btn-ghost text-white'}`}
                          onClick={() => setActiveTab('video')}
                        >Video</button>
                        <button 
                          className={`join-item btn btn-sm ${activeTab === 'image' ? 'btn-primary' : 'btn-ghost text-white'}`}
                          onClick={() => setActiveTab('image')}
                        >Gallery ({selectedProject.images.length})</button>
                      </div>
                    </div>
                  )}

                  <div className="w-full h-full flex items-center justify-center overflow-hidden relative">
                    {activeTab === 'video' && selectedProject.video ? (
                      <div className="mockup-browser border border-base-content/10 bg-base-300 w-11/12 shadow-2xl">
                        <div className="mockup-browser-toolbar">
                          <div className="input text-xs opacity-50">https://{selectedProject.link}</div>
                        </div>
                        <div className="bg-base-200 aspect-video">
                          <video src={selectedProject.video} className="w-full h-full object-cover" autoPlay muted loop controls />
                        </div>
                      </div>
                    ) : selectedProject.images?.length > 0 ? (
                      /* IMAGE GALLERY MODE */
                      <div className="relative w-full h-full flex items-center justify-center bg-neutral p-4">
                        
                        {/* Navigation Arrows (Only show if > 1 image) */}
                        {selectedProject.images.length > 1 && (
                          <>
                            <button onClick={prevImg} className="btn btn-circle btn-ghost absolute left-4 z-20 text-white bg-black/20 hover:bg-black/40">❮</button>
                            <button onClick={nextImg} className="btn btn-circle btn-ghost absolute right-4 z-20 text-white bg-black/20 hover:bg-black/40">❯</button>
                            
                            {/* Pagination Dots */}
                            <div className="absolute bottom-8 flex gap-2 z-20">
                              {selectedProject.images.map((_, i) => (
                                <div key={i} className={`h-1.5 w-1.5 rounded-full transition-all ${currentImgIndex === i ? "bg-primary w-4" : "bg-white/30"}`} />
                              ))}
                            </div>
                          </>
                        )}

                        <img 
                          key={currentImgIndex} // Key forces re-animation on change
                          src={selectedProject.images[currentImgIndex]} 
                          alt={`${selectedProject.title} screenshot ${currentImgIndex + 1}`} 
                          className="max-w-full max-h-full object-contain shadow-2xl animate-in fade-in zoom-in duration-500" 
                        />
                      </div>
                    ) : (
                      /* Fallback for CLI */
                      <div className="mockup-code w-11/12">
                         <pre data-prefix="$"><code>npm run start</code></pre>
                      </div>
                    )}
                  </div>
                </div>

                {/* --- DETAILS COLUMN --- */}
                <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col overflow-y-auto bg-base-100 border-l border-base-content/5">
                  <div className="mb-8">
                    <h3 className="text-4xl font-black mb-4 tracking-tight">{selectedProject.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, i) => (
                         <div key={i} className="badge badge-primary badge-md">{tag}</div>
                      ))}
                    </div>
                  </div>

                  <div className="prose prose-md max-w-none">
                    <p className="text-xl font-medium leading-relaxed opacity-90">{selectedProject.shortDescription}</p>
                    <div className="divider my-8"></div>
                    <div className="opacity-70 leading-relaxed whitespace-pre-line">
                      {selectedProject.description}
                    </div>
                  </div>

                  <div className="mt-12 grid grid-cols-2 gap-4">
                    <a href={`${selectedProject.link}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">Visit Site</a>
                    <a href={selectedProject.github || ""} target="_blank" className="btn btn-outline btn-lg">Source Code</a>
                  </div>
                </div>

              </div>
            </div>
          </dialog>
        )}
      </div>
    </section>
  );
};

export default ProjectsContent;