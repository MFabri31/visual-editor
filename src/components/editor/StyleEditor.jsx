import Panel from '../shared/Panel'
import ColorControl from './controls/ColorControl'
import SizeControl from './controls/SizeControl'
import TextControl from './controls/TextControl'
import { COMPONENTS } from '../../data/components'

const FIELDS = [
  { key: 'width', label: 'Ancho', control: 'size' },
  { key: 'height', label: 'Alto', control: 'size' },
  { key: 'backgroundColor', label: 'Fondo', control: 'color' },
  { key: 'color', label: 'Texto', control: 'color' },
  { key: 'borderRadius', label: 'Borde redondeado', control: 'text' },
  { key: 'fontSize', label: 'Tamaño de fuente', control: 'text' },
]

export default function StyleEditor({ editor }) {
  const { selectedComponent, config, updateStyle } = editor
  const meta = COMPONENTS.find((c) => c.id === selectedComponent)

  const renderControl = (field) => {
    const props = {
      label: field.label,
      value: config[field.key],
      onChange: (val) => updateStyle(field.key, val),
    }

    switch (field.control) {
      case 'color': return <ColorControl {...props} />
      case 'size': return <SizeControl {...props} />
      default: return <TextControl {...props} />
    }
  }

  return (
    <div>
      <div className="p-4 border-b border-slate-200">
        <button
          onClick={() => editor.selectComponent(null)}
          className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer"
        >
          ← Volver
        </button>
        <h2 className="text-lg font-semibold text-slate-800 mt-1">{meta?.label}</h2>
      </div>
      <Panel title="Estilos">
        <div className="flex flex-col gap-3">
          {FIELDS.map((field) => (
            <div key={field.key}>{renderControl(field)}</div>
          ))}
        </div>
      </Panel>
    </div>
  )
}
