import React from "react";
import { PortableText } from "@/components/ui/PortableText";
import { ObstacleSection } from "@/components/services/ObstacleSection";

type ChallengeItem = {
  title: string;
  description?: any;
};

/** Challenges — sticky heading with numbered editorial rows (same pattern as service pages). */
export function IndustryChallengePanel({
  title = "Finance Challenges We Solve",
  description,
  items,
}: {
  title?: string;
  description?: any;
  items: ChallengeItem[];
}) {
  if (!items?.length) return null;

  return (
    <ObstacleSection
      eyebrow="Pain points"
      title={title}
      subtitle={description ? <PortableText value={description} /> : undefined}
      items={items.map((item) => ({ title: item.title, description: item.description }))}
    />
  );
}
