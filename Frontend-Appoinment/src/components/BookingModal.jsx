import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function BookingModal({ doc, onClose }) {
  const { user } = useAuth();

  const [step, setStep] = useState(1);
  const [date, setDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().slice(0, 10);
  });
  const [time, setTime] = useState(doc?.timings?.[0] || "");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // ✅ NEW

  const next = () => {
    setError("");
    setStep((s) => Math.min(3, s + 1));
  };

  const prev = () => {
    setError("");
    setStep((s) => Math.max(1, s - 1));
  };

  //  BACKEND BOOKING (NO alert(), NO localhost popup)
  async function confirmBooking(e) {
    e.preventDefault();

    if (!user) {
      setError("Please login to book appointment");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const token = localStorage.getItem("token");

      const res = await fetch(
        "http://localhost:5000/api/appointments/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            doctorName: doc.name,
            date,
            time,
            symptoms: notes,
          }),
        }
      );

      const data = await res.json();

      //  SHOW BACKEND ERROR INSIDE MODAL
      if (!res.ok) {
        setError(data.error || "Booking failed");
        return;
      }

      setStep(3); // success
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-40">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-5">

        {/* HEADER */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            Book: {doc.name}
          </h3>
          <div className="text-sm text-gray-500">
            Step {step}/3
          </div>
        </div>

        {/* ERROR MESSAGE */}
        {error && (
          <div className="mt-3 text-red-600 text-sm text-center">
            {error}
          </div>
        )}

        {/* STEP 1 */}
        {step === 1 && (
          <div className="mt-4">
            <label className="text-sm text-gray-600">
              Choose Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border p-2 rounded mt-1"
            />
            <div className="mt-3">
              <button onClick={next} className="button-primary">
                Next
              </button>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <form onSubmit={confirmBooking} className="mt-4">
            <label className="text-sm text-gray-600">
              Choose Time
            </label>
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full border p-2 rounded mt-1"
            >
              {doc.timings.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>

            <label className="text-sm text-gray-600 mt-2">
              Notes
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full border p-2 rounded mt-1"
              placeholder="Any symptoms or notes (optional)"
            />

            <div className="mt-3 flex gap-2">
              <button
                type="button"
                onClick={prev}
                className="border px-3 py-2 rounded"
              >
                Back
              </button>

              <button
                type="submit"
                disabled={loading}
                className="button-primary"
              >
                {loading ? "Booking..." : "Confirm"}
              </button>
            </div>
          </form>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="mt-4 text-center">
            <div className="text-2xl">✅</div>
            <div className="mt-2 font-medium">
              Booking Confirmed
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Your appointment has been saved.<br />
              Check <b>My Appointments</b>.
            </p>
            <div className="mt-4">
              <button onClick={onClose} className="button-primary">
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
