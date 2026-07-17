export default function Button({ children, onClick, variant = 'primary' }) {
  const base = 'px-4 py-2 rounded-lg font-medium cursor-pointer transition-colors'
  const styles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-slate-200 text-slate-800 hover:bg-slate-300',
  }

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </button>
  )
}
