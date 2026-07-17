import { cssFromConfig, styleAttr } from './utils'

export function generateNavbarHTML(config) {
  return `<nav ${styleAttr(config)}>
  <div style="max-width: 1200px; margin: 0 auto; padding: 0 24px; display: flex; align-items: center; justify-content: space-between; height: 100%;">
    <div style="font-weight: 700; font-size: 1.25em;">Logo</div>
    <ul style="list-style: none; display: flex; gap: 24px; margin: 0; padding: 0;">
      <li><a href="#" style="color: inherit; text-decoration: none;">Inicio</a></li>
      <li><a href="#" style="color: inherit; text-decoration: none;">Servicios</a></li>
      <li><a href="#" style="color: inherit; text-decoration: none;">Contacto</a></li>
    </ul>
  </div>
</nav>`
}

export function generateNavbarCSS(config) {
  return `nav { ${cssFromConfig(config)} }
nav ul { list-style: none; margin: 0; padding: 0; display: flex; gap: 24px; }
nav a { color: inherit; text-decoration: none; }`
}
