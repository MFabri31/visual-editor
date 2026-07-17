export default function HeaderPreview({ config }) {
  return (
    <header style={config} className="flex items-center">
      <div className="w-full max-w-5xl mx-auto px-6">
        <h1 className="font-bold m-0">Welcome to Our Site</h1>
        <p className="m-0 mt-1 opacity-80">Discover what we have to offer</p>
      </div>
    </header>
  )
}
