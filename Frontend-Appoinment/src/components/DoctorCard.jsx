import { Link } from 'react-router-dom'
export default function DoctorCard({doc}) { 
    return ( <div className="card flex gap-4 items-center"> <img src={doc.img} alt={doc.name} className="w-28 h-28 rounded-lg object-cover shadow-sm"/> 
    <div className="flex-1"> <div className="flex items-center justify-between"> <div> <h3 className="text-lg font-semibold">{doc.name}</h3>
     <div className="text-sm text-gray-600">{doc.specialization} • {doc.experience} yrs</div> </div> 
     <div className="text-right"> <div className="text-sm text-gray-600">₹{doc.fees}</div> 
     <div className="text-xs text-yellow-600">★ {doc.rating}</div> </div> </div> 
     <p className="mt-2 text-sm text-gray-700">{doc.bio}</p> <div className="mt-3 flex gap-2"> 
        <Link to={`/doctor/${doc.id}`} className="px-3 py-1 border rounded text-sm">View</Link> 
        <Link to={`/doctor/${doc.id}`} className="px-3 py-1 bg-indigo-600 text-white rounded text-sm">Book</Link> 
        </div> </div> </div> ) }