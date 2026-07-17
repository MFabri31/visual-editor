export default function NavbarPreview({ config }) {
  return (
    <nav style={config} className="flex items-center">
      <div className="w-full max-w-5xl mx-auto px-6 flex items-center justify-between h-full">
        <div className="font-bold text-[1.25em]">Logo</div>
        <ul className="flex gap-6 list-none m-0 p-0">
          <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Inicio</a></li>
          <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Servicios</a></li>
          <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Contacto</a></li>
        </ul>
      </div>
    </nav>
  )
}
