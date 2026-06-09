import { prepareTableHtmlForDisplay } from '@/lib/sanitizeTableHtml'

interface HtmlTableProps {
  value?: {
    html?: string
  }
}

export function HtmlTable({ value }: HtmlTableProps) {
  if (!value?.html) return null

  const html = prepareTableHtmlForDisplay(value.html)

  return (
    <div
      className="blog-table-wrapper my-10 overflow-x-auto rounded-2xl border border-[#00E5FF]/15 bg-[#0D1B2A]/80"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
