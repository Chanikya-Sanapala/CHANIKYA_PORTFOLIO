import { useEffect, useRef, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Full Stack Engineer",
    subtitle: "Sanapala Chanikya",
    description: "Building scalable, user-friendly web applications",
    gradient: "from-purple-900 to-blue-900",
    accent: "purple",
    skills: ["React", "Next.js", "PHP", "MySQL", "JavaScript"],
    education: "B.Tech (2022–2026) - Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology (CGPA: 8.2)",
    contact: {
      email: "Sanapalachanikya@gmail.com",
      github: "https://github.com/Chanikya-Sanapala",
      linkedin: "https://linkedin.com/in/chanikya-sanapala-5b281935a"
    }
  },
  {
    id: 2,
    title: "Food Delivery App",
    subtitle: "Responsive Web Application",
    description: "HTML, CSS, JavaScript, PHP, MySQL",
    gradient: "from-orange-900 to-red-900",
    accent: "orange",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "XAMPP"],
    education: "Personal Project",
    features: ["Dynamic profile dashboard", "CRUD operations", "Real-time updates", "Responsive design"]
  },
  {
    id: 3,
    title: "Job Portal",
    subtitle: "Full-Stack Platform",
    description: "Next.js, React, Tailwind CSS, LocalStorage",
    gradient: "from-blue-900 to-cyan-900",
    accent: "blue",
    skills: ["Next.js", "React", "Tailwind CSS", "JavaScript", "LocalStorage"],
    education: "Personal Project",
    features: ["Recruiter dashboard", "Job-Seeker dashboard", "Real-time notifications", "Mobile-first design"]
  },
  {
    id: 4,
    title: "Solar Tracking System",
    subtitle: "Hardware Innovation",
    description: "Arduino UNO, LDR Sensors, Servo Motors",
    gradient: "from-yellow-900 to-orange-900",
    accent: "yellow",
    skills: ["Arduino", "C++", "Electronics", "IoT"],
    education: "College Project",
    features: ["Automatic panel orientation", "30% efficiency improvement", "Real-time sensor data", "Servo motor control"]
  },
  {
    id: 5,
    title: "Internship Certified",
    subtitle: "NLP CloudX Solutions",
    description: "Full Stack Engineering • Sep 2025 - Jan 2026",
    gradient: "from-indigo-900 to-purple-900",
    accent: "indigo",
    skills: ["Full Stack", "Frontend", "Backend", "Debugging", "Deployment"],
    education: "Full Stack Engineer Intern at NLP CloudX Solutions, Hyderabad",
    features: ["Frontend & backend development", "Responsive UI implementation", "API integration", "Production deployment", "Official completion certificate"]
  }
];

export default function HorizontalPortfolio() {
  const sectionRefs = useRef([]);
  const [visibleSections, setVisibleSections] = useState({});
  const [expandedSlide, setExpandedSlide] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.dataset.index]: true,
            }));
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">
      {slides.map((slide, idx) => {
        const isVisible = visibleSections[idx];

        return (
          <section
            key={slide.id}
            data-index={idx}
            ref={(el) => (sectionRefs.current[idx] = el)}
            className={`relative w-full min-h-screen bg-gradient-to-br ${slide.gradient} flex items-center justify-start px-8 md:px-20 py-20 overflow-hidden transition-all duration-700`}
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className={`absolute w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-1000 ${
                  isVisible ? "scale-100" : "scale-0"
                }`}
                style={{
                  background: "radial-gradient(circle, rgba(255,255,255,0.3), transparent)",
                  top: "-100px",
                  right: "-100px",
                }}
              />
              <div
                className={`absolute w-80 h-80 rounded-full opacity-10 blur-3xl transition-all duration-1000 delay-200 ${
                  isVisible ? "scale-100" : "scale-0"
                }`}
                style={{
                  background: "radial-gradient(circle, rgba(255,255,255,0.2), transparent)",
                  bottom: "-50px",
                  left: "-50px",
                }}
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

            {/* Content */}
            <div className="relative z-10 max-w-2xl">
              {/* Subtitle */}
              <div
                className={`transition-all duration-700 transform ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                <p className="text-sm font-semibold tracking-widest text-cyan-300 uppercase mb-4 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent" />
                  {slide.subtitle}
                </p>
              </div>

              {/* Title */}
              <h1
                className={`text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-4 transition-all duration-700 transform ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                {slide.title.split(" ").map((word, i) => (
                  <div key={i} className="inline-block mr-3">
                    <span className="inline-block">{word}</span>
                  </div>
                ))}
              </h1>

              {/* Description */}
              <p
                className={`text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-xl transition-all duration-700 transform ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                {slide.description}
              </p>

              {/* Button */}
              <div
                className={`transition-all duration-700 transform ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <button
                  onClick={() => setExpandedSlide(idx)}
                  className="group relative px-8 py-4 bg-white text-gray-900 font-bold rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="relative z-10">Explore More</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </button>
              </div>
            </div>

            {/* Scroll Indicator - Only on first slide */}
            {idx === 0 && (
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
                <div className="flex flex-col items-center gap-2 animate-bounce">
                  <span className="text-sm text-white/60">Scroll to explore</span>
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              </div>
            )}

            {/* Slide Counter */}
            <div className="absolute top-8 right-8 text-white/60 text-sm font-medium z-20">
              {idx + 1} / {slides.length}
            </div>

            {/* Progress Bar */}
            <div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent transition-all duration-1000 ease-out"
              style={{
                width: isVisible ? "100%" : "0%",
              }}
            />
          </section>
        );
      })}

      {/* Modal / Expanded View */}
      {expandedSlide !== null && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className={`bg-gradient-to-br ${slides[expandedSlide].gradient} rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-12 relative`}>
            {/* Close Button */}
            <button
              onClick={() => setExpandedSlide(null)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/10 rounded-2xl" />

            {/* Modal Content */}
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6">{slides[expandedSlide].title}</h2>

              {/* Skills Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 text-cyan-300">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {slides[expandedSlide].skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium hover:bg-white/20 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features Section */}
              {slides[expandedSlide].features && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-3 text-cyan-300">Features</h3>
                  <ul className="space-y-2">
                    {slides[expandedSlide].features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1 w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Education Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 text-cyan-300">Education</h3>
                <p className="text-gray-200">{slides[expandedSlide].education}</p>
              </div>

              {/* Contact Section */}
              {slides[expandedSlide].contact && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-cyan-300">Connect</h3>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={`mailto:${slides[expandedSlide].contact.email}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition font-medium"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      Email
                    </a>
                    <a
                      href={slides[expandedSlide].contact.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition font-medium"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10c0 4.418 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.002.07 1.527 1.03 1.527 1.03.89 1.529 2.341 1.544 2.914 1.186.09-.924.349-1.544.635-1.9-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.722c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.163 20 14.412 20 10c0-5.516-4.477-10-10-10z" clipRule="evenodd" />
                      </svg>
                      GitHub
                    </a>
                    <a
                      href={slides[expandedSlide].contact.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition font-medium"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13.6915026,13.4744748 L10.2259216,13.4744748 L10.2259216,3.50701355 L13.6915026,3.50701355 L13.6915026,13.4744748 Z M11.9573626,2.5165404 C10.715174,2.5165404 9.71954944,1.51012477 9.71954944,0.270633071 C9.71954944,-0.9684161 10.715174,-1.97484234 11.9573626,-1.97484234 C13.1987548,-1.97484234 14.1943786,0.270633071 14.1943786,1.51012477 C14.1943786,2.5165404 13.1987548,2.5165404 11.9573626,2.5165404 Z M18.116233,13.4744748 L14.6515487,13.4744748 L14.6515487,8.34260809 C14.6515487,6.8185813 14.1946959,5.8120656 12.8649514,5.8120656 C11.8692242,5.8120656 11.2566989,6.57449906 10.9780936,7.31399651 C10.8829124,7.5463985 10.8829124,7.87881722 10.8829124,8.21123592 L10.8829124,13.4744748 L7.41822797,13.4744748 C7.41822797,13.4744748 7.41822797,4.56548882 7.41822797,3.50701355 L10.8829124,3.50701355 L10.8829124,4.87904833 C11.4248317,3.98127297 12.6661809,2.78236779 14.6178625,2.78236779 C17.1755226,2.78236779 18.816233,4.23699054 18.816233,7.26548882 L18.816233,13.4744748 Z" />
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
              )}

              {/* Close Button */}
              <button
                onClick={() => setExpandedSlide(null)}
                className="mt-8 w-full py-3 bg-white text-gray-900 font-bold rounded-lg hover:opacity-90 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}






