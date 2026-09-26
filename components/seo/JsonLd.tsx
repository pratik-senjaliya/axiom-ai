interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

function stripContext(node: Record<string, unknown>) {
  const { ["@context"]: _ignored, ...rest } = node;
  return rest;
}

export function JsonLd({ data }: JsonLdProps) {
  const graphs = Array.isArray(data) ? data : [data];

  const payload =
    graphs.length === 1
      ? graphs[0]
      : {
          "@context": "https://schema.org",
          "@graph": graphs.map(stripContext),
        };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
