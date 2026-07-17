import { cssFromConfig, styleAttr } from './utils'

export function generateHeroHTML(config) {
  return `<section ${styleAttr(config)}>
  <div style="max-width: 1200px; margin: 0 auto; padding: 0 24px; text-align: center;">
    <h1 style="font-size: 2.5em; font-weight: 700; margin: 0 0 16px;">Build Something Amazing</h1>
    <p style="font-size: 1.125em; opacity: 0.9; margin: 0 0 32px; max-width: 600px; margin-left: auto; margin-right: auto;">
      A powerful tool to create stunning web pages without writing code.
    </p>
    <a href="#" style="display: inline-block; padding: 12px 32px; background-color: rgba(255,255,255,0.2); color: inherit; text-decoration: none; border-radius: 8px; font-weight: 600;">Get Started</a>
  </div>
</section>`
}

export function generateHeroCSS(config) {
  return `section { ${cssFromConfig(config)} }
section h1 { margin: 0; }
section p { margin: 0; }`
}
