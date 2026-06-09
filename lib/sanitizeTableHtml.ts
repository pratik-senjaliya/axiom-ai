const ALLOWED_TAGS = new Set(['TABLE', 'THEAD', 'TBODY', 'TFOOT', 'TR', 'TH', 'TD', 'CAPTION', 'COLGROUP', 'COL'])
const ALLOWED_ATTRS = new Set(['colspan', 'rowspan', 'scope', 'headers', 'abbr'])

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function sanitizeNode(node: Element) {
  if (!ALLOWED_TAGS.has(node.tagName)) {
    const parent = node.parentNode
    if (!parent) return

    while (node.firstChild) {
      parent.insertBefore(node.firstChild, node)
    }
    parent.removeChild(node)
    return
  }

  Array.from(node.attributes).forEach((attr) => {
    if (!ALLOWED_ATTRS.has(attr.name.toLowerCase())) {
      node.removeAttribute(attr.name)
    }
  })

  Array.from(node.children).forEach((child) => sanitizeNode(child as Element))
}

export function sanitizeTableElement(table: HTMLTableElement) {
  sanitizeNode(table)
  table.classList.add('blog-table')
  return table.outerHTML
}

export function extractTableHtml(html: string) {
  const doc = new DOMParser().parseFromString(html, 'text/html')
  const table = doc.querySelector('table')
  if (!table) return null
  return sanitizeTableElement(table)
}

export function plainTextToTableHtml(text: string) {
  const lines = text
    .trim()
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)

  if (lines.length < 2) return null

  const rows = lines
    .map((line) => line.split('\t').map((cell) => cell.trim()))
    .filter((cells) => cells.length > 1)

  if (!rows.length) return null

  const htmlRows = rows
    .map((cells, rowIndex) => {
      const cellTag = rowIndex === 0 ? 'th' : 'td'
      const cellsHtml = cells.map((cell) => `<${cellTag}>${escapeHtml(cell)}</${cellTag}>`).join('')
      return `<tr>${cellsHtml}</tr>`
    })
    .join('')

  return `<table class="blog-table"><tbody>${htmlRows}</tbody></table>`
}
