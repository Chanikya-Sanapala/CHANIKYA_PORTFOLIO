const projects = [
  {
    title: 'Food Delivery Web Application',
    desc: 'Responsive food delivery app with dynamic user profiles and CRUD operations.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    link: '#'
  },
  {
    title: 'Full-Stack Job Portal Application',
    desc: 'Next.js + React job portal with recruiter and job-seeker dashboards.',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    link: '#'
  },
  {
    title: 'Solar Tracking System using Arduino',
    desc: 'Hardware prototype that improves panel efficiency using LDR sensors and servos.',
    tech: ['Arduino', 'C++', 'Electronics'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="mb-10 reveal">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map(p => (
          <article key={p.title} className="card">
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="text-gray-300 mt-2">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
            </div>
            <div className="mt-4">
              <a href={p.link} className="text-sm text-accent hover:underline">View project</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
