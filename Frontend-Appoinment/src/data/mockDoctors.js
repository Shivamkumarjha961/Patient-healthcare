const DOCTORS = [
  
  // ------------------------- CARDIOLOGISTS (10) -------------------------
 { id:'1', name:'Dr. Anjali Sharma', specialization:'Cardiologist', experience:12, fees:800, rating:4.8, bio:'Heart specialist with 12 years experience.', timings:['09:00','11:00','14:00'], img:'https://images.unsplash.com/photo-1550831107-1553da8c8464' },
{ id:'2', name:'Dr. Nisha Ahuja', specialization:'Cardiologist', experience:10, fees:750, rating:4.7, bio:'Non-invasive cardiology expert.', timings:['10:00','12:00','16:00'], img:'https://images.unsplash.com/photo-1524504388940-b1c1722653e1' },
{ id:'3', name:'Dr. Karan Bhatnagar', specialization:'Cardiologist', experience:14, fees:900, rating:4.8, bio:'Interventional cardiologist.', timings:['09:30','11:30','15:00'], img:'https://images.unsplash.com/photo-1556157382-97eda2d62296' },
{ id:'4', name:'Dr. Meenakshi Rao', specialization:'Cardiologist', experience:7, fees:650, rating:4.5, bio:'Echo & ECG specialist.', timings:['10:00','12:00','17:00'], img:'https://thumbs.dreamstime.com/b/young-woman-doctor-stethoscope-23791746.jpg' },
{ id:'5', name:'Dr. Arvind Kapoor', specialization:'Cardiologist', experience:15, fees:1000, rating:4.9, bio:'Critical care cardiologist.', timings:['09:00','11:00','13:00'], img:'https://img.freepik.com/premium-photo/portrait-indian-doctor-indian-doctor-smiling_890100-1265.jpg' },
{ id:'6', name:'Dr. Priya Nair', specialization:'Cardiologist', experience:9, fees:780, rating:4.6, bio:'Hypertension management specialist.', timings:['10:00','12:00','15:00'], img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2' },
{ id:'7', name:'Dr. Sameer Joshi', specialization:'Cardiologist', experience:11, fees:850, rating:4.7, bio:'Angioplasty and stent expert.', timings:['09:30','11:00','16:00'], img:'https://images.unsplash.com/photo-1582750433449-648ed127bb54' },
{ id:'8', name:'Dr. Ritu Sharma', specialization:'Cardiologist', experience:6, fees:600, rating:4.4, bio:'Preventive cardiology specialist.', timings:['10:00','12:00','15:30'], img:'https://tse4.mm.bing.net/th/id/OIP.GjDyJ0TSB6JEaUOqkU8FBQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' },
{ id:'9', name:'Dr. Devendra Singh', specialization:'Cardiologist', experience:13, fees:920, rating:4.8, bio:'Cardiac imaging specialist.', timings:['09:00','12:00','14:00'], img:'https://images.unsplash.com/photo-1530023367847-a683933f4172' },
{ id:'10', name:'Dr. Sneha Kulkarni', specialization:'Cardiologist', experience:8, fees:700, rating:4.6, bio:'Arrhythmia specialist.', timings:['09:00','11:00','16:00'], img:'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb' },


  // ----------------------------- DENTISTS (10) -----------------------------
{ id:'11', name:'Dr. Rajiv Patel', specialization:'Dentist', experience:9, fees:500, rating:4.6, bio:'Cosmetic & restorative dentistry specialist.', timings:['10:00','12:00','15:00'], img:'https://images.unsplash.com/photo-1537368910025-700350fe46c7' },
{ id:'12', name:'Dr. Kavita Shetty', specialization:'Dentist', experience:7, fees:450, rating:4.5, bio:'Root canal, braces & whitening expert.', timings:['09:30','11:30','14:00'], img:'https://thumbs.dreamstime.com/b/young-woman-doctor-stethoscope-23791746.jpg' },
{ id:'13', name:'Dr. Ramesh Chauhan', specialization:'Dentist', experience:12, fees:600, rating:4.7, bio:'Tooth extraction and gum surgery specialist.', timings:['10:00','13:00','16:00'], img:'https://as2.ftcdn.net/v2/jpg/03/05/41/27/1000_F_305412791_XRNiWaFCREjLLpSQfj0e736foBoYXXYv.jpg' },
{ id:'14', name:'Dr. Neha Mathur', specialization:'Dentist', experience:5, fees:400, rating:4.4, bio:'Kids dentistry & oral hygiene.', timings:['09:00','11:00','14:00'], img:'https://thumbs.dreamstime.com/b/young-woman-doctor-stethoscope-23791746.jpg' },
{ id:'15', name:'Dr. Arun Mehta', specialization:'Dentist', experience:15, fees:700, rating:4.8, bio:'Implants & maxillofacial surgery.', timings:['10:00','12:00','17:00'], img:'https://tse3.mm.bing.net/th/id/OIP.l8db2pxROCe08Zxtmqu9lQHaL3?rs=1&pid=ImgDetMain&o=7&rm=3' },
{ id:'16', name:'Dr. Sonal Trivedi', specialization:'Dentist', experience:8, fees:480, rating:4.5, bio:'Smile design & cosmetic dentistry.', timings:['09:30','11:00','13:00'], img:'https://images.unsplash.com/photo-1504439468489-c8920d796a29' },
{ id:'17', name:'Dr. Amit Malhotra', specialization:'Dentist', experience:10, fees:520, rating:4.6, bio:'Complete oral treatment expert.', timings:['10:00','12:00','15:00'], img:'https://images.unsplash.com/photo-1530023367847-a683933f4172' },
{ id:'18', name:'Dr. Pooja Thakur', specialization:'Dentist', experience:6, fees:450, rating:4.5, bio:'Braces & Invisalign specialist.', timings:['09:00','11:30','14:30'], img:'https://images.unsplash.com/photo-1582750433449-648ed127bb54' },
{ id:'19', name:'Dr. Arvind Kumar', specialization:'Dentist', experience:14, fees:650, rating:4.7, bio:'Wisdom tooth & oral surgery.', timings:['10:00','13:00','16:00'], img:'https://img.freepik.com/premium-photo/portrait-indian-doctor-indian-doctor-smiling_890100-1265.jpg' },
{ id:'20', name:'Dr. Vandana Krishnan', specialization:'Dentist', experience:11, fees:580, rating:4.7, bio:'Prosthodontics & jaw correction.', timings:['09:00','12:00','17:00'], img:'https://images.unsplash.com/photo-1524504388940-b1c1722653e1' },


   // --------------------------- DERMATOLOGISTS (10) ---------------------------
 { id:'21', name:'Dr. Meera Kapoor', specialization:'Dermatologist', experience:6, fees:650, rating:4.7, bio:'Expert skin & hair specialist.', timings:['10:00','12:00','16:00'], img:'https://images.unsplash.com/photo-1607746882042-944635dfe10e' },
{ id:'22', name:'Dr. Karishma Chawla', specialization:'Dermatologist', experience:9, fees:700, rating:4.8, bio:'Acne & pigmentation treatment expert.', timings:['09:30','11:30','14:00'], img:'https://tse4.mm.bing.net/th/id/OIP.GjDyJ0TSB6JEaUOqkU8FBQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' },
{ id:'23', name:'Dr. Preeti Shetty', specialization:'Dermatologist', experience:5, fees:600, rating:4.5, bio:'Dermato-surgeon & cosmetic procedures.', timings:['10:00','13:00','15:00'], img:'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb' },
{ id:'24', name:'Dr. Sameer Bhosale', specialization:'Dermatologist', experience:11, fees:850, rating:4.7, bio:'Laser hair removal & skin therapy expert.', timings:['09:00','12:00','16:30'], img:'https://th.bing.com/th/id/OIP.NyDBvHoKuzhsQAq5GwxIdgHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
{ id:'25', name:'Dr. Sanya Mehta', specialization:'Dermatologist', experience:7, fees:680, rating:4.6, bio:'Skin allergy & rash treatment.', timings:['10:00','12:00','17:00'], img:'https://tse4.mm.bing.net/th/id/OIP.GjDyJ0TSB6JEaUOqkU8FBQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' },
{ id:'26', name:'Dr. Riddhi Shah', specialization:'Dermatologist', experience:4, fees:550, rating:4.4, bio:'Acne & scar treatment expert.', timings:['09:00','11:00','15:30'], img:'https://tse4.mm.bing.net/th/id/OIP.GjDyJ0TSB6JEaUOqkU8FBQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' },
{ id:'27', name:'Dr. Pratik Vora', specialization:'Dermatologist', experience:10, fees:800, rating:4.7, bio:'Cosmetic dermatology & anti-aging expert.', timings:['10:00','13:00','16:30'], img:'https://images.unsplash.com/photo-1524504388940-b1c1722653e1' },
{ id:'28', name:'Dr. Shivani Rao', specialization:'Dermatologist', experience:8, fees:720, rating:4.5, bio:'Hair fall and dandruff specialist.', timings:['09:00','12:00','17:00'], img:'https://images.unsplash.com/photo-1550831107-1553da8c8464' },
{ id:'29', name:'Dr. Anupam Khurana', specialization:'Dermatologist', experience:12, fees:900, rating:4.8, bio:'Vitiligo treatment and skin surgery.', timings:['10:00','13:00','15:00'], img:'https://img.freepik.com/premium-photo/portrait-indian-doctor-indian-doctor-smiling_890100-1265.jpg' },
{ id:'30', name:'Dr. Ritu Bhatt', specialization:'Dermatologist', experience:6, fees:620, rating:4.6, bio:'Skin rejuvenation & glow treatments.', timings:['09:00','11:30','16:30'], img:'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e' },


   // --------------------------- PEDIATRICIANS (10) ---------------------------
{ id:'31', name:'Dr. Vikram Singh', specialization:'Pediatrician', experience:10, fees:700, rating:4.5, bio:'Child specialist & immunization expert.', timings:['10:00','12:00','16:00'], img:'https://th.bing.com/th/id/OIP.NyDBvHoKuzhsQAq5GwxIdgHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
{ id:'32', name:'Dr. Nisha Ahuja', specialization:'Pediatrician', experience:7, fees:650, rating:4.6, bio:'Neonatal care & newborn specialist.', timings:['09:00','11:30','15:00'], img:'https://images.unsplash.com/photo-1524504388940-b1c1722653e1' },
{ id:'33', name:'Dr. Rohan Khurana', specialization:'Pediatrician', experience:9, fees:680, rating:4.5, bio:'Child growth & development specialist.', timings:['10:00','13:00','16:00'], img:'https://th.bing.com/th/id/OIP.NyDBvHoKuzhsQAq5GwxIdgHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
{ id:'34', name:'Dr. Prerna Gupta', specialization:'Pediatrician', experience:12, fees:750, rating:4.7, bio:'Child infection & fever expert.', timings:['09:00','12:00','14:00'], img:'https://thumbs.dreamstime.com/b/young-woman-doctor-stethoscope-23791746.jpg' },
{ id:'35', name:'Dr. Arjun Thakur', specialization:'Pediatrician', experience:6, fees:620, rating:4.4, bio:'Vaccination & nutrition specialist.', timings:['10:00','12:00','15:30'], img:'https://images.unsplash.com/photo-1537368910025-700350fe46c7' },
{ id:'36', name:'Dr. Sneha Reddy', specialization:'Pediatrician', experience:5, fees:580, rating:4.3, bio:'Newborn & infant care expert.', timings:['11:00','14:00','16:00'], img:'https://images.unsplash.com/photo-1550831107-1553da8c8464' },
{ id:'37', name:'Dr. Nitin Bhandari', specialization:'Pediatrician', experience:15, fees:820, rating:4.8, bio:'Complex pediatric cases specialist.', timings:['09:30','13:00','16:30'], img:'https://images.unsplash.com/photo-1582750433449-648ed127bb54' },
{ id:'38', name:'Dr. Riddhi Jain', specialization:'Pediatrician', experience:7, fees:640, rating:4.6, bio:'Child diet & allergy specialist.', timings:['10:00','12:00','15:00'], img:'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb' },
{ id:'39', name:'Dr. Bharat Khatri', specialization:'Pediatrician', experience:11, fees:740, rating:4.7, bio:'Respiratory & lung issues in kids.', timings:['10:00','13:00','16:30'], img:'https://images.unsplash.com/photo-1556157382-97eda2d62296' },
{ id:'40', name:'Dr. Manisha Sawant', specialization:'Pediatrician', experience:8, fees:660, rating:4.5, bio:'General pediatric healthcare.', timings:['09:00','11:00','14:30'], img:'https://images.unsplash.com/photo-1607746882042-944635dfe10e' },


   // --------------------------- ENT SPECIALISTS (10) ---------------------------
 { id:'41', name:'Dr. Suman Rao', specialization:'ENT', experience:7, fees:500, rating:4.4, bio:'Ear, Nose & Throat specialist.', timings:['10:00','12:00','15:00'], img:'https://th.bing.com/th/id/OIP.NyDBvHoKuzhsQAq5GwxIdgHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
{ id:'42', name:'Dr. Raghav Nambiar', specialization:'ENT', experience:10, fees:650, rating:4.6, bio:'Thyroid & sinus specialist.', timings:['09:30','11:30','14:00'], img:'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb' },
{ id:'43', name:'Dr. Poonam Sharma', specialization:'ENT', experience:6, fees:520, rating:4.5, bio:'Hearing & ear infection expert.', timings:['10:00','13:00','16:00'], img:'https://images.unsplash.com/photo-1524504388940-b1c1722653e1' },
{ id:'44', name:'Dr. Neeraj Kothari', specialization:'ENT', experience:14, fees:700, rating:4.7, bio:'Endoscopic ENT surgeon.', timings:['09:00','12:00','15:00'], img:'https://img.freepik.com/premium-photo/portrait-indian-doctor-indian-doctor-smiling_890100-1265.jpg' },
{ id:'45', name:'Dr. Shruti Desai', specialization:'ENT', experience:8, fees:580, rating:4.5, bio:'Throat & voice issues specialist.', timings:['10:00','12:00','14:00'], img:'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e' },
{ id:'46', name:'Dr. Harish Kumar', specialization:'ENT', experience:11, fees:620, rating:4.6, bio:'Speech & voice specialist.', timings:['09:00','11:00','16:00'], img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2' },
{ id:'47', name:'Dr. Simran Kohli', specialization:'ENT', experience:5, fees:480, rating:4.3, bio:'Allergy & sinusitis treatment.', timings:['10:00','13:30','15:30'], img:'https://thumbs.dreamstime.com/b/young-woman-doctor-stethoscope-23791746.jpg' },
{ id:'48', name:'Dr. Ramesh Solanki', specialization:'ENT', experience:13, fees:680, rating:4.7, bio:'Ear surgery specialist.', timings:['09:00','12:00','14:30'], img:'https://images.unsplash.com/photo-1582750433449-648ed127bb54' },
{ id:'49', name:'Dr. Ankita Varma', specialization:'ENT', experience:7, fees:550, rating:4.4, bio:'Vertigo & balance disorder specialist.', timings:['10:00','12:00','17:00'], img:'https://tse4.mm.bing.net/th/id/OIP.GjDyJ0TSB6JEaUOqkU8FBQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' },
{ id:'50', name:'Dr. Imran Siddiqui', specialization:'ENT', experience:9, fees:600, rating:4.5, bio:'Head & neck surgeon.', timings:['11:00','13:00','16:00'], img:'https://th.bing.com/th/id/OIP.NyDBvHoKuzhsQAq5GwxIdgHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },


// --------------------------- ORTHOPEDICS (10) ---------------------------
{ id:'51', name:'Dr. Raghav Malhotra', specialization:'Orthopedic', experience:12, fees:850, rating:4.8, bio:'Knee & joint replacement specialist.', timings:['09:00','11:00','15:00'], img:'https://images.unsplash.com/photo-1530023367847-a683933f4172' },
{ id:'52', name:'Dr. Ananya Verma', specialization:'Orthopedic', experience:7, fees:600, rating:4.5, bio:'Sports injury & fracture care expert.', timings:['10:00','12:00','16:00'], img:'https://images.unsplash.com/photo-1524504388940-b1c1722653e1' },
{ id:'53', name:'Dr. Mohit Suri', specialization:'Orthopedic', experience:10, fees:780, rating:4.6, bio:'Spine specialist & minimally invasive surgeries.', timings:['09:30','11:30','14:00'], img:'https://images.unsplash.com/photo-1582750433449-648ed127bb54' },
{ id:'54', name:'Dr. Sneha Rao', specialization:'Orthopedic', experience:6, fees:550, rating:4.4, bio:'Bone health & arthritis specialist.', timings:['10:00','12:00','16:30'], img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2' },
{ id:'55', name:'Dr. Harish Sharma', specialization:'Orthopedic', experience:14, fees:900, rating:4.9, bio:'Hip replacement & trauma surgeon.', timings:['09:00','11:00','14:30'], img:'https://www.bing.com/th/id/OIP.T1u6Gr1XJVQYQ6sjfQMlcgHaHa?w=169&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimg1&dpr=1.3&pid=3.1&rm=2&ucfimg=1' },
{ id:'56', name:'Dr. Ritu Chawla', specialization:'Orthopedic', experience:5, fees:500, rating:4.3, bio:'Pediatric orthopedics & deformity correction.', timings:['10:00','12:30','15:00'], img:'https://thumbs.dreamstime.com/b/young-woman-doctor-stethoscope-23791746.jpg' },
{ id:'57', name:'Dr. Aditya Khanna', specialization:'Orthopedic', experience:11, fees:820, rating:4.7, bio:'Joint pain, ligament & sports rehab specialist.', timings:['09:00','13:00','16:00'], img:'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb' },
{ id:'58', name:'Dr. Pooja Shah', specialization:'Orthopedic', experience:8, fees:620, rating:4.5, bio:'Back pain, posture & spine alignment expert.', timings:['10:00','12:00','17:00'], img:'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e' },
{ id:'59', name:'Dr. Karan Thakur', specialization:'Orthopedic', experience:9, fees:700, rating:4.6, bio:'Hand, wrist & elbow surgery specialist.', timings:['09:30','11:30','16:00'], img:'https://tse4.mm.bing.net/th/id/OIP.GjDyJ0TSB6JEaUOqkU8FBQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' },
{ id:'60', name:'Dr. Meenal Gupta', specialization:'Orthopedic', experience:6, fees:580, rating:4.4, bio:'Osteoporosis & elderly bone care expert.', timings:['10:00','12:00','15:30'], img:'https://images.unsplash.com/photo-1550831107-1553da8c8464' }


];

export default DOCTORS;
