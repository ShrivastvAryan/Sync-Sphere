"use client";

import React from 'react';
import DotGrid from '../gsap/DotGrid';
import StaggeredMenu from '@/gsap/Menu';
import { Github, Twitter, Linkedin } from 'lucide-react';
import TextType from '@/components/TextType';

interface BackgroundProps {}

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

const Background: React.FC<BackgroundProps> = () => {
  return (
    <div className="relative w-full h-[600px] bg-black">
      {/* DotGrid Background */}
      <DotGrid
        dotSize={10}
        gap={15}
        baseColor="#271E37"
        activeColor="#5227FF"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70 pointer-events-none" />

      {/* Centered Title */}
      <div className="absolute inset-0 flex top-40 justify-center z-40">
        <TextType 
        text={["Welcome to ", "Sync Sphere"]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
        className='text-7xl font-semibold'
        />

        <p className='text-white absolute top-32 md:top-30 font-semibold text-center w-full px-4 md:px-0 max-w-2xl  text-sm md:text-xl drop-shadow-lg'>
            Sync Sphere connects you with like-minded people worldwide. Explore shared interests, spark conversations, and build meaningful connections. Join the sphere and sync with your tribe!
        </p>

        <button className='absolute top-72 md:top-70 bg-[#00ffcc] cursor-pointer text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow'>
            Get Started
        </button>
      </div>

      {/* Top Logo / Nav */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6 z-50">
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
    </div>
  );
};

export default Background;
