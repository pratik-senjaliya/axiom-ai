import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-neutral-900">
          Page Not Found
        </h2>
        <p className="text-lg text-neutral-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button size="lg">Go Back Home</Button>
        </Link>
      </div>
    </div>
  );
}

