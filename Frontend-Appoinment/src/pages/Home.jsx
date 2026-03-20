import Hero from "../components/Hero";
import CategoryChips from "../components/CategoryChips";
import TestimonialSlider from "../components/TestimonialSlider";
import DOCTORS from "../data/mockDoctors";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Home() {
  const topRated = DOCTORS.sort((a, b) => b.rating - a.rating).slice(0, 6);
  const popularSpecialties = [
    "Cardiology",
    "Dermatology",
    "Dentistry",
    "Pediatrics",
    "ENT",
    "Orthopedics",
  ];

  return (
    <>
      <Hero />
      <section className="container mx-auto px-4 py-0">
        <div className="flex flex-col md:flex-row gap-8">
          {/* LEFT SIDE CONTENT (EXPANDS MORE) */}
          <div className="md:w-2/3 space-y-8">
            {/* SEARCH DOCTORS */}
            <div className="card">
              <h3 className="text-xl font-semibold">Find a Specialist</h3>
              <p className="text-gray-600 text-sm">Choose specialty to get started</p>
              <div className="mt-4">
                <CategoryChips onChoose={() => {}} />
              </div>
            </div>
            {/* POPULAR SPECIALTIES */}
                  <div className="card">
            <h3 className="text-xl font-semibold">Popular Specialties</h3>

            <div className="grid grid-cols-1 min-[360px]:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {popularSpecialties.map((item, i) => (
                <div
                  key={i}
                  className="p-4 text-center bg-indigo-50 rounded-xl border hover:bg-indigo-100 cursor-pointer transition"
                >
                  <div className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>


            {/* TOP RATED DOCTORS */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Top Rated Doctors</h3>

              <div className="grid md:grid-cols-3 gap-4">
                {topRated.map((doc) => (
                  <div
                    key={doc.id}
                    className="rounded-xl shadow hover:shadow-lg transition border overflow-hidden bg-white"
                  >
                    <img src={doc.img} className="w-full h-40 object-cover" alt={doc.name} />
                    <div className="p-3">
                      <div className="font-semibold">{doc.name}</div>
                      <div className="text-sm text-gray-600">{doc.specialization}</div>
                      <div className="text-yellow-500 font-medium mt-1">⭐ {doc.rating}</div>
                      <Link
                        to={`/doctor/${doc.id}`}
                        className="block w-full mt-3 bg-indigo-600 text-white py-1.5 rounded text-center text-sm hover:bg-indigo-700"
                      >
                        View Profile
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* HOW IT WORKS */}
            <div className="card">
              <h3 className="text-xl font-semibold">How Appointment Works</h3>
              <div className="grid md:grid-cols-3 gap-6 mt-4">
                <div className="text-center">
                  <div className="text-3xl">🔍</div>
                  <h4 className="font-bold mt-3">Search Doctor</h4>
                  <p className="text-sm text-gray-600">Find the right doctor instantly.</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl">📅</div>
                  <h4 className="font-bold mt-3">Book Appointment</h4>
                  <p className="text-sm text-gray-600">Choose your preferred time slot.</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl">💬</div>
                  <h4 className="font-bold mt-3">Consultation</h4>
                  <p className="text-sm text-gray-600">Visit clinic or online consult.</p>
                </div>
              </div>
            </div>

            {/* TESTIMONIALS */}
            <TestimonialSlider />

            {/* FAQ SECTION */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>

              <div className="space-y-4">
                <details className="p-3 border rounded-lg bg-gray-50">
                  <summary className="font-medium">How to book an appointment?</summary>
                  <p className="text-gray-600 mt-2 text-sm">
                    Choose a doctor → Pick a time → Confirm appointment.
                  </p>
                </details>

                <details className="p-3 border rounded-lg bg-gray-50">
                  <summary className="font-medium">Is online consultation available?</summary>
                  <p className="text-gray-600 mt-2 text-sm">
                    Yes, many doctors offer video consultation.
                  </p>
                </details>

                <details className="p-3 border rounded-lg bg-gray-50">
                  <summary className="font-medium">Do I need to pay online?</summary>
                  <p className="text-gray-600 mt-2 text-sm">
                    Payments are made at clinic unless mentioned.
                  </p>
                </details>
              </div>
            </div>
          </div>

          {/* SUPER LONG SIDEBAR (ZERO BLANK SPACE) */}
          <aside className="md:w-1/3 space-y-4 self-stretch">

            {/* SUPPORT */}
            <div className="card">
              <h4 className="font-semibold text-lg">Need Help?</h4>
              <p className="text-sm text-gray-600 mt-2">Call <b>1800-000-000</b></p>
            </div>

            {/* DOWNLOAD APP */}
            <div className="card">
              <h4 className="font-semibold text-lg">Download App</h4>
              <p className="text-sm text-gray-600 mt-2">For Android & iOS (Coming Soon)</p>
              <div className="flex gap-3 mt-3">
                <div className="p-2 bg-black text-white rounded-md w-full text-center cursor-pointer">Play Store</div>
                <div className="p-2 bg-gray-800 text-white rounded-md w-full text-center cursor-pointer">App Store</div>
              </div>
            </div>

            {/* WHY CHOOSE US */}
            <div className="card">
              <h4 className="font-semibold text-lg">Why Choose Us?</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>✔ Verified Doctors</li>
                <li>✔ Instant Appointments</li>
                <li>✔ 24/7 Patient Support</li>
                <li>✔ 50,000+ Happy Patients</li>
                <li>✔ Modern Healthcare Facilities</li>
              </ul>
            </div>

            {/* HEALTH ARTICLES */}
            <div className="card">
              <h4 className="font-semibold text-lg">Health Articles</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>🩺 Maintain a Healthy Heart</li>
                <li>🌿 Glowing Skin Foods</li>
                <li>💤 Importance of Good Sleep</li>
                <li>👶 Child Growth Tips</li>
                <li>😷 Boost Your Immunity</li>
              </ul>
            </div>

            {/* APPOINTMENTS */}
            <div className="card">
              <h4 className="font-semibold text-lg">Your Appointments</h4>
              <p className="text-sm text-gray-600 mt-2">No appointments yet.</p>
              <p className="text-xs text-gray-500 mt-1">Book to see your schedule here.</p>
            </div>

            {/* TRENDING DOCTORS */}
            <div className="card">
              <h4 className="font-semibold text-lg">Trending Doctors</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>⭐ Dr. Anjali Sharma — Cardiologist</li>
                <li>⭐ Dr. Karishma Chawla — Dermatologist</li>
                <li>⭐ Dr. Vikram Singh — Pediatrician</li>
                <li>⭐ Dr. Ramesh Chauhan — Dentist</li>
              </ul>
            </div>

            {/* HOSPITAL LIST */}
            <div className="card">
              <h4 className="font-semibold text-lg">Top Hospitals</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>🏥 Apollo Hospital</li>
                <li>🏥 Fortis Healthcare</li>
                <li>🏥 Max Super Specialty</li>
                <li>🏥 AIIMS Delhi</li>
              </ul>
            </div>

            {/* QUICK LINKS */}
            <div className="card">
              <h4 className="font-semibold text-lg">Quick Links</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>• Book Appointment</li>
                <li>• Health Packages</li>
                <li>• My Reports</li>
                <li>• Support</li>
              </ul>
            </div>

            {/* EMERGENCY CONTACTS */}
            <div className="card">
              <h4 className="font-semibold text-lg p-1">Emergency Help</h4>
              <ul className="mt-3 space-y-1 text-sm text-gray-700">
                <li>🚑 Ambulance: <b>108</b></li>
                <li>👮 Police: <b>100</b></li>
                <li>🔥 Fire: <b>101</b></li>
              </ul>
            </div>

            {/* NEWSLETTER */}
            <div className="card">
              <h4 className="font-semibold text-lg p-1">Subscribe for Updates</h4>
              <p className="text-sm text-gray-600 mt-2">Get latest offers & health tips</p>
              <input
                type="email"
                className="mt-3 w-full border p-2 rounded"
                placeholder="Enter your email"
              />
              <button className="mt-3 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
                Subscribe
              </button>
            </div>

          </aside>
        </div>
      </section>


       <Footer/>
    </>
  );
}
