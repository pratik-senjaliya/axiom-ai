import React from "react";
import { cn } from "@/lib/utils";
import { PortableText } from "@/components/ui/PortableText";

interface TestimonialProps {
  quote: string | any[];
  author: string;
  role: string;
  company: string;
  className?: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  company,
  className,
}) => {
  return (
    <div className={cn("bg-white rounded-lg p-6 md:p-8 shadow-soft", className)}>
      <div className="text-lg md:text-xl text-neutral-700 mb-6 leading-relaxed italic">
        <PortableText value={quote} />
      </div>
      <div className="border-t border-neutral-200 pt-4">
        <p className="font-semibold text-neutral-900 mb-1">{author}</p>
        <p className="text-sm text-neutral-600">
          {role}
          {company && (
            <>
              {", "}
              <span className="font-medium">{company}</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

