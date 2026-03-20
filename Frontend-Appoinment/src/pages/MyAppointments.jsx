import { useEffect, useState } from "react";

export default function MyAppointments() {
  const [appts, setAppts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState("");

  // FETCH APPOINTMENTS
  useEffect(() => {
    const fetchAppts = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(
          "http://localhost:5000/api/appointments/mine",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (!res.ok) {
          throw new Error("");
        }

        const data = await res.json();
        setAppts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAppts();
  }, []);

  // DELETE APPOINTMENT
  async function confirmCancel() {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        `http://localhost:5000/api/appointments/cancel/${selectedId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error("Failed to cancel appointment");
      }

      setAppts((prev) =>
        prev.filter((a) => a._id !== selectedId)
      );

      setShowConfirm(false);
      setSelectedId(null);
    } catch (err) {
      setError(err.message);
      setShowConfirm(false);
    }
  }

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-4 relative">
      <h2 className="text-3xl font-semibold mb-4 text-green-600">
        My Appointments
      </h2>

      {/* ERROR MESSAGE */}
      {error && (
        <div className="mb-4 text-red-600 font-medium">
          {error}
        </div>
      )}

      {appts.length === 0 ? (
        <p>No appointments yet.</p>
      ) : (
        <ul className="space-y-4">
          {appts.map((a) => (
            <li
              key={a._id}
              className="border bg-white p-4 rounded-lg shadow flex justify-between"
            >
              <div>
                <div className="font-semibold">{a.doctorName}</div>
                <div>
                  <strong>Date:</strong> {a.date}{" "}
                  <strong>Time:</strong> {a.time}
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedId(a._id);
                  setShowConfirm(true);
                }}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Cancel
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* CUSTOM CONFIRM MODAL */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
            <h3 className="font-semibold text-lg mb-3">
              Cancel Appointment?
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Are you sure you want to cancel this appointment?
            </p>

            <div className="flex justify-between">
              <button
                onClick={() => setShowConfirm(false)}
                className="border px-4 py-2 rounded"
              >
                No
              </button>
              <button
                onClick={confirmCancel}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Yes, Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
