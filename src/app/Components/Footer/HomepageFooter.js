"use client"
import React from "react"
import Modal from "../Modal/Modal"
import { useState } from "react";

export default function HomepageFooter() {
    const [showModal, setShowModal] = useState(false);
    return (
        <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
        <div className="p-10">
            <button 
                className="btn btn-secondary" 
                onClick={() => setShowModal(true)}
            >
                Contact
            </button>

            <Modal 
                isOpen={showModal} 
                onClose={() => setShowModal(false)} 
                title="Account Update"
            >
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
            </Modal>
            </div>
        </nav>
        <nav>
            <div className="grid grid-flow-col gap-4">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/luis-gonzalez-54a035220/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
                </a>

                {/* GitHub */}
                <a href="https://github.com/lagonzalez1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                </a>
            </div>
            </nav>
        <aside>
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        </footer>
    )
}