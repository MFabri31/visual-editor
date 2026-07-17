import { COMPONENTS } from '../../data/components'
import Panel from '../shared/Panel'

export default function ComponentList({ editor }) {
  const { selectComponent } = editor

  return (
    <Panel title="Componentes">
      <div className="flex flex-col gap-2">
        {COMPONENTS.map((component) => (
          <button
            key={component.id}
            onClick={() => selectComponent(component.id)}
            className="w-full text-left px-3 py-3 rounded-lg border border-slate-200 hover:border-blue-400 hover:bg-blue-50 transition-colors cursor-pointer"
          >
            <div className="font-medium text-slate-800">{component.label}</div>
            <div className="text-xs text-slate-500 mt-0.5">{component.description}</div>
          </button>
        ))}
      </div>
    </Panel>
  )
}
