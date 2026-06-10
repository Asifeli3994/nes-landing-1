import { ThemeToggle } from '../ui/ThemeToggle';

interface NavbarProps {
  onMenuClick: () => void;
  topicTitle?: string;
}

export function Navbar({ onMenuClick, topicTitle }: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center border-b border-gray-200 bg-white/90 px-4 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90">
      <button
        onClick={onMenuClick}
        aria-label="Abrir menú"
        className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 lg:hidden"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div className="flex min-w-0 flex-1 items-center gap-2">
        <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          📚 Historia
        </span>
        {topicTitle && (
          <>
            <span className="text-gray-400 dark:text-gray-600">/</span>
            <span className="truncate text-sm text-gray-600 dark:text-gray-400">{topicTitle}</span>
          </>
        )}
      </div>

      <div className="flex items-center gap-1">
        <ThemeToggle />
      </div>
    </header>
  );
}
