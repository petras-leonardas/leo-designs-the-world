import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-white py-8 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
          About me & my work experience
        </h2>
        <div className="mt-4 max-w-3xl space-y-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
          <p>
            I'm an in-house Product Designer with over 5 years of experience in high-growth tech companies. I've designed for SaaS, B2B, and B2C audiences — always focused on making complex systems intuitive, scalable, and delightful to use.
          </p>
          <p>
            Today, I'm at Cloudflare, where I work on Application Security products used by developers, engineers, and security teams around the world. Our products protect one-fifth of the Internet's traffic, and every design decision scales to millions of users.
          </p>
          <p>
            Before Cloudflare, I worked at Brevo (Paris) and HRS Group (Cologne), helping teams connect design, data, and engineering across Europe. I thrive in cross-functional environments — collaborating with PMs, engineers, and content designers to bring clarity and craft to ambitious ideas.
          </p>
          <p>
            Originally from Lithuania, I come from humble roots — the kind where curiosity, grit, and a sense of humor were my first design tools. Now, I'm designing some of the most technical products out there, proving that a farmer's son can help secure the Internet.
          </p>
        </div>
      </div>
    </section>
  );
};
