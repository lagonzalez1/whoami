'use client'

import React from 'react';

/**
 * A simple, accessible card component that blurs the backdrop,
 * features an icon, title, and text, with interactive hover/focus states.
 */
export default function TransparentCard({ icon, title, text }) {
  return (
    <div
      role="button"
      tabIndex={0}
      className="p-4 max-w-xs bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg shadow-md \
        transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
    >
      <h3 className="pt-2 text-xl font-semibold text-white mb-2 text-center break-words">
        {title}
      </h3>
      <div className="flex justify-center mb-2 text-white">
        {icon}
      </div>
      <p className="text-sm text-gray-100 text-center break-words">
        {text}
      </p>
    </div>
  );
}
