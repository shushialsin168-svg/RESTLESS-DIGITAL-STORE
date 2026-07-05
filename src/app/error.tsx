'use client';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="bg-white border border-gray-200 rounded-3xl p-10 max-w-md w-full text-center shadow-sm">
        <div className="text-5xl mb-4">😵</div>
        <h1 className="text-xl font-bold text-gray-900">Something went wrong</h1>
        <p className="text-sm text-gray-500 mt-2 break-words">
          {error?.message || 'An unexpected error occurred.'}
        </p>
        <button
          onClick={reset}
          className="mt-6 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          Reload page
        </button>
      </div>
    </div>
  );
}
