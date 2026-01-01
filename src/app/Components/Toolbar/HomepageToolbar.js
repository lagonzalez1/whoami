"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Modal from '../Modal/Modal';
import ProjectsTable from '../Tables/ProjectsTable';
import { projects } from '../Sections/Data';


const Navbar = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (type) => setActiveModal(type);
  const closeModal = () => setActiveModal(null);

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[100%] max-w-5xl">
        <div className="navbar bg-base-100/30 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl px-4 md:px-8">
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-xl font-bold tracking-tighter">
              Luis<span className="text-primary"> A</span> Gonzalez
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal gap-2 px-1 font-medium">
              <li>
                <button 
                  onClick={() => openModal('contact')}
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => openModal('projects')}
                  className="hover:text-primary transition-colors"
                >
                  Projects
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Reusable Modal Component */}
      <Modal 
        isOpen={!!activeModal} 
        onClose={closeModal} 
        size={activeModal === 'contact' ? 'sm' : 'lg'}
        title={activeModal === 'contact' ? 'Contact' : 'Experience'}
      >
        {activeModal === 'contact' && (
          <ul className="menu bg-base-200 rounded-box shadow-xl">
            <li>
                <a href="lagonzalez6@myyahoo.com">
                <span className="font-bold">Email:</span> lagonzalez6@myyahoo.com
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/luis-gonzalez-54a035220/" target="_blank" rel="noopener noreferrer">
                <span className="font-bold">LinkedIn:</span> link
                </a>
            </li>
            <li>
                <a href="tel:+">
                <span className="font-bold">Phone:</span> +909-943-****
                </a>
            </li>
        </ul>
        )}
        {activeModal === 'projects' && (
          <ProjectsTable projects={projects} />
        )}
      </Modal>
    </>
  );
};

export default Navbar;