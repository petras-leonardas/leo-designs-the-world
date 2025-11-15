import React from 'react';

export const MentorshipSection: React.FC = () => {
  return (
    <section
      id="mentorship"
      className="bg-white py-8 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Mentorship
        </h2>
        
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 dark:text-slate-300">
          I'm also a mentor on ADPList, where I help designers from around the world with:
        </p>

        <ul className="mt-4 max-w-3xl space-y-3 text-base text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-700 dark:bg-slate-300" />
            <span>Portfolio and case study reviews</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-700 dark:bg-slate-300" />
            <span>Career transitions into product design</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-700 dark:bg-slate-300" />
            <span>Building confidence in cross-functional collaboration</span>
          </li>
        </ul>

        <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-700 dark:text-slate-300">
          Mentorship has become one of the most rewarding parts of my work — giving back to the same community that helped me grow.
        </p>

        <a
          href="https://adplist.org/mentors/leo-bacevicius?utm_source=linkedin&utm_medium=social&utm_campaign=user_profileshare&utm_content=leobacevicius"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-black px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-stone-700 dark:bg-black dark:hover:bg-stone-700"
        >
          Book a Session
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};
