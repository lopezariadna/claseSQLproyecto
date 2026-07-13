import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Revision from './pages/reclamar/Revision'
import NuevosLanzamientos from './pages/NuevosLanzamientos'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/reclamar/revision" element={<Revision />} />
        <Route path="/nuevos-lanzamientos" element={<NuevosLanzamientos />} />
        <Route path="*" element={<Navigate to="/reclamar/revision" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
