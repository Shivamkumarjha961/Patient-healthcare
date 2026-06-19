import React, { Suspense } from 'react'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import RouteLoading from './components/RouteLoading'
import { ShimmerStyles } from './components/Skeletons'

// Lazy load route pages
const Home = React.lazy(() => import('./pages/Home'))
const Doctors = React.lazy(() => import('./pages/Doctors'))
const DoctorProfile = React.lazy(() => import('./pages/DoctorProfile'))
const MyAppointments = React.lazy(() => import('./pages/MyAppointments'))
const HealthTools = React.lazy(() => import('./pages/HealthTools'))
const Auth = React.lazy(() => import('./pages/Auth'))

export default function App() {
  return (
    <>
      <ShimmerStyles />
      <Header />
      
      <main className="min-h-[60vh] bg-gray-50 pb-12">
        <Suspense fallback={<RouteLoading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctor/:id" element={<DoctorProfile />} />
            <Route path="/appointments" element={<MyAppointments />} />
            <Route path="/health-tools" element={<HealthTools />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </Suspense>
      </main>
    </>
  )
}
