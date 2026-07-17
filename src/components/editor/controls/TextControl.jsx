export default function TextControl({ label, value, onChange }) {
  return (
    <div className="flex items-center justify-between">
      <label className="text-sm text-slate-700">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-24 px-2 py-1 text-sm border border-slate-300 rounded text-right"
      />
    </div>
  )
}
