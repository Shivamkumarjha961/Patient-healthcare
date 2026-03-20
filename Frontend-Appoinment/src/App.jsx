import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import DoctorProfile from './pages/DoctorProfile'
import MyAppointments from './pages/MyAppointments'
// import Dashboard from './pages/Dashboard'
import HealthTools from "./pages/HealthTools";
import Auth from './pages/Auth'

export default function App() {
  return (
    <>
      <Header />
      
      <main className="min-h-[60vh] bg-gray-300">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctor/:id" element={<DoctorProfile />} />
          <Route path="/appointments" element={<MyAppointments />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/health-tools" element={<HealthTools />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </main>

      {/* <Footer /> */}
    </>
  )
}
