import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [tab, setTab] = useState("patientLogin");

  // Patient Login State
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  // Patient Signup State
  const [fullName, setFullName] = useState("");
  const [signupPhone, setSignupPhone] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const { login, signup } = useAuth();
  const navigate = useNavigate();

  // Patient Login
  const handlePatientLogin = async () => {
    try {
      await login({
        phone: phone,
        password: password,
      });
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  // Patient Signup
  const handlePatientSignup = async () => {
    try {
      await signup({
        name: fullName,
        phone: signupPhone,
        password: signupPassword,
      });
      // navigate("/");
      alert("Signup successful! Please login.");
      setTab("patientLogin");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{
          backgroundImage:
            "url('https://th.bing.com/th/id/R.03992495e7864fa4df13c4d420eb291d?rik=1Goi1CIt%2fpXZnw&riu=http%3a%2f%2fwww.hdwallpaperspulse.com%2fwp-content%2fuploads%2f2017%2f12%2f23%2fbeautiful-hd-widescreen-image.jpg&ehk=2qOe9hCSlllAqFdbmc3iB5rE3%2buZSRF0o%2bsjV7BEn2s%3d&risl=&pid=ImgRaw&r=0')",
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-black/40 to-indigo-700/60 backdrop-blur-md"></div>

      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="bg-white/90 backdrop-blur-xl w-full max-w-md shadow-2xl p-8 rounded-2xl border border-white/40">

          <h2 className="text-3xl font-extrabold text-center mb-6 text-indigo-700">
            Welcome to AppointmentBook
          </h2>

          {/* ---------------- PATIENT LOGIN ---------------- */}
          {tab === "patientLogin" && (
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border p-2 rounded"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border p-2 rounded"
              />

              <button
                onClick={handlePatientLogin}
                className="w-full bg-indigo-600 text-white py-2 rounded-lg"
              >
                Login as Patient
              </button>

              <p className="text-center text-sm text-gray-700">
                New user?{" "}
                <span
                  className="text-indigo-700 cursor-pointer"
                  onClick={() => setTab("patientSignup")}
                >
                  Signup
                </span>
              </p>
            </div>
          )}

          {/* ---------------- PATIENT SIGNUP ---------------- */}
          {tab === "patientSignup" && (
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border p-2 rounded"
              />

              <input
                type="text"
                placeholder="Phone Number"
                value={signupPhone}
                onChange={(e) => setSignupPhone(e.target.value)}
                className="w-full border p-2 rounded"
              />

              <input
                type="password"
                placeholder="Create Password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                className="w-full border p-2 rounded"
              />

              <button
                onClick={handlePatientSignup}
                className="w-full bg-green-600 text-white py-2 rounded-lg"
              >
                Create Account
              </button>

              <p className="text-center text-sm text-gray-700">
                Already have an account?{" "}
                <span
                  className="text-indigo-700 cursor-pointer"
                  onClick={() => setTab("patientLogin")}
                >
                  Login
                </span>
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
