import { useState } from 'react'
import Button from '../shared/Button'
import { copyToClipboard } from '../../utils/clipboard'
import { generateHeroHTML, generateHeroCSS } from '../../generators/hero'
import { generateNavbarHTML, generateNavbarCSS } from '../../generators/navbar'
import { generateHeaderHTML, generateHeaderCSS } from '../../generators/header'
import { generateFooterHTML, generateFooterCSS } from '../../generators/footer'

const GENERATORS = {
  hero: { html: generateHeroHTML, css: generateHeroCSS },
  navbar: { html: generateNavbarHTML, css: generateNavbarCSS },
  header: { html: generateHeaderHTML, css: generateHeaderCSS },
  footer: { html: generateFooterHTML, css: generateFooterCSS },
}

export default function ActionBar({ editor }) {
  const { selectedComponent, config } = editor
  const [copied, setCopied] = useState(null)

  if (!selectedComponent) return null

  const gen = GENERATORS[selectedComponent]
  if (!gen) return null

  const handleCopy = async (type) => {
    const text = type === 'html' ? gen.html(config) : gen.css(config)
    const ok = await copyToClipboard(text)
    if (ok) {
      setCopied(type)
      setTimeout(() => setCopied(null), 2000)
    }
  }

  return (
    <aside className="w-48 bg-white border-l border-slate-200 p-4 flex flex-col gap-3 flex-shrink-0">
      <Button onClick={() => handleCopy('html')}>
        {copied === 'html' ? '¡Copiado!' : 'Copiar HTML'}
      </Button>
      <Button onClick={() => handleCopy('css')} variant="secondary">
        {copied === 'css' ? '¡Copiado!' : 'Copiar CSS'}
      </Button>
    </aside>
  )
}
