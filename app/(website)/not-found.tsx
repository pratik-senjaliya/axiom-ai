import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-orange-50/40 rounded-full blur-[100px] pointer-events-none -z-10 mix-blend-multiply"></div>
      <div className="text-center px-4 relative z-10">
        <h1 className="text-9xl font-black text-[#FF821C] mb-4 tracking-tight drop-shadow-sm">404</h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#26201D] tracking-tight">
          Page Not Found
        </h2>
        <p className="text-lg text-neutral-500 mb-10 max-w-md mx-auto leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Link href="/">
          <Button size="lg" className="rounded-full bg-[#26201D] hover:bg-[#26201D]/90 text-white px-8 h-14 font-medium transition-opacity">
            Go Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

