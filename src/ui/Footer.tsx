import React from "react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-20 mt-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">About Me</h3>
          <p className="text-gray-400 text-sm">
            Hi, I'm Aryan Shrivastava, a passionate full-stack developer. I
            enjoy building modern web applications with React, Next.js, Tailwind CSS, and Node.js.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About", "Projects", "Contact"].map((link, idx) => (
              <li key={idx}>
                <Link
                  href={`/${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-white hover:underline transition-all duration-300"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Connect with me</h3>
          <div className="flex space-x-4">
            {[{
              icon: <Github size={24} />,
              href: "https://github.com/aryanshrivastava"
            },{
              icon: <Twitter size={24} />,
              href: "https://twitter.com/"
            },{
              icon: <Linkedin size={24} />,
              href: "https://linkedin.com/in/aryanshrivastava"
            },{
              icon: <Mail size={24} />,
              href: "mailto:aryan@example.com"
            }].map((social, idx) => (
              <Link
                key={idx}
                href={social.href}
                target="_blank"
                className="p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white hover:text-black transition-all duration-300"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Aryan Shrivastava. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
