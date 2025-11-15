import React from 'react';

export const HobbiesSection: React.FC = () => {
  return (
    <section
      id="hobbies"
      className="bg-white py-8 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Outside of work
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 dark:text-slate-300">
          When I'm not designing, you'll find me rock climbing, running marathons, hiking through mountains, or kayaking the lakes back home in Lithuania. I believe that adventure fuels creativity — whether it's scaling a wall or solving a design problem, it's all about finding the right route.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="aspect-[3/4] w-full overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800">
            <img
              src="https://pub-e798b9e159d142bc8b8c064baa1985fe.r2.dev/marathon.png"
              alt="Marathon running"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-[3/4] w-full overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800">
            <img
              src="https://pub-e798b9e159d142bc8b8c064baa1985fe.r2.dev/hiking.png"
              alt="Hiking through mountains"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-[3/4] w-full overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800">
            <img
              src="https://pub-e798b9e159d142bc8b8c064baa1985fe.r2.dev/climbing.png"
              alt="Rock climbing"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
