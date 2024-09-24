import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold">Job Portal</h2>
          <p className="mt-1">
            Connecting you to your next career opportunity.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <Link to="/about" className="mb-2 md:mb-0">
            About Us
          </Link>
          <Link to="/contact" className="mb-2 md:mb-0">
            Contact
          </Link>
          <Link to="/privacy-policy" className="mb-2 md:mb-0">
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" className="mb-2 md:mb-0">
            Terms of Service
          </Link>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-700"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <div className="mt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Job Portal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
