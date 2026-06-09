'use client'

import { useCallback, useEffect, useRef } from 'react'
import { PortableTextInput, PatchEvent, insert, type ArrayOfObjectsInputProps } from 'sanity'
import { uuid } from '@sanity/uuid'
import { extractTableHtml, plainTextToTableHtml } from '@/lib/sanitizeTableHtml'

function buildHtmlTableBlock(html: string) {
  return {
    _type: 'htmlTable',
    _key: uuid(),
    html,
  }
}

export function BlogPortableTextInput(props: ArrayOfObjectsInputProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const handlePaste = useCallback(
    (event: ClipboardEvent) => {
      const html = event.clipboardData?.getData('text/html')
      const plain = event.clipboardData?.getData('text/plain')

      const tableHtml =
        (html && /<table/i.test(html) ? extractTableHtml(html) : null) ||
        (plain && plain.includes('\t') ? plainTextToTableHtml(plain) : null)

      if (!tableHtml) return

      event.preventDefault()
      event.stopPropagation()

      const focusPath = props.focusPath
      const insertPath =
        Array.isArray(focusPath) && focusPath.length > 0 ? focusPath : [-1]

      props.onChange(
        PatchEvent.from(insert([buildHtmlTableBlock(tableHtml)], 'after', insertPath))
      )
    },
    [props]
  )

  useEffect(() => {
    const node = containerRef.current
    if (!node) return

    node.addEventListener('paste', handlePaste, true)
    return () => node.removeEventListener('paste', handlePaste, true)
  }, [handlePaste])

  return (
    <div ref={containerRef}>
      <PortableTextInput {...(props as any)} />
    </div>
  )
}
