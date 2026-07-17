import ComponentList from '../editor/ComponentList'
import StyleEditor from '../editor/StyleEditor'

export default function Sidebar({ editor }) {
  const { selectedComponent } = editor

  return (
    <aside className="w-72 bg-white border-r border-slate-200 overflow-y-auto h-screen flex-shrink-0">
      {selectedComponent
        ? <StyleEditor editor={editor} />
        : <ComponentList editor={editor} />
      }
    </aside>
  )
}
