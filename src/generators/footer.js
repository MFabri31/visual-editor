import { cssFromConfig, styleAttr } from './utils'

export function generateFooterHTML(config) {
  return `<footer ${styleAttr(config)}>
  <div style="max-width: 1200px; margin: 0 auto; padding: 0 24px; display: flex; align-items: center; justify-content: space-between; height: 100%;">
    <p style="margin: 0;">&copy; 2026 Visual Editor. All rights reserved.</p>
    <ul style="list-style: none; display: flex; gap: 16px; margin: 0; padding: 0;">
      <li><a href="#" style="color: inherit; text-decoration: none;">Privacidad</a></li>
      <li><a href="#" style="color: inherit; text-decoration: none;">Términos</a></li>
    </ul>
  </div>
</footer>`
}

export function generateFooterCSS(config) {
  return `footer { ${cssFromConfig(config)} }
footer ul { list-style: none; margin: 0; padding: 0; display: flex; gap: 16px; }
footer a { color: inherit; text-decoration: none; }`
}
