export default function Filters({spec, setSpec, sort, setSort, minExp, setMinExp})
{ return ( <div className="flex flex-wrap gap-3 items-center"> <select value={spec} onChange={e=>setSpec(e.target.value)} className="border p-2 rounded">
     <option value=''>All Specializations</option> <option>Cardiologist</option><option>Dentist</option>
     <option>Dermatologist</option><option>Pediatrician</option><option>ENT</option> </select>
      <select value={sort} onChange={e=>setSort(e.target.value)} className="border p-2 rounded">
         <option value='rating'>Sort: Rating</option> 
         <option value='fees'>Sort: Fees</option>
          <option value='experience'>Sort: Experience</option> 
          </select> 
          <input type="number" value={minExp} onChange={e=>setMinExp(Number(e.target.value))} className=" w-35 border p-2 rounded" placeholder="Min experience" /> </div> ) }