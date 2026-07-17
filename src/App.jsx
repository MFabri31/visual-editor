import useEditor from './hooks/useEditor'
import Layout from './components/layout/Layout'

export default function App() {
  const editor = useEditor()

  return <Layout editor={editor} />
}
