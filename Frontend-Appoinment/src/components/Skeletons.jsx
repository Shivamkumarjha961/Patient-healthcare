import React from "react";

// Standard shimmer background style
const shimmerClass = "relative overflow-hidden bg-gray-200 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/50 before:to-transparent";

export function DoctorCardSkeleton() {
  return (
    <div className="card flex gap-4 items-center">
      {/* Doctor Image Placeholder */}
      <div className={`w-28 h-28 rounded-lg ${shimmerClass}`} />
      
      {/* Content Skeleton */}
      <div className="flex-1 space-y-3">
        <div className="flex justify-between items-start">
          <div className="space-y-2 flex-1">
            {/* Doctor Name */}
            <div className={`h-5 w-2/3 rounded ${shimmerClass}`} />
            {/* Specialization & Experience */}
            <div className={`h-4 w-1/2 rounded ${shimmerClass}`} />
          </div>
          <div className="text-right space-y-2 w-16">
            {/* Fees */}
            <div className={`h-4 w-full rounded ${shimmerClass}`} />
            {/* Rating */}
            <div className={`h-4 w-full rounded ${shimmerClass}`} />
          </div>
        </div>
        {/* Bio */}
        <div className={`h-4 w-5/6 rounded ${shimmerClass} mt-2`} />
        
        {/* Buttons */}
        <div className="flex gap-2 mt-3">
          <div className={`h-8 w-16 rounded ${shimmerClass}`} />
          <div className={`h-8 w-16 rounded ${shimmerClass}`} />
        </div>
      </div>
    </div>
  );
}

export function TopRatedSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="rounded-xl shadow border overflow-hidden bg-white p-3 space-y-3">
          {/* Card Image */}
          <div className={`w-full h-40 rounded-lg ${shimmerClass}`} />
          {/* Card Details */}
          <div className="space-y-2">
            <div className={`h-5 w-3/4 rounded ${shimmerClass}`} />
            <div className={`h-4 w-1/2 rounded ${shimmerClass}`} />
            <div className={`h-4 w-1/3 rounded ${shimmerClass}`} />
            <div className={`h-8 w-full rounded mt-3 ${shimmerClass}`} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function DoctorsPageSkeleton() {
  return (
    <div className="space-y-4">
      {/* Filters Bar Skeleton */}
      <div className="card space-y-4 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className={`h-10 rounded-lg ${shimmerClass}`} />
          <div className={`h-10 rounded-lg ${shimmerClass}`} />
          <div className={`h-10 rounded-lg ${shimmerClass}`} />
        </div>
      </div>
      
      {/* List of cards */}
      <div className="grid gap-4 mt-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <DoctorCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}

export function AppointmentsSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="border bg-white p-4 rounded-lg shadow flex justify-between items-center">
          <div className="space-y-2 flex-1">
            <div className={`h-5 w-1/3 rounded ${shimmerClass}`} />
            <div className={`h-4 w-1/2 rounded ${shimmerClass}`} />
          </div>
          <div className={`h-10 w-24 rounded ${shimmerClass}`} />
        </div>
      ))}
    </div>
  );
}

// Inline keyframe injection helper component to support CSS animations without editing index.css
export function ShimmerStyles() {
  return (
    <style>{`
      @keyframes shimmer {
        100% {
          transform: translateX(100%);
        }
      }
    `}</style>
  );
}
