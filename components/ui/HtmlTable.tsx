interface HtmlTableProps {
  value?: {
    html?: string
  }
}

export function HtmlTable({ value }: HtmlTableProps) {
  if (!value?.html) return null

  return (
    <div
      className="blog-table-wrapper my-10 overflow-x-auto rounded-2xl border border-[#00E5FF]/15"
      dangerouslySetInnerHTML={{ __html: value.html }}
    />
  )
}
