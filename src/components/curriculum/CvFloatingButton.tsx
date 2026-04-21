export function CvFloatingButton() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 md:bottom-8 z-50 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <a
        href="/others/cv_fullstack_developer.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-full 
                   bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-500 hover:to-blue-400
                   dark:from-indigo-500 dark:to-cyan-600 dark:hover:from-indigo-400 dark:hover:to-cyan-500
                   shadow-xl shadow-indigo-500/40 dark:shadow-cyan-500/30
                   text-white font-bold tracking-wide text-lg
                   transition-all duration-300 ease-out
                   hover:-translate-y-1 hover:scale-105 
                   hover:shadow-2xl hover:shadow-indigo-500/50 dark:hover:shadow-cyan-500/40
                   animate-bounce"
        style={{ animationDuration: '3s' }}
      >
        {/* Subtle highlight effect on hover */}
        <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>

        {/* PDF/Document Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white group-hover:animate-pulse"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
        Descargar CV
      </a>
    </div>
  );
}
