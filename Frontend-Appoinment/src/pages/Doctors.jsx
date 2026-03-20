import DOCTORS from '../data/mockDoctors'
import DoctorCard from '../components/DoctorCard'
import Filters from '../components/Filters'
import { useState } from 'react'

export default function Doctors() {
  const [spec, setSpec] = useState('')
  const [sort, setSort] = useState('rating')
  const [minExp, setMinExp] = useState('')  // ALWAYS NUMBER
  const [view, setView] = useState('grid')

  // ---------- SAFE FILTERING ----------
  let list = DOCTORS.filter(d =>
    (spec ? d.specialization === spec : true) &&
    d.experience >= Math.max(0, minExp)  // PREVENT NEGATIVE EXPERIENCE
  )

  // ---------- SORT ----------
  if (sort === 'rating') list = list.sort((a, b) => b.rating - a.rating)
  if (sort === 'fees') list = list.sort((a, b) => a.fees - b.fees)
  if (sort === 'experience') list = list.sort((a, b) => b.experience - a.experience)

  return (
    <section className="container mx-auto px-4 py-6">

      {/* TOP BAR */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Available Doctors</h2>

        <div className="flex items-center gap-2">
          {view === 'grid' ? (
            <button
              onClick={() => setView('list')}
              className="small-btn bg-blue-400 text-white p-2 font-bold rounded-2xl"
            >
              List View
            </button>
          ) : (
            <button
              onClick={() => setView('grid')}
              className="small-btn bg-blue-400 text-white p-2 font-bold rounded-2xl"
            >
              Grid View
            </button>
          )}
        </div>
      </div>

      {/* FILTERS */}
      <Filters
        spec={spec}
        setSpec={setSpec}
        sort={sort}
        setSort={setSort}
        minExp={minExp}
        setMinExp={(val) => setMinExp(Number(val))}  // ALWAYS NUMBER
      />

      {/* DOCTOR LIST */}
      <div className={view === 'grid' ? 'grid gap-4 mt-4' : 'flex flex-col gap-3 mt-4'}>
        {list.map(d =>
          view === 'grid' ? (
            <DoctorCard key={d.id} doc={d} />
          ) : (
            <div key={d.id} className="card flex items-center justify-between">
              <div>
                <div className="font-medium">{d.name}</div>
                <div className="text-sm text-gray-600">{d.specialization}</div>
              </div>
              <div>
                <a href={'/doctor/' + d.id} className="small-btn">View</a>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  )
}
