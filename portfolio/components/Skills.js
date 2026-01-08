const skills = {
  Programming: ['Java'],
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React'],
  Frameworks: ['Next.js'],
  Styling: ['Tailwind CSS'],
  Backend: ['PHP'],
  Database: ['MySQL'],
  Tools: ['Git', 'GitHub', 'XAMPP'],
  Mainframe: ['TSO/ISPF', 'SDSF', 'JES2']
}

export default function Skills() {
  return (
    <section id="skills" className="mb-10 reveal">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="card">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-medium text-gray-200">{category}</h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {items.map(item => (
                  <li key={item} className="tech-badge">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
