"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <h2 className="text-heading-lg">Something went wrong</h2>
      <p className="mt-2 text-muted-foreground">{error.message}</p>
      <button
        onClick={reset}
        className="mt-6 rounded-lg bg-foreground px-6 py-2.5 text-label-md text-background"
      >
        Try again
      </button>
    </div>
  );
}
