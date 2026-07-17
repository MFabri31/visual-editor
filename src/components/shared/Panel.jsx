export default function Panel({ title, children, className = '' }) {
  return (
    <div className={`border-b border-slate-200 p-4 ${className}`}>
      {title && (
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
          {title}
        </h3>
      )}
      {children}
    </div>
  )
}
