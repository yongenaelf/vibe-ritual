import { Routes, Route } from 'react-router-dom'
import DailyIntention from './pages/DailyIntention'
import Sanctuary from './pages/Sanctuary'
import RitualBuilder from './pages/RitualBuilder'
import ObjectsLibrary from './pages/ObjectsLibrary'

function App() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <Routes>
        <Route path="/" element={<Sanctuary />} />
        <Route path="/intention" element={<DailyIntention />} />
        <Route path="/ritual" element={<RitualBuilder />} />
        <Route path="/library" element={<ObjectsLibrary />} />
      </Routes>
    </div>
  )
}

export default App
