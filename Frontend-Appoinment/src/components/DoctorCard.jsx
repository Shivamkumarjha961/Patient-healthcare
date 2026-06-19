import React from "react";
import { Link } from "react-router-dom";
import placeholderImg from "../assets/doctors/placeholder.webp";

export default function DoctorCard({ doc }) {
  return (
    <div className="card flex gap-4 items-center hover:shadow-lg transition-shadow duration-200">
      <img
        src={doc.img}
        alt={doc.name}
        className="w-28 h-28 rounded-lg object-cover shadow-sm bg-gray-100 flex-shrink-0"
        loading="lazy"
        width="112"
        height="112"
        onError={(e) => {
          e.target.src = placeholderImg;
        }}
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 truncate">{doc.name}</h3>
            <div className="text-sm text-gray-600 truncate">
              {doc.specialization} • {doc.experience} yrs exp
            </div>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="text-sm font-semibold text-indigo-600">₹{doc.fees}</div>
            <div className="text-xs text-yellow-600 font-medium">★ {doc.rating}</div>
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{doc.bio}</p>
        <div className="mt-3 flex gap-2">
          <Link
            to={`/doctor/${doc.id}`}
            className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            View
          </Link>
          <Link
            to={`/doctor/${doc.id}`}
            className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Book
          </Link>
        </div>
      </div>
    </div>
  );
}