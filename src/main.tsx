import { createRoot } from 'react-dom/client'
import App from './App'
import '@/assets/global.css'
import 'virtual:uno.css'

const container = document.getElementById('app') as HTMLElement

const root = createRoot(container)

root.render(<App />)
