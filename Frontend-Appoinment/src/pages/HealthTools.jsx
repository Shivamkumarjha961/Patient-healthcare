import Footer from "../components/Footer";
import Chat from "./Chat";
export default function HealthTools() {
  return (
    <>
   <section className="container mx-auto px-6 py-12">
  {/* Heading */}
  <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 tracking-wide">
    Health Tools
  </h2>

  {/* GRID LAYOUT — LIKE YOUR IMAGE */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

    {/* BMI CALCULATOR */}
    <div className="p-6 rounded-xl border shadow-sm hover:shadow-md transition bg-white">
      <h3 className="text-xl font-semibold">BMI Calculator</h3>
      <p className="text-sm text-gray-600 mt-1">Check your Body Mass Index</p>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <input id="bmiWeight" type="number" placeholder="Weight (kg)" className="border p-2 rounded" />
        <input id="bmiHeight" type="number" placeholder="Height (cm)" className="border p-2 rounded" />
      </div>

      <button
        onClick={() => {
          const w = document.getElementById("bmiWeight").value;
          const h = document.getElementById("bmiHeight").value;

          if (!w || !h) {
            document.getElementById("bmiResult").innerText = "Please enter weight & height";
            return;
          }

          const bmi = (w / ((h / 100) ** 2)).toFixed(1);
          let status = bmi < 18.5 ? "Underweight" :
                       bmi < 24.9 ? "Normal" :
                       bmi < 29.9 ? "Overweight" : "Obese";

          document.getElementById("bmiResult").innerText = `BMI: ${bmi} (${status})`;
        }}
        className="mt-4 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 w-full"
      >
        Calculate BMI
      </button>

      <p id="bmiResult" className="text-sm mt-3 font-medium text-gray-700"></p>
    </div>

    {/* BLOOD PRESSURE CHECK */}
    <div className="p-6 rounded-xl border shadow-sm hover:shadow-md transition bg-white">
      <h3 className="text-xl font-semibold">Blood Pressure Check</h3>
      <p className="text-sm text-gray-600 mt-1">Check BP health status</p>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <input id="bpSys" type="number" placeholder="Systolic" className="border p-2 rounded" />
        <input id="bpDia" type="number" placeholder="Diastolic" className="border p-2 rounded" />
      </div>

      <button
        onClick={() => {
          const sys = +document.getElementById("bpSys").value;
          const dia = +document.getElementById("bpDia").value;

          let result = !sys || !dia ? "Enter both values" :
                       sys <= 120 && dia <= 80 ? "Normal BP" :
                       sys <= 130 && dia < 80 ? "Elevated BP" :
                       sys <= 140 || dia <= 90 ? "High BP (Stage 1)" :
                       "High BP (Stage 2)";

          document.getElementById("bpResult").innerText = result;
        }}
        className="mt-4 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 w-full"
      >
        Check BP
      </button>

      <p id="bpResult" className="text-sm mt-3 font-medium text-gray-700"></p>
    </div>

    {/* WATER INTAKE */}
    <div className="p-6 rounded-xl border shadow-sm hover:shadow-md transition bg-white">
      <h3 className="text-xl font-semibold">Water Intake Calculator</h3>
      <p className="text-sm text-gray-600 mt-1">Recommended hydration per day</p>

      <input id="waterWeight" type="number" placeholder="Weight (kg)" className="border p-2 rounded w-full mt-4" />

      <button
        onClick={() => {
          const w = document.getElementById("waterWeight").value;
          if (!w) {
            document.getElementById("waterResult").innerText = "Enter weight first";
            return;
          }
          const liters = (w * 0.033).toFixed(2);
          document.getElementById("waterResult").innerText = `${liters} liters/day`;
        }}
        className="mt-4 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 w-full"
      >
        Calculate Water Intake
      </button>

      <p id="waterResult" className="text-sm mt-3 font-medium text-gray-700"></p>
    </div>

    {/* CALORIE REQUIREMENT */}
    <div className="p-6 rounded-xl border shadow-sm hover:shadow-md transition bg-white">
      <h3 className="text-xl font-semibold">Calorie Requirement</h3>
      <p className="text-sm text-gray-600 mt-1">Based on age, gender, weight & height</p>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <input id="calAge" type="number" placeholder="Age" className="border p-2 rounded" />
        <input id="calWeight" type="number" placeholder="Weight (kg)" className="border p-2 rounded" />
        <input id="calHeight" type="number" placeholder="Height (cm)" className="border p-2 rounded" />
        <select id="calGender" className="border p-2 rounded">
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>

      <button
        onClick={() => {
          const age = +document.getElementById("calAge").value;
          const w = +document.getElementById("calWeight").value;
          const h = +document.getElementById("calHeight").value;
          const g = document.getElementById("calGender").value;

          if (!age || !w || !h) {
            document.getElementById("calorieResult").innerText = "Fill all fields";
            return;
          }

          let bmr = g === "Male"
            ? 88.36 + 13.4 * w + 4.8 * h - 5.7 * age
            : 447.6 + 9.2 * w + 3.1 * h - 4.3 * age;

          const calories = Math.round(bmr * 1.375);

          document.getElementById("calorieResult").innerText = `${calories} calories/day`;
        }}
        className="mt-4 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 w-full"
      >
        Calculate Calories
      </button>

      <p id="calorieResult" className="text-sm mt-3 font-medium text-gray-700"></p>
    </div>

  </div>
</section>


          <Chat/>
    <Footer/>
    </>
  );
}
