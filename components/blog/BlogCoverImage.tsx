import Image from "next/image";
import { cn } from "@/lib/utils";

type BlogCoverImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  hoverZoom?: boolean;
  /**
   * card — fills a fixed 16:10 frame (use hotspot-cropped Sanity URL)
   * natural — detail hero, image keeps its ratio
   */
  variant?: "card" | "natural";
  aspectClassName?: string;
};

/**
 * Proper approach:
 * - Cards use a Sanity CDN crop (16:10 + hotspot) so the file already matches the frame.
 * - Detail uses natural height so the full composition shows.
 */
export function BlogCoverImage({
  src,
  alt,
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px",
  hoverZoom = false,
  variant = "card",
  aspectClassName = "aspect-[16/10]",
}: BlogCoverImageProps) {
  if (variant === "natural") {
    return (
      <div
        className={cn("relative w-full overflow-hidden leading-none", className)}
        style={{ background: "#0D1B2A" }}
      >
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={900}
          priority={priority}
          sizes={sizes}
          unoptimized
          className={cn(
            "block w-full h-auto max-w-full",
            hoverZoom && "transition-transform duration-500 group-hover:scale-[1.015]"
          )}
        />
      </div>
    );
  }

  return (
    <div
      className={cn("relative w-full overflow-hidden", aspectClassName, className)}
      style={{ background: "#0D1B2A" }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        unoptimized
        className={cn(
          "object-cover object-center",
          hoverZoom && "transition-transform duration-500 group-hover:scale-[1.03]"
        )}
      />
    </div>
  );
}
