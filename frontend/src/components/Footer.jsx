// import React from "react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-4">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
//         <div className="mb-4 md:mb-0">
//           <h2 className="text-xl font-bold">Job Portal</h2>
//           <p className="mt-1">
//             Connecting you to your next career opportunity.
//           </p>
//         </div>
//         <div className="flex flex-col md:flex-row md:space-x-8">
//           <Link to="/about" className="mb-2 md:mb-0">
//             About Us
//           </Link>
//           <Link to="/contact" className="mb-2 md:mb-0">
//             Contact
//           </Link>
//           <Link to="/privacy-policy" className="mb-2 md:mb-0">
//             Privacy Policy
//           </Link>
//           <Link to="/terms-of-service" className="mb-2 md:mb-0">
//             Terms of Service
//           </Link>
//         </div>
//         <div className="flex space-x-4">
//           <a
//             href="https://www.facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white hover:text-blue-500"
//           >
//             <i className="fab fa-facebook-f"></i>
//           </a>
//           <a
//             href="https://www.twitter.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white hover:text-blue-400"
//           >
//             <i className="fab fa-twitter"></i>
//           </a>
//           <a
//             href="https://www.linkedin.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white hover:text-blue-700"
//           >
//             <i className="fab fa-linkedin-in"></i>
//           </a>
//         </div>
//       </div>
//       <div className="mt-4 text-center text-sm text-gray-400">
//         &copy; {new Date().getFullYear()} Job Portal. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const sections = {
    quickLinks: {
      title: "Quick Links",
      links: [
        { text: "About Us", to: "/about" },
        { text: "Browse Jobs", to: "/jobs" },
        { text: "Post a Job", to: "/post-job" },
        { text: "Contact Us", to: "/contact" },
      ],
    },
    resources: {
      title: "Resources",
      links: [
        { text: "Career Blog", to: "/blog" },
        { text: "Resume Tips", to: "/resume-tips" },
        { text: "Interview Prep", to: "/interview-prep" },
      ],
    },
    legal: {
      title: "Legal",
      links: [
        { text: "Privacy Policy", to: "/privacy-policy" },
        { text: "Terms of Service", to: "/terms-of-service" },
        { text: "Cookie Policy", to: "/cookies" },
      ],
    },
  };

  const renderFooterSection = (section) => (
    <div key={section.title} className="space-y-3">
      <h3 className="text-lg font-semibold text-white">{section.title}</h3>
      <ul className="space-y-2">
        {section.links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} className="text-purple-200 hover:text-white transition-colors text-sm">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  const renderContactInfo = () => (
    <div className="flex flex-wrap gap-4 text-sm">
      <a href="tel:+1234567890" className="flex items-center text-purple-200 hover:text-white transition-colors">
        <Phone size={16} className="mr-2" />
        <span>+1 (234) 567-890</span>
      </a>
      <a href="mailto:contact@jobportal.com" className="flex items-center text-purple-200 hover:text-white transition-colors">
        <Mail size={16} className="mr-2" />
        <span>contact@jobportal.com</span>
      </a>
      <div className="flex items-center text-purple-200">
        <MapPin size={16} className="mr-2" />
        <span>123 Business Ave, Suite 100</span>
      </div>
    </div>
  );

  const renderSocialLinks = () => (
    <div className="flex space-x-4">
      {[
        { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
        { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
        { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
      ].map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-200 hover:text-white transition-colors"
          aria-label={label}
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );

  return (
    <footer className="bg-purple-900 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Company Info */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold bg-gradient-to-r from-purple-200 to-white bg-clip-text text-transparent">
              Job Portal
            </h2>
            <p className="text-purple-200 text-sm">
              Connecting talented professionals with their dream careers.
            </p>
            {renderContactInfo()}
          </div>

          {/* Navigation Sections */}
          {Object.values(sections).map(renderFooterSection)}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-700 pt-4 mt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {renderSocialLinks()}
            <p className="text-purple-200 text-sm">
              &copy; {new Date().getFullYear()} Job Portal. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;