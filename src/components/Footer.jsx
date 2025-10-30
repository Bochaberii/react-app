import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p>&copy; 2025 Task Manager App. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-gray-300">Privacy</a>
          <a href="#" className="hover:text-gray-300">Terms</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;