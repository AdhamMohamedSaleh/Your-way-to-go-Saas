export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">404 – Page Not Found</h1>
      <p className="text-muted-foreground mb-6">
        Sorry, we couldn’t find the page you were looking for.
      </p>
      <a
        href="/"
        className="rounded bg-primary px-4 py-2 text-white hover:bg-primary/80"
      >
        Go back home
      </a>
    </div>
  );
}
