import React from 'react';

interface MediumArticle {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail?: string;
}

export const ArticlesSection: React.FC = () => {
  const [articles, setArticles] = React.useState<MediumArticle[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [articlesPerPage, setArticlesPerPage] = React.useState(3);

  // Update articlesPerPage based on screen size
  React.useEffect(() => {
    const updateArticlesPerPage = () => {
      const width = window.innerWidth;
      // md breakpoint is 768px, lg breakpoint is 1024px
      if (width >= 1024) {
        setArticlesPerPage(3); // Desktop: 3 articles
      } else if (width >= 768) {
        setArticlesPerPage(2); // Tablet: 2 articles
      } else {
        setArticlesPerPage(3); // Mobile: 3 articles
      }
      setCurrentPage(0); // Reset to first page on resize
    };

    updateArticlesPerPage();
    window.addEventListener('resize', updateArticlesPerPage);
    return () => window.removeEventListener('resize', updateArticlesPerPage);
  }, []);
  
  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const startIndex = currentPage * articlesPerPage;
  const displayedArticles = articles.slice(startIndex, startIndex + articlesPerPage);

  // Scroll to section when page changes
  React.useEffect(() => {
    if (currentPage > 0) {
      document.getElementById('articles')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentPage]);

  React.useEffect(() => {
    const fetchMediumArticles = async () => {
      try {
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@leodesignstheworld'
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }

        const data = await response.json();
        
        if (data.status === 'ok') {
          // Get first 6 articles
          const recentArticles = data.items.slice(0, 6).map((item: any) => {
            // Try to extract image from content if thumbnail is not available
            let thumbnail = item.thumbnail;
            if (!thumbnail && item.content) {
              const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
              thumbnail = imgMatch ? imgMatch[1] : undefined;
            }
            
            return {
              title: item.title,
              link: item.link,
              pubDate: item.pubDate,
              description: item.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
              thumbnail: thumbnail,
            };
          });
          setArticles(recentArticles);
        } else {
          throw new Error('RSS feed error');
        }
      } catch (err) {
        setError('Unable to load articles');
        console.error('Error fetching Medium articles:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMediumArticles();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <section
      id="articles"
      className="bg-white py-8 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <header className="mb-6">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Articles & writing
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 dark:text-slate-300">
            Recent posts from my Medium blog
          </p>
        </header>

        {loading && (
          <div className="text-sm text-slate-600 dark:text-slate-400">Loading articles...</div>
        )}

        {error && (
          <div className="text-sm text-slate-600 dark:text-slate-400">{error}</div>
        )}

        {!loading && !error && articles.length > 0 && (
          <>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {displayedArticles.map((article, index) => (
              <a
                key={index}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-slate-200 bg-stone-200/50 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-slate-700 overflow-hidden"
              >
                <article className="flex flex-col">
                  {article.thumbnail && (
                    <div className="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                      <img
                        src={article.thumbnail}
                        alt={article.title}
                        className="h-full w-full object-cover transition group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex flex-col gap-3 p-4">
                    <div>
                      <h3 className="font-semibold text-slate-900 group-hover:text-slate-700 dark:text-white dark:group-hover:text-slate-200">
                        {article.title}
                      </h3>
                      <time className="mt-1 text-xs text-slate-500 dark:text-slate-500">
                        {formatDate(article.pubDate)}
                      </time>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {article.description}
                    </p>
                    <div className="flex items-center gap-1 text-xs font-medium text-slate-700 dark:text-slate-300">
                      Read on Medium
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </div>
                </article>
              </a>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
                disabled={currentPage === 0}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-black shadow-sm transition hover:bg-stone-700 hover:text-white hover:border-stone-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-black disabled:hover:border-slate-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:hover:bg-stone-700 dark:hover:border-stone-700 dark:disabled:hover:bg-slate-900 dark:disabled:hover:text-white dark:disabled:hover:border-slate-600"
                aria-label="Previous page"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`h-8 w-8 rounded-lg text-sm font-semibold transition ${
                      currentPage === i
                        ? 'bg-black text-white shadow-sm dark:bg-white dark:text-black'
                        : 'bg-white text-slate-700 shadow-sm hover:bg-stone-700 hover:text-white dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-stone-700 dark:hover:text-white'
                    }`}
                    aria-label={`Go to page ${i + 1}`}
                    aria-current={currentPage === i ? 'page' : undefined}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))}
                disabled={currentPage === totalPages - 1}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-black shadow-sm transition hover:bg-stone-700 hover:text-white hover:border-stone-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-black disabled:hover:border-slate-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:hover:bg-stone-700 dark:hover:border-stone-700 dark:disabled:hover:bg-slate-900 dark:disabled:hover:text-white dark:disabled:hover:border-slate-600"
                aria-label="Next page"
              >
                Next
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
          </>
        )}

        {!loading && !error && articles.length === 0 && (
          <div className="text-sm text-slate-600 dark:text-slate-400">No articles found.</div>
        )}
      </div>
    </section>
  );
};
