export default function ColorControl({ label, value, onChange }) {
  return (
    <div className="flex items-center justify-between">
      <label className="text-sm text-slate-700">{label}</label>
      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-10 h-8 p-0 border border-slate-300 rounded cursor-pointer"
      />
    </div>
  )
}
