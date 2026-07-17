import { cssFromConfig, styleAttr } from './utils'

export function generateHeaderHTML(config) {
  return `<header ${styleAttr(config)}>
  <div style="max-width: 1200px; margin: 0 auto; padding: 0 24px; display: flex; align-items: center; height: 100%;">
    <h1 style="margin: 0; font-weight: 700;">Welcome to Our Site</h1>
    <p style="margin: 4px 0 0; opacity: 0.8;">Discover what we have to offer</p>
  </div>
</header>`
}

export function generateHeaderCSS(config) {
  return `header { ${cssFromConfig(config)} }
header h1 { margin: 0; }`
}
