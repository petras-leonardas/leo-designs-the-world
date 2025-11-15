import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="bg-white py-8 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Rounded container box */}
        <div className="rounded-3xl bg-stone-200 p-8 sm:p-12 dark:bg-slate-900">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-12">
            {/* Left content */}
            <div className="flex-1 space-y-6">
              {/* Heading with emoji */}
              <h1 className="flex items-center gap-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                <span className="text-5xl sm:text-6xl">👋</span>
                <span className="font-mono">Hi, I'm Leo</span>
              </h1>

              {/* Job description */}
              <p className="text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300">
                Product Designer at Cloudflare, working on security products that protect over 20% of the entire Internet.
              </p>

              {/* Quote */}
              <p className="italic text-slate-600 dark:text-slate-400">
                "Designing at scale, one secure experience at a time."
              </p>

              {/* Location */}
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Based in London, UK</span>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
                <a
                  href="https://www.linkedin.com/in/leobacevicius/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-700 underline decoration-slate-400 underline-offset-4 hover:text-slate-900 hover:decoration-slate-600 dark:text-slate-300 dark:decoration-slate-500 dark:hover:text-white dark:hover:decoration-slate-400"
                >
                  LinkedIn
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <a
                  href="https://medium.com/@leodesignstheworld"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-700 underline decoration-slate-400 underline-offset-4 hover:text-slate-900 hover:decoration-slate-600 dark:text-slate-300 dark:decoration-slate-500 dark:hover:text-white dark:hover:decoration-slate-400"
                >
                  Medium articles
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <a
                  href="https://adplist.org/mentors/leo-bacevicius?utm_source=linkedin&utm_medium=social&utm_campaign=user_profileshare&utm_content=leobacevicius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-700 underline decoration-slate-400 underline-offset-4 hover:text-slate-900 hover:decoration-slate-600 dark:text-slate-300 dark:decoration-slate-500 dark:hover:text-white dark:hover:decoration-slate-400"
                >
                  Book a mentorship session
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right side - Profile photo */}
            <div className="flex-shrink-0">
              <div className="h-64 w-64 overflow-hidden rounded-2xl sm:h-80 sm:w-80">
                <img
                  src="https://pub-e798b9e159d142bc8b8c064baa1985fe.r2.dev/Square.png"
                  alt="Leo Bacevicius"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
