import React, { useState } from "react";
import DOCTORS from "../data/mockDoctors";
import DoctorCard from "../components/DoctorCard";
import Filters from "../components/Filters";

export default function Doctors() {
  const [spec, setSpec] = useState("");
  const [sort, setSort] = useState("rating");
  const [minExp, setMinExp] = useState(""); // ALWAYS NUMBER
  const [view, setView] = useState("grid");

  // ---------- SAFE FILTERING ----------
  let list = DOCTORS.filter((d) =>
    (spec ? d.specialization === spec : true) &&
    d.experience >= Math.max(0, minExp) // PREVENT NEGATIVE EXPERIENCE
  );

  // ---------- SORT ----------
  if (sort === "rating") list = list.sort((a, b) => b.rating - a.rating);
  if (sort === "fees") list = list.sort((a, b) => a.fees - b.fees);
  if (sort === "experience") list = list.sort((a, b) => b.experience - a.experience);

  return (
    <section className="container mx-auto px-4 py-6">
      {/* TOP BAR */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-900">Available Doctors</h2>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setView(view === "grid" ? "list" : "grid")}
            className="px-4 py-2 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 font-semibold rounded-lg text-sm transition-colors"
          >
            {view === "grid" ? "List View" : "Grid View"}
          </button>
        </div>
      </div>

      {/* FILTERS */}
      <Filters
        spec={spec}
        setSpec={setSpec}
        sort={sort}
        setSort={setSort}
        minExp={minExp}
        setMinExp={(val) => setMinExp(Number(val))} // ALWAYS NUMBER
      />

      {/* DOCTOR LIST */}
      {list.length === 0 ? (
        <div className="card text-center py-12 mt-4 text-gray-500">
          No doctors match the selected criteria.
        </div>
      ) : (
        <div className={view === "grid" ? "grid gap-4 mt-4" : "flex flex-col gap-3 mt-4"}>
          {list.map((d) =>
            view === "grid" ? (
              <DoctorCard key={d.id} doc={d} />
            ) : (
              <div
                key={d.id}
                className="card flex items-center justify-between hover:shadow-md transition-shadow duration-200"
              >
                <div>
                  <div className="font-semibold text-gray-900">{d.name}</div>
                  <div className="text-sm text-gray-600">
                    {d.specialization} • {d.experience} yrs exp • ₹{d.fees}
                  </div>
                </div>
                <div>
                  <a
                    href={"/doctor/" + d.id}
                    className="px-3 py-1.5 bg-indigo-600 text-white hover:bg-indigo-700 text-sm font-semibold rounded-lg transition-colors"
                  >
                    View
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </section>
  );
}
