export default function TestimonialSlider() {
  const slides = [
    { name: "Asha", text: "Great experience, booked easily." },
    { name: "Ravi", text: "Professional doctors and smooth UI." },
    { name: "Kavita", text: "Loved the instant booking." },
  ];

  return (
    <div className="card mt-6">
      <h4 className="font-medium">What patients say</h4>

      <div className="mt-3 grid md:grid-cols-3 gap-3">
        {slides.map((s) => (
          <div key={s.name} className="p-3 border rounded">
            <div className="font-medium">{s.name}</div>
            <div className="text-sm text-gray-600">{s.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
