import Sidebar from './Sidebar'
import Workspace from './Workspace'
import ActionBar from './ActionBar'

export default function Layout({ editor }) {
  return (
    <div className="flex h-screen">
      <Sidebar editor={editor} />
      <Workspace editor={editor} />
      <ActionBar editor={editor} />
    </div>
  )
}
