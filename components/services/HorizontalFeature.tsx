import React from "react";
import { Section, SectionHeader, ButtonLink } from "@/components/ui/kit";
import { CellGrid, FeatureCell } from "@/components/ui/blocks";
import { type HeadingTag } from "@/components/ui/SectionHeading";

export interface HorizontalFeatureItem {
  title: string;
  description: string | any[];
  icon: React.ReactNode;
  outcomeTitle?: string;
  outcomeDescription?: string | any[];
}

interface HorizontalFeatureProps {
  title?: string;
  description?: string | any[];
  items: HorizontalFeatureItem[];
  bgWhite?: boolean;
  ctaText?: string;
  ctaHref?: string;
  titleAs?: HeadingTag;
  eyebrow?: string;
}

/** Capability panel: icon, title, description and a key outcome per item. */
export const HorizontalFeature: React.FC<HorizontalFeatureProps> = ({
  title,
  description,
  items,
  bgWhite = false,
  ctaText,
  ctaHref = "/contact",
  titleAs = "h2",
  eyebrow,
}) => {
  if (!items?.length) return null;

  return (
    <Section tone={bgWhite ? "raised" : "base"}>
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        as={titleAs}
        layout={description ? "split" : "stack"}
        className="mb-14 lg:mb-16"
      />

      <CellGrid cols={items.length % 3 === 0 ? 3 : 2}>
        {items.map((item, index) => (
          <FeatureCell
            key={index}
            index={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            footerLabel={item.outcomeTitle}
            footer={item.outcomeDescription}
          />
        ))}
      </CellGrid>

      {ctaText && (
        <div className="mt-12 flex justify-center">
          <ButtonLink href={ctaHref} arrow>
            {ctaText}
          </ButtonLink>
        </div>
      )}
    </Section>
  );
};
