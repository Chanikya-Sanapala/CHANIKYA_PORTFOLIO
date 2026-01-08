export default function Contact(){
  return (
    <section id="contact" className="mb-10 reveal">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <div className="card">
        <p className="text-gray-300">I'm open to opportunities and collaborations. Reach out via email or connect on GitHub / LinkedIn.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="mailto:Sanapalachanikya@gmail.com" className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md">Email</a>
          <a href="https://github.com/Chanikya-Sanapala" target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 border border-white/10 rounded-md">GitHub</a>
          <a href="https://linkedin.com/in/chanikya-sanapala-5b281935a" target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 border border-white/10 rounded-md">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}
