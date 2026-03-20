import { Link } from 'react-router-dom'
export default function Hero(){
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="card flex flex-col md:flex-row items-center gap-6 p-8">
        <div className="flex-1">
          <h2 className="text-3xl font-bold">Find & Book Trusted Doctors Near You</h2>
          <p className="text-gray-600 mt-3">Search by specialty, filter by experience, and book instantly. Demo stores bookings locally.</p>
          <div className="mt-6 flex gap-3">
            <Link to="/doctors" className="button-primary">Find Doctors</Link>
            <a className="px-4 py-2 border rounded-lg text-sm" href="#how">How it works</a>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <img src="https://wallpaperaccess.com/full/4113310.jpg" alt="Hospital image" className="rounded-xl shadow-md object-cover w-full h-56"/>
        </div>
      </div>
    </section>
  )
}
