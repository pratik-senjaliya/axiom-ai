import { ButtonLink } from "@/components/ui/kit";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center overflow-hidden bg-ink-900 pt-[4.5rem]">
      <div aria-hidden className="bg-grid-fade" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(0,229,255,0.12), transparent 70%)" }}
      />
      <div className="container-custom relative py-24 text-center">
        <p className="eyebrow mb-6 justify-center">Error 404</p>
        <h1 className="font-display text-7xl font-semibold tracking-tight sm:text-8xl">
          <span className="gradient-text">404</span>
        </h1>
        <h2 className="h-section mt-6">Page Not Found</h2>
        <p className="lead mx-auto mt-5 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/" size="lg" arrow>
            Go Back Home
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
