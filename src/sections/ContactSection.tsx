import React from 'react';

export const ContactSection: React.FC = () => {
  const [showToast, setShowToast] = React.useState(false);

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('petras.leonardas@gmail.com');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <footer
      id="contact"
      className="bg-white py-12 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="rounded-2xl bg-stone-200 px-8 py-12 text-center dark:bg-slate-900">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
            👋 You like what you see? Let's chat!
          </h2>
          
          <p className="mt-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
            I'm always happy to connect with fellow designers, collaborators, or anyone curious about design and tech.
          </p>

          <div className="mt-6 space-y-3 text-base">
            <p className="text-slate-700 dark:text-slate-300">
              ✉️ Email me directly:{' '}
              <button
                onClick={copyEmailToClipboard}
                className="font-medium text-slate-900 underline decoration-slate-400 underline-offset-4 hover:decoration-slate-600 dark:text-white dark:decoration-slate-500 dark:hover:decoration-slate-400 cursor-pointer"
              >
                petras.leonardas@gmail.com
              </button>
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              💬 Or send me a message on{' '}
              <a
                href="https://www.linkedin.com/in/leobacevicius/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-slate-900 underline decoration-slate-400 underline-offset-4 hover:decoration-slate-600 dark:text-white dark:decoration-slate-500 dark:hover:decoration-slate-400"
              >
                LinkedIn
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 transition-all duration-300">
          <div className="rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-lg dark:bg-white dark:text-slate-900">
            ✓ Email copied to clipboard
          </div>
        </div>
      )}
    </footer>
  );
};
