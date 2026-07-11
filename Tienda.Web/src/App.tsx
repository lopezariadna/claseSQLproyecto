import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Revision from './pages/reclamar/Revision'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/reclamar/revision" element={<Revision />} />
        <Route path="*" element={<Navigate to="/reclamar/revision" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
