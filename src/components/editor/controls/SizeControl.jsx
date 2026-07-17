export default function SizeControl({ label, value, onChange }) {
  const numValue = parseFloat(value) || 0
  const unit = value.includes('%') ? '%' : 'px'

  const handleNumber = (e) => {
    onChange(`${e.target.value}${unit}`)
  }

  const handleUnit = (e) => {
    onChange(`${numValue}${e.target.value}`)
  }

  return (
    <div className="flex items-center justify-between gap-2">
      <label className="text-sm text-slate-700">{label}</label>
      <div className="flex gap-1">
        <input
          type="number"
          value={numValue}
          onChange={handleNumber}
          className="w-16 px-2 py-1 text-sm border border-slate-300 rounded"
        />
        <select
          value={unit}
          onChange={handleUnit}
          className="px-1 py-1 text-sm border border-slate-300 rounded"
        >
          <option value="px">px</option>
          <option value="%">%</option>
        </select>
      </div>
    </div>
  )
}
