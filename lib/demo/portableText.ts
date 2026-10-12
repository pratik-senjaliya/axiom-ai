/** Build a simple Sanity portable-text paragraph array from plain strings */
export function pt(...paragraphs: string[]) {
  return paragraphs.map((text, i) => ({
    _type: "block" as const,
    _key: `p${i}_${Math.random().toString(36).slice(2, 8)}`,
    style: "normal" as const,
    markDefs: [] as any[],
    children: [
      {
        _type: "span" as const,
        _key: `s${i}`,
        text,
        marks: [] as string[],
      },
    ],
  }));
}

export function titledItem(title: string, description: string) {
  return { title, description: pt(description) };
}
