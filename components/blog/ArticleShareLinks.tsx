interface ArticleShareLinksProps {
  title: string;
  url: string;
  linkClassName?: string;
}

export function ArticleShareLinks({
  title,
  url,
  linkClassName = "hover:text-[#00E5FF] transition-colors",
}: ArticleShareLinksProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const linkedInShareText = encodeURIComponent(`${title}\n\n${url}`);

  return (
    <>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
        aria-label={`Share "${title}" on Twitter`}
      >
        Twitter
      </a>
      <a
        href={`https://www.linkedin.com/feed/?shareActive=true&text=${linkedInShareText}`}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
        aria-label={`Share "${title}" on LinkedIn`}
      >
        LinkedIn
      </a>
    </>
  );
}
