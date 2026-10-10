import { Routes, Route } from 'react-router-dom'
import TopTabs from './components/TopTabs.jsx'
import StickyContactBar from './components/StickyContactBar.jsx'
import Property from './pages/Property.jsx'
import PrintingJobs from './pages/PrintingJobs.jsx'

export default function App() {
  return (
    <>
      <TopTabs />

      <Routes>
        <Route path="/" element={<Property />} />
        <Route path="/printing-jobs" element={<PrintingJobs />} />
      </Routes>

      <StickyContactBar />
    </>
  )
}
