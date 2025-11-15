import React from 'react';
import { DarkModeToggle } from './DarkModeToggle';

const navItems = [
  { href: '#', label: 'About me' },
  { href: '#articles', label: 'Articles' },
  { href: '#mentorship', label: 'Mentorship' },
  { href: '#hobbies', label: 'Outside of work' },
  { href: '#contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-slate-50/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <a href="#hero" className="text-sm font-semibold tracking-tight">
            Leo Bacevicius
          </a>
          <DarkModeToggle />
        </div>
        <div className="hidden gap-6 text-sm font-medium text-slate-600 sm:flex dark:text-slate-300">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-slate-900 dark:hover:text-white">
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};
