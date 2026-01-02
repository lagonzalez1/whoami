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
      <nav className="w-full">
        <div className="navbar bg-base-100/30 backdrop-blur-md border-b border-white/10 shadow-xl px-4 md:px-12">
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-xl font-bold tracking-tighter">
              Luis<span className="text-primary"> A</span> Gonzalez
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal gap-4 px-1 font-medium">
              <li>
                <button onClick={() => openModal('contact')} className="hover:text-primary transition-colors">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={() => openModal('experience')} className="hover:text-primary transition-colors">
                  Experience
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
        title={activeModal === 'contact' ? 'contact' : 'experience'}
      >
        {activeModal === 'contact' && (
          <div className="overflow-x-auto">
          <table className="table w-full bg-base-200 shadow-xl rounded-box">
            {/* head */}
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-primary uppercase tracking-wider">Method</th>
                <th className="text-primary uppercase tracking-wider">Details</th>
              </tr>
            </thead>
            <tbody>
              {/* Email Row */}
              <tr className="hover:bg-base-300 transition-colors border-b border-white/10">
                <td className="font-bold">Email</td>
                <td>
                  <a href="mailto:lagonzalez6@myyahoo.com" className="hover:text-primary transition-colors">
                    lagonzalez6@myyahoo.com
                  </a>
                </td>
              </tr>
              {/* LinkedIn Row */}
              <tr className="hover:bg-base-300 transition-colors border-b border-white/10">
                <td className="font-bold">LinkedIn</td>
                <td>
                  <a 
                    href="https://www.linkedin.com/in/luis-gonzalez-54a035220/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="link link-hover"
                  >
                    luis-gonzalez-54a035220
                  </a>
                </td>
              </tr>
              {/* Phone Row */}
              <tr className="hover:bg-base-300 transition-colors border-none">
                <td className="font-bold">Phone</td>
                <td>
                  <a href="tel:+19099430000" className="hover:text-primary transition-colors">
                    +909-943-****
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        )}
        {activeModal === 'experience' && (
          <ProjectsTable projects={projects} />
        )}
      </Modal>
    </>
  );
};

export default Navbar;