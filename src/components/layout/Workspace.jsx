import HeroPreview from '../preview/HeroPreview'
import NavbarPreview from '../preview/NavbarPreview'
import HeaderPreview from '../preview/HeaderPreview'
import FooterPreview from '../preview/FooterPreview'

const PREVIEWS = {
  navbar: NavbarPreview,
  header: HeaderPreview,
  hero: HeroPreview,
  footer: FooterPreview,
}

export default function Workspace({ editor }) {
  const { selectedComponent, config } = editor

  if (!selectedComponent) {
    return (
      <main className="flex-1 flex items-center justify-center bg-slate-100 text-slate-400 text-lg">
        Selecciona un componente del panel izquierdo
      </main>
    )
  }

  const Preview = PREVIEWS[selectedComponent]

  return (
    <main className="flex-1 flex items-center justify-center bg-slate-100 p-8 overflow-auto">
      <div className="w-full max-w-4xl shadow-lg">
        <Preview config={config} />
      </div>
    </main>
  )
}
