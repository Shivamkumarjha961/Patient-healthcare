// import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { useState } from "react";

// export default function Header() {
//   const { user, logout } = useAuth();
//   const [open, setOpen] = useState(false);
//   const [dropdown, setDropdown] = useState(false);

//   return (
//     <header className="bg-white/80 backdrop-blur sticky top-0 z-40 shadow-sm">
//       <div className="container mx-auto px-4 py-3 flex items-center justify-between">

//         {/* LOGO */}
//         <div className="flex items-center gap-3">
//           <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
//             MC
//           </div>
//           <div>
//             <h1 className="text-lg font-semibold">MediCare</h1>
//             <p className="text-xs text-gray-500">Patient healthcare</p>
//           </div>
//         </div>

//         {/* DESKTOP MENU */}
//         <nav className="hidden md:flex items-center gap-6 font-bold">

//           <Link to="/" className="text-sm text-gray-700 hover:text-indigo-600">
//             Home
//           </Link>

//           <Link to="/doctors" className="text-sm text-gray-700 hover:text-indigo-600">
//             Doctors
//           </Link>

//           <Link to="/appointments" className="text-sm text-gray-700 hover:text-indigo-600">
//             My Appointments
//           </Link>

//           <Link to="/health-tools" className="text-sm text-gray-700 hover:text-indigo-600">
//             Health Tools
//           </Link>

//           {/*  IF USER NOT LOGGED IN → SHOW SIGN IN */}
//           {!user && (
//             <Link to="/auth" className="text-sm text-gray-700 hover:text-indigo-600">
//               <button>Sign In</button>
//             </Link>
//           )}

//           {/*  IF USER LOGGED IN → USERNAME + DROPDOWN */}
//           {user && (
//             <div className="relative">
//               <button
//                 onClick={() => setDropdown(!dropdown)}
//                 className="text-lg font-bold text-green-700  hover:text-indigo-600"
//               >
//                {user.name}
//               </button>

//               {/* Dropdown Menu */}
//               {dropdown && (
//                 <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg py-2 z-50">

//                   <button
//                     onClick={() => {
//                       logout();
//                       setDropdown(false);
//                     }}
//                     className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           )}
//         </nav>

//         {/* MOBILE HAMBURGER */}
//         <button className="md:hidden" onClick={() => setOpen(!open)}>
//           {!open ? (
//             <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
//               <line x1="4" y1="7" x2="24" y2="7" />
//               <line x1="4" y1="14" x2="24" y2="14" />
//               <line x1="4" y1="21" x2="24" y2="21" />
//             </svg>
//           ) : (
//             <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
//               <line x1="6" y1="6" x2="22" y2="22" />
//               <line x1="22" y1="6" x2="6" y2="22" />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* MOBILE DROPDOWN MENU */}
//       {open && (
//         <div className="md:hidden bg-white border-t shadow-md px-4 py-4 space-y-4 animate-slideDown">

//           <Link to="/" onClick={() => setOpen(false)} className="block text-gray-700 text-sm">
//             Home
//           </Link>

//           <Link to="/doctors" onClick={() => setOpen(false)} className="block text-gray-700 text-sm">
//             Doctors
//           </Link>

//           <Link to="/appointments" onClick={() => setOpen(false)} className="block text-gray-700 text-sm">
//             My Appointments
//           </Link>

//           <Link to="/health-tools" onClick={() => setOpen(false)} className="block text-gray-700 text-sm">
//             Health Tools
//           </Link>

//           {/* SHOW SIGN IN IF USER NOT LOGGED IN */}
//           {!user && (
//             <Link to="/auth" onClick={() => setOpen(false)} className="block text-gray-700 text-sm">
//               <button>Sign In</button>
//             </Link>
//           )}

//           {/* SHOW LOGOUT IF USER LOGGED IN */}
//           {user && (
//             <>
//               <span className="block text-gray-800 font-semibold">
//                 {user.name}
//               </span>

//               <button
//                 onClick={() => {
//                   logout();
//                   setOpen(false);
//                 }}
//                 className="bg-red-500 text-white px-3 py-1 rounded shadow"
//               >
//                 Logout
//               </button>
//             </>
//           )}
//         </div>
//       )}
//     </header>
//   );
// }



import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Header() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();


  const handleLogout = () => {
    logout();                
    setDropdown(false);
    setOpen(false);
    navigate("/", { replace: true });
    window.location.reload(); 
  };

  return (
    <header className="bg-white/80 backdrop-blur sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
            MC
          </div>
          <div>
            <h1 className="text-lg font-semibold">MediCare</h1>
            <p className="text-xs text-gray-500">Patient healthcare</p>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-6 font-bold">

          <Link to="/" className="text-sm text-gray-700 hover:text-indigo-600">
            Home
          </Link>

          <Link to="/doctors" className="text-sm text-gray-700 hover:text-indigo-600">
            Doctors
          </Link>

          <Link to="/appointments" className="text-sm text-gray-700 hover:text-indigo-600">
            My Appointments
          </Link>

          <Link to="/health-tools" className="text-sm text-gray-700 hover:text-indigo-600">
            Health Tools
          </Link>

          {/* IF NOT LOGGED IN */}
          {!user && (
            <Link to="/auth" className="text-sm text-gray-700 hover:text-indigo-600">
              Sign In
            </Link>
          )}

          {/* IF LOGGED IN */}
          {user && (
            <div className="relative">
              <button
                onClick={() => setDropdown(!dropdown)}
                className="text-lg font-bold text-green-700 hover:text-indigo-600"
              >
                {user.name}
              </button>

              {dropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg py-2 z-50">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </nav>

        {/* MOBILE HAMBURGER */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {!open ? (
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="7" x2="24" y2="7" />
              <line x1="4" y1="14" x2="24" y2="14" />
              <line x1="4" y1="21" x2="24" y2="21" />
            </svg>
          ) : (
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="6" y1="6" x2="22" y2="22" />
              <line x1="22" y1="6" x2="6" y2="22" />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-md px-4 py-4 space-y-4 animate-slideDown">

          <Link to="/" onClick={() => setOpen(false)} className="block text-gray-700 text-sm">
            Home
          </Link>

          <Link to="/doctors" onClick={() => setOpen(false)} className="block text-gray-700 text-sm">
            Doctors
          </Link>

          <Link to="/appointments" onClick={() => setOpen(false)} className="block text-gray-700 text-sm">
            My Appointments
          </Link>

          <Link to="/health-tools" onClick={() => setOpen(false)} className="block text-gray-700 text-sm">
            Health Tools
          </Link>

          {!user && (
            <Link to="/auth" onClick={() => setOpen(false)} className="block text-gray-700 text-sm">
              Sign In
            </Link>
          )}

          {user && (
            <>
              <span className="block text-gray-800 font-semibold">
                {user.name}
              </span>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1 rounded shadow"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
}
