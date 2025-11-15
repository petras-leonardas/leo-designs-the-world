import React from 'react';
import { DarkModeToggle } from './DarkModeToggle';

const navItems = [
  { href: '#articles', label: 'Articles' },
  { href: '#mentorship', label: 'Mentorship' },
  { href: '#hobbies', label: 'Outside of work' },
  { href: '#contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-slate-50/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="mx-auto max-w-5xl px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
            Leo Bacevicius
          </a>
          <div className="flex items-center gap-6">
            {/* Desktop navigation */}
            <div className="hidden gap-6 text-sm font-medium text-slate-600 sm:flex dark:text-slate-300">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-slate-900 dark:hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
            <DarkModeToggle />
            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 sm:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle menu"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="mt-3 flex flex-col gap-3 border-t border-slate-200 pt-3 sm:hidden dark:border-slate-800">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};
