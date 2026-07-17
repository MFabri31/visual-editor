export default function FooterPreview({ config }) {
  return (
    <footer style={config} className="flex items-center">
      <div className="w-full max-w-5xl mx-auto px-6 flex items-center justify-between">
        <p className="m-0">&copy; 2026 Visual Editor. All rights reserved.</p>
        <ul className="flex gap-4 list-none m-0 p-0">
          <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacidad</a></li>
          <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Términos</a></li>
        </ul>
      </div>
    </footer>
  )
}
