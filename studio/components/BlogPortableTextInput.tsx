'use client'

import { useCallback } from 'react'
import { PortableTextInput, type PortableTextInputProps } from 'sanity'
import { uuid } from '@sanity/uuid'
import { extractTableHtml, plainTextToTableHtml } from '@/lib/sanitizeTableHtml'

function buildHtmlTableBlock(html: string) {
  return {
    _type: 'htmlTable',
    _key: uuid(),
    html,
  }
}

export function BlogPortableTextInput(props: PortableTextInputProps) {
  const onPaste = useCallback<NonNullable<PortableTextInputProps['onPaste']>>(
    (data) => {
      const html = data.event.clipboardData?.getData('text/html')
      const plain = data.event.clipboardData?.getData('text/plain')

      const tableHtml =
        (html && /<table/i.test(html) ? extractTableHtml(html) : null) ||
        (plain && plain.includes('\t') ? plainTextToTableHtml(plain) : null)

      if (!tableHtml) return undefined

      return {
        insert: [buildHtmlTableBlock(tableHtml)],
      }
    },
    []
  )

  return <PortableTextInput {...props} onPaste={onPaste} />
}
