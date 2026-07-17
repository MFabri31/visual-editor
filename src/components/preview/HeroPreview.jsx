export default function HeroPreview({ config }) {
  return (
    <section
      style={config}
      className="flex items-center justify-center"
    >
      <div className="text-center max-w-4xl mx-auto px-6">
        <h1 className="text-[2.5em] font-bold mb-4 leading-tight">
          Build Something Amazing
        </h1>
        <p className="text-[1.125em] opacity-90 mb-8 max-w-xl mx-auto">
          A powerful tool to create stunning web pages without writing code.
        </p>
        <a
          href="#"
          className="inline-block px-8 py-3 rounded-lg font-semibold"
          style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'inherit', textDecoration: 'none' }}
        >
          Get Started
        </a>
      </div>
    </section>
  )
}
