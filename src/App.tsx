import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ArticlesSection } from './sections/ArticlesSection';
import { MentorshipSection } from './sections/MentorshipSection';
import { HobbiesSection } from './sections/HobbiesSection';
import { ContactSection } from './sections/ContactSection';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ArticlesSection />
        <MentorshipSection />
        <HobbiesSection />
        <ContactSection />
      </main>
    </div>
  );
};
