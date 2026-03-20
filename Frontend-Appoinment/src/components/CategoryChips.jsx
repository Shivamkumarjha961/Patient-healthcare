export default function CategoryChips({onChoose}){ 
    const specs=['Cardiologist','Dentist','Dermatologist','Pediatrician','ENT', 'Orthopedic']; 
    return <div className="flex gap-6 flex-wrap">{specs.map(s=> <button key={s} onClick={()=>onChoose(s)} className="filter-chip">{s}</button>)}</div> }