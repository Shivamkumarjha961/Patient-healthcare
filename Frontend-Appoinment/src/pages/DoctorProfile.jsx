import { useParams } from 'react-router-dom'
import DOCTORS from '../data/mockDoctors'
import { useState } from 'react'
import BookingModal from '../components/BookingModal'

export default function DoctorProfile(){
  const { id } = useParams()
  const doc = DOCTORS.find(d => d.id === id)
  const [open, setOpen] = useState(false)

  if(!doc){
    return <div className="container mx-auto px-4 py-6"><div className="card text-red-600">Doctor not found</div></div>
  }

  return (
    <section className="container mx-auto px-4 py-6">
      <div className="card flex flex-col md:flex-row gap-6 items-start">
        <img src={doc.img} alt={doc.name} className="w-44 h-44 rounded-lg object-cover shadow-sm"/>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold">{doc.name}</h2>
          <p className="text-sm text-gray-600">{doc.specialization} • {doc.experience} yrs</p>
          <p className="mt-3 text-gray-700">{doc.bio}</p>
          <div className="mt-4 flex items-center gap-3">
            <div className="text-sm">Fees: <span className="font-semibold">₹{doc.fees}</span></div>
            <div className="text-sm">Rating: <span className="font-semibold">★ {doc.rating}</span></div>
          </div>

          <div className="mt-6">
            <h4 className="font-medium mb-2">Available slots</h4>
            <div className="flex gap-2 flex-wrap">
              {doc.timings.map(t => <button key={t} onClick={() => { setOpen(true) }} className="px-3 py-1 border rounded">{t}</button>)}
            </div>
            <div className="mt-4">
              <button onClick={() => setOpen(true)} className="button-primary">Book Appointment</button>
            </div>
          </div>
        </div>
      </div>

      {open && <BookingModal doc={doc} onClose={() => setOpen(false)} />}
    </section>
  )
}
