import React from 'react'
import { Github, Twitter, Linkedin } from 'lucide-react';
import StaggeredMenu from '@/gsap/Menu';

const Navbar = () => {

  const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Services', ariaLabel: 'View our services', link: '/services' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' },
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com', icon: Twitter },
  { label: 'GitHub', link: 'https://github.com', icon: Github },
  { label: 'LinkedIn', link: 'https://linkedin.com', icon: Linkedin },
];


  return (
    <>

    {/* Top Logo / Nav */}
      <nav className=" w-full flex justify-between items-center p-6 z-50">
        {/* Logo */}
        <div className="text-white font-bold text-2xl">Logo</div>

        {/* Menu Items */}
        <ul className="hidden md:flex space-x-8 text-white font-medium p-4 rounded-2xl bg-black/50 backdrop-blur-lg">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.link}
                aria-label={item.ariaLabel}
                className="hover:text-[#00ffcc] transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Links */}
        <div className="flex space-x-4">
          {socialItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="text-white hover:text-[#00ffcc] transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </nav>

      {/* Staggered Menu for Mobile */}
      <div className="absolute top-0 right-0 md:hidden z-50">
        <StaggeredMenu items={menuItems} />
      </div>

    </>
  )
}

export default Navbar