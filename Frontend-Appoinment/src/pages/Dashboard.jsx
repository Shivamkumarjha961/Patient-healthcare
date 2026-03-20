// export default function Dashboard() {
//   const appts = loadAppointments();

//   // compute stats
//   const total = appts.length;
//   const upcoming = appts.filter(a => a.status !== "cancelled").length;
//   const cancelled = appts.filter(a => a.status === "cancelled").length;

//   return (
//     <section className="container mx-auto px-4 py-8">

//       {/* PAGE TITLE */}
//       <h2 className="text-3xl font-bold mb-6">
//         Dashboard Overview
//       </h2>

//       {/* TOP STATS CARDS */}
//       <div className="grid md:grid-cols-3 gap-6 mb-8">

//         <div className="card bg-white/70 shadow-lg border-l-4 border-indigo-500">
//           <h4 className="text-sm text-gray-500">Total Appointments</h4>
//           <div className="text-3xl font-bold mt-2">{total}</div>
//         </div>

//         <div className="card bg-white/70 shadow-lg border-l-4 border-green-500">
//           <h4 className="text-sm text-gray-500">Upcoming</h4>
//           <div className="text-3xl font-bold mt-2">{upcoming}</div>
//         </div>

//         <div className="card bg-white/70 shadow-lg border-l-4 border-red-500">
//           <h4 className="text-sm text-gray-500">Cancelled</h4>
//           <div className="text-3xl font-bold mt-2">{cancelled}</div>
//         </div>

//       </div>

//       {/* CHART + UPCOMING SECTION */}
//       <div className="grid lg:grid-cols-3 gap-6">

//         {/* ANALYTICS CHART */}
//         <div className="card lg:col-span-2">
//           <h4 className="text-lg font-semibold mb-4">Booking Analytics</h4>

//           <div className="flex items-end gap-3 h-48 mt-6">

//             {/* This is demo data */}
//             {[20, 50, 70, 90, 60, 40].map((h, i) => (
//               <div
//                 key={i}
//                 className="flex-1 bg-gradient-to-t from-indigo-300 to-indigo-600 rounded-xl"
//                 style={{ height: `${h}%` }}
//               ></div>
//             ))}

//           </div>

//           <div className="flex justify-between mt-4 text-xs text-gray-500 px-2">
//             <span>Mon</span><span>Tue</span><span>Wed</span>
//             <span>Thu</span><span>Fri</span><span>Sat</span>
//           </div>
//         </div>

//         {/* UPCOMING APPOINTMENTS */}
//         <div className="card">
//           <h4 className="text-lg font-semibold mb-3">Upcoming Appointments</h4>

//           <div className="space-y-3 max-h-64 overflow-auto pr-1">
//             {appts.length === 0 && (
//               <div className="text-sm text-gray-600">
//                 No appointments yet.
//               </div>
//             )}

//             {appts
//               .filter(a => a.status !== "cancelled")
//               .map((a) => (
//                 <div
//                   key={a.id}
//                   className="border rounded-lg p-3 hover:bg-gray-50 transition"
//                 >
//                   <div className="font-medium">{a.doctorName}</div>
//                   <div className="text-sm text-gray-600">
//                     {a.date} • {a.time}
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>

//       {/* PATIENT LIST PREVIEW */}
//       <div className="card mt-8">
//         <h4 className="text-lg font-semibold mb-4">Recent Patients (Demo)</h4>

//         <div className="grid sm:grid-cols-3 gap-4">

//           {["Asha", "Rahul", "Priya"].map((p, i) => (
//             <div key={i} className="p-4 border rounded-xl bg-white/70 shadow-sm">
//               <div className="font-medium">{p}</div>
//               <div className="text-sm text-gray-600">Visited last week</div>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }
function Dashboard() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6">
                Dashboard Overview
            </h2>
            <p className="text-gray-600">Dashboard content goes here.</p>
        </div>
    );
}
export default Dashboard;