import React from 'react';

export default function Footer() {
  return (
    <footer className="py-6 text-center text-gray-600 bg-gray-100">
      <p className="mb-2">© 2025 Anand Darshan. All rights reserved.</p>
      <div className="flex justify-center gap-4">
        <a href="https://github.com/AnandD14" target="_blank" rel="noopener noreferrer" className="hover:text-black">GitHub</a>
        <a href="www.linkedin.com/in/aananddarshan" target="_blank" rel="noopener noreferrer" className="hover:text-black">LinkedIn</a>
        <a href="mailto:danand241@gmail.com" className="hover:text-black">Email</a>
      </div>
    </footer>
  );
}