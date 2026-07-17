export function kebabCase(str) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase()
}

export function cssFromConfig(config) {
  return Object.entries(config)
    .map(([key, value]) => `${kebabCase(key)}: ${value};`)
    .join(' ')
}

export function styleAttr(config) {
  return `style="${cssFromConfig(config)}"`
}
