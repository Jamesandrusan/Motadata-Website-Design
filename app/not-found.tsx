import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <h2 className="text-heading-lg">Page Not Found</h2>
      <p className="mt-2 text-muted-foreground">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-foreground px-6 py-2.5 text-label-md text-background"
      >
        Go Home
      </Link>
    </div>
  );
}
