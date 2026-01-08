export default function Certifications(){
  const certs = [
    'Full Stack Engineer Internship Certificate – NLP CloudX Solutions',
    'Mainframe Practitioner – IBM',
    'Introduction to z/OS Commands – IBM',
    'Python for Beginners – Infosys',
    'Java Programming Fundamentals – Infosys'
  ]
  return (
    <section id="certifications" className="mb-10 reveal">
      <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
      <div className="card">
        <ul className="text-gray-300 list-disc list-inside">
          {certs.map(c => <li key={c}>{c}</li>)}
        </ul>
      </div>
    </section>
  )
}
