import { useState } from 'react'
import { COMPONENT_DEFAULTS } from '../data/defaults'

export default function useEditor() {
  const [selectedComponent, setSelectedComponent] = useState(null)
  const [config, setConfig] = useState({})

  const selectComponent = (id) => {
    setSelectedComponent(id)
    setConfig(id ? { ...COMPONENT_DEFAULTS[id] } : {})
  }

  const updateStyle = (key, value) => {
    setConfig((prev) => ({ ...prev, [key]: value }))
  }

  return { selectedComponent, config, selectComponent, updateStyle }
}
