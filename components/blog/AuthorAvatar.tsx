import Image from "next/image";
import { cn } from "@/lib/utils";

interface AuthorAvatarProps {
  author: string;
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
}

const sizeStyles = {
  xs: "w-7 h-7 text-[10px]",
  sm: "w-8 h-8 text-[10px]",
  md: "w-10 h-10 text-sm",
  lg: "w-24 h-24 md:w-32 md:h-32 text-3xl",
} as const;

const iconPadding = {
  xs: "p-1.5",
  sm: "p-1.5",
  md: "p-2",
  lg: "p-6 md:p-7",
} as const;

export function AuthorAvatar({ author, size = "lg", className }: AuthorAvatarProps) {
  const isSyncOrigins = author === "SyncOrigins";

  if (isSyncOrigins) {
    return (
      <div
        className={cn(
          "rounded-full overflow-hidden flex-shrink-0 border",
          sizeStyles[size],
          className
        )}
        style={{
          background: "rgba(0,229,255,0.1)",
          borderColor: "rgba(0,229,255,0.25)",
        }}
      >
        <div className={cn("relative w-full h-full", iconPadding[size])}>
          <Image
            src="/SyncOrigin_Icon.png"
            alt="SyncOrigins"
            fill
            className="object-contain"
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center font-bold border",
        sizeStyles[size],
        className
      )}
      style={{
        background: "rgba(0,229,255,0.1)",
        borderColor: "rgba(0,229,255,0.25)",
        color: "#00E5FF",
      }}
    >
      {author.charAt(0)}
    </div>
  );
}
