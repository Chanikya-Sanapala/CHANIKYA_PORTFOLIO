import Link from 'next/link';
import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FaJava, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact, FaServer } from 'react-icons/fa';
import { SiMysql, SiNextdotjs, SiTailwindcss, SiArduino } from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "Food Delivery App",
        category: "Full Stack",
        description: "Responsive web app with PHP & MySQL backend.",
        gradient: "from-orange-500/20 to-red-500/20",
        images: ["/food-delivery.png"],
        href: "https://github.com/Chanikya-Sanapala/Online_Food_Delivery"
    },
    {
        title: "Pneumonia Detection AI",
        category: "AI / Deep Learning",
        description: "VGG16-based model for detecting pneumonia from X-rays with 95%+ accuracy.",
        gradient: "from-teal-500/20 to-emerald-500/20",
        images: ["/pneumonia-slide-1.png", "/pneumonia-slide-2.png"],
        href: "https://github.com/Chanikya-Sanapala/Pneumonia-Detection-using-Deep-Learning"
    },
    {
        title: "Job Portal",
        category: "Platform",
        description: "Next.js & Tailwind based job platform.",
        gradient: "from-blue-500/20 to-cyan-500/20",
        images: ["/job-portal.png"],
        href: "#"
    },
    {
        title: "Solar Tracker",
        category: "IoT",
        description: "Arduino-based dual axis tracking system.",
        gradient: "from-yellow-500/20 to-orange-500/20",
        images: ["/solar-tracker-1.jpg", "/solar-tracker-2.png"],
        href: "#"
    }
];

const skills = [
    { name: "Java", icon: FaJava, color: "text-red-500" },
    { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
    { name: "PHP", icon: FaPhp, color: "text-indigo-400" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-500" },
    { name: "Mainframe", icon: FaServer, color: "text-blue-400" },
    { name: "SDSF", icon: FaServer, color: "text-blue-300" },
    { name: "JES2", icon: FaServer, color: "text-blue-300" },
    { name: "Arduino", icon: SiArduino, color: "text-teal-500" }
];

// Spotify Widget Component
function SpotifyCard() {
    return (
        <div className="w-full bg-[#1db954]/10 border border-[#1db954]/20 p-4 rounded-2xl flex items-center gap-4 mt-4 cursor-default hover:bg-[#1db954]/20 transition-colors group">
            <div className="relative w-12 h-12 bg-[#1db954]/20 rounded-md flex items-center justify-center shrink-0 overflow-hidden">
                {/* Animated Bars */}
                <div className="flex gap-[2px] items-end h-6">
                    <div className="w-1 bg-[#1db954] animate-[bounce_1s_infinite] h-3" />
                    <div className="w-1 bg-[#1db954] animate-[bounce_1.2s_infinite] h-5" />
                    <div className="w-1 bg-[#1db954] animate-[bounce_0.8s_infinite] h-4" />
                    <div className="w-1 bg-[#1db954] animate-[bounce_1.1s_infinite] h-2" />
                </div>
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-[#1db954] uppercase tracking-wider mb-0.5">Offline • Spotify</p>
                <p className="text-white text-sm font-medium truncate group-hover:text-[#1db954] transition-colors">Coding Mode • Lo-Fi Beats</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#1db954] flex items-center justify-center text-black">
                <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </div>
        </div>
    );
}

const certificates = [
    "Mainframe Practitioner (IBM)",
    "Intro to z/OS Commands (IBM)",
    "Python for Beginners (Infosys)",
    "Java Programming Fundamentals (Infosys)"
];

// Slideshow Component
function ProjectSlideshow({ images, title }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    if (!images || images.length === 0) return null;

    return (
        <div className="absolute inset-0">
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img
                        src={img}
                        alt={`${title} - Slide ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </div>
            ))}

            {/* Dots Indicator */}
            {images.length > 1 && (
                <div className="absolute bottom-4 right-4 flex gap-2 z-20">
                    {images.map((_, idx) => (
                        <div
                            key={idx}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white w-4' : 'bg-white/40'}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

// Project Detail Modal
function ProjectModal({ project, onClose }) {
    if (!project) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
            <div className="bg-[#1c1c1e] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 shadow-2xl" onClick={e => e.stopPropagation()}>

                {/* Close Button */}
                <div className="absolute top-4 right-4 z-10">
                    <button onClick={onClose} className="p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>

                {/* Hero Image / Slideshow */}
                <div className="relative h-64 md:h-96 w-full">
                    {project.images && project.images.length > 0 ? (
                        <ProjectSlideshow images={project.images} title={project.title} />
                    ) : (
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                    )}
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 space-y-8">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider text-apple-blue bg-apple-blue/10 rounded-full">{project.category}</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{project.title}</h2>
                        <p className="text-xl text-gray-300 leading-relaxed">{project.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                                <svg className="w-5 h-5 text-apple-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                The Challenge
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Designing a solution that addresses complex user needs while maintaining high performance and scalability. Focused on creating an intuitive interface that simplifies navigation.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                The Solution
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Implemented a robust architecture using modern technologies. Optimized database queries and leveraged server-side rendering for fast load times.
                            </p>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/10 flex flex-wrap gap-4">
                        {project.href !== "#" && (
                            <Link href={project.href} legacyBehavior>
                                <a target="_blank" className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors inline-flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                    View Live / Repo
                                </a>
                            </Link>
                        )}
                        <button onClick={onClose} className="px-6 py-3 bg-[#2c2c2e] text-white font-medium rounded-full hover:bg-[#3a3a3c] transition-colors">
                            Close Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Contact Form Component
function ContactForm() {
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setTimeout(() => setStatus('idle'), 5000);
                e.target.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
            alert('Failed to send message. Please try again later.');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    return (
        <div className="w-full max-w-xl mx-auto bg-apple-gray p-8 rounded-3xl border border-white/5">
            {status === 'success' ? (
                <div className="h-64 flex flex-col items-center justify-center text-center animate-fade-in-up">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 text-green-500">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            required
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-apple-blue focus:ring-1 focus:ring-apple-blue transition-colors"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-apple-blue focus:ring-1 focus:ring-apple-blue transition-colors"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                        <textarea
                            id="message"
                            required
                            rows={4}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-apple-blue focus:ring-1 focus:ring-apple-blue transition-colors"
                            placeholder="Tell me about your project..."
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {status === 'loading' ? (
                            <>
                                <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </>
                        ) : (
                            'Send Message'
                        )}
                    </button>
                </form>
            )}
        </div>
    );
}

// Fix for SSR warning with useLayoutEffect
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function BentoGrid() {
    const containerRef = useRef(null);
    const [selectedProject, setSelectedProject] = useState(null);

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Header/Profile Section Animations
            gsap.fromTo("#about > div",
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: "#about",
                        start: "top 80%",
                    }
                }
            );

            // Projects Section Animations - Staggered
            gsap.fromTo("#projects .group",
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: "#projects",
                        start: "top 80%",
                    }
                }
            );

            // Skills & Internship Animations
            gsap.fromTo("#skills > div",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: "#skills",
                        start: "top 85%",
                    }
                }
            );

            // Certificates Section
            gsap.fromTo(".cert-card",
                { opacity: 0, scale: 0.95 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".cert-container",
                        start: "top 85%",
                    }
                }
            );

            // Contact Section
            gsap.fromTo("#contact",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: "#contact",
                        start: "top 90%",
                    }
                }
            );

        }, containerRef);



        // Refresh ScrollTrigger after a short delay to ensure correct positioning on mobile
        // This fixes the issue where elements stay invisible (opacity: 0) on phones
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 1000);

        return () => {
            ctx.revert();
            clearTimeout(timer);
        };
    }, []);

    return (
        <section ref={containerRef} className="py-24 px-6 max-w-7xl mx-auto space-y-24">

            {/* HEADER SECTION */}
            <div id="about" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* About Card */}
                <div className="p-8 md:p-12 rounded-3xl bg-apple-gray border border-white/5 hover:border-white/10 transition-colors group flex flex-col justify-between">
                    <div>
                        <h3 className="text-apple-text font-medium mb-4 uppercase tracking-wider text-sm">Profile</h3>
                        <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
                            To be able to work for an encouraging and stable company that will assist me in developing, improving, and obtaining the necessary skills in order to become the best engineer possible.
                        </p>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-sm text-white/80 border border-white/10">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            Nellore, India
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-sm text-white/80 border border-white/10">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            +91 7032368835
                        </div>
                    </div>
                </div>

                {/* Education Card */}
                <div className="p-8 md:p-12 rounded-3xl bg-apple-gray border border-white/5 hover:border-white/10 transition-colors overflow-hidden relative">
                    <h3 className="text-apple-text font-medium mb-6 uppercase tracking-wider text-sm">Education</h3>
                    <div className="space-y-8 relative z-10">
                        <div className="relative pl-6 border-l border-white/10">
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-apple-blue shadow-[0_0_10px_rgba(41,151,255,0.5)]" />
                            <h4 className="text-lg text-white font-semibold">B.Tech (2022–2026)</h4>
                            <p className="text-white/70 text-sm">Vel Tech Rangarajan Dr. Sagunthala R&D Institute</p>
                            <p className="text-apple-blue font-medium text-sm mt-1">8.2 CGPA</p>
                        </div>
                        <div className="relative pl-6 border-l border-white/10">
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-apple-text/50" />
                            <h4 className="text-lg text-white font-semibold">Intermediate (2020–2022)</h4>
                            <p className="text-white/70 text-sm">Krishna Chaitanya Junior College</p>
                            <p className="text-white/50 text-sm mt-1">73.5%</p>
                        </div>
                        <div className="relative pl-6 border-l border-white/10">
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-apple-text/50" />
                            <h4 className="text-lg text-white font-semibold">SSC (2019–2020)</h4>
                            <p className="text-white/70 text-sm">Anglophil EM High School</p>
                            <p className="text-white/50 text-sm mt-1">100%</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* PROJECTS SECTION */}
            <div id="projects">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">Selected Projects.</h2>
                <div className="flex flex-col gap-8">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            onClick={() => setSelectedProject(project)}
                            className="group relative overflow-hidden rounded-3xl bg-apple-gray border border-white/5 hover:border-white/10 transition-all duration-300 w-full md:min-h-[400px] flex flex-col md:flex-row cursor-pointer hover:scale-[1.01] hover:shadow-2xl hover:shadow-apple-blue/10"
                        >
                            {/* Image Side (Full width on mobile, half on desktop) */}
                            <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                                {project.images && project.images.length > 0 ? (
                                    <ProjectSlideshow images={project.images} title={project.title} />
                                ) : (
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                                )}
                            </div>

                            {/* Content Side */}
                            <div className="relative z-10 p-8 md:p-12 w-full md:w-1/2 flex flex-col justify-center bg-apple-gray">
                                <span className="text-apple-blue font-medium text-sm mb-3 tracking-wide uppercase">{project.category}</span>
                                <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-8">{project.description}</p>

                                <div className="inline-flex items-center gap-2 text-white font-medium hover:text-apple-blue transition-colors group-hover/link:translate-x-1">
                                    View Details
                                    <svg className="w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

            {/* SKILLS & REST */}
            <div id="skills" className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative overflow-hidden p-8 md:p-12 rounded-3xl bg-apple-blue/10 border border-apple-blue/20 md:col-span-1 flex flex-col justify-center">
                    <h3 className="text-apple-blue font-medium mb-4 uppercase tracking-wider text-sm">Internship</h3>
                    <h4 className="text-2xl text-white font-bold mb-2">NLP CloudX Solutions</h4>
                    <p className="text-white/80">Full Stack Engineering Intern</p>
                    <p className="text-white/60 text-sm mt-1">Sep 2025 - Jan 2026</p>
                </div>
                <div className="p-8 md:p-12 rounded-3xl bg-apple-gray border border-white/5 md:col-span-2">
                    <h3 className="text-apple-text font-medium mb-8 uppercase tracking-wider text-sm">Technical Arsenal</h3>
                    <div className="grid grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
                        {skills.map((skill, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-2 group cursor-default">
                                <div className={`p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300 ${skill.color}`}>
                                    <skill.icon className="w-8 h-8" />
                                </div>
                                <span className="text-white/40 text-xs font-medium group-hover:text-white transition-colors">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CERTIFICATES & HOBBIES */}
            <div className="cert-container grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="cert-card p-8 rounded-3xl bg-apple-gray border border-white/5 hover:border-white/10">
                    <h3 className="text-apple-text font-medium mb-6 uppercase tracking-wider text-sm">Certifications</h3>
                    <ul className="space-y-4">
                        {certificates.map((cert, i) => (
                            <li key={i} className="flex items-start gap-3 text-white/90">
                                <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                {cert}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="cert-card p-8 rounded-3xl bg-apple-gray border border-white/5 hover:border-white/10 flex flex-col justify-between">
                    <div>
                        <h3 className="text-apple-text font-medium mb-4 uppercase tracking-wider text-sm">Extracurricular</h3>
                        <h4 className="text-xl text-white font-bold mb-2">Photography</h4>
                        <p className="text-white/70 text-sm">
                            Won 2nd Prize at ILIZIUM’25 National Level Technical Event (Vel Tech).
                        </p>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-apple-text font-medium mb-3 uppercase tracking-wider text-sm">Vibe Check</h3>
                        <SpotifyCard />
                        <div className="flex flex-wrap gap-2 mt-4">
                            <span className="text-white/80 text-xs px-3 py-1 bg-white/5 rounded-full border border-white/5">Movies</span>
                            <span className="text-white/80 text-xs px-3 py-1 bg-white/5 rounded-full border border-white/5">Exploring</span>
                            <span className="text-white/80 text-xs px-3 py-1 bg-white/5 rounded-full border border-white/5">Tech News</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* CONTACT */}
            <div id="contact" className="py-12 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Let's work together.</h2>
                <div className="flex flex-col gap-12">
                    <ContactForm />

                    <div className="flex justify-center gap-6">
                        <a href="mailto:Sanapalachanikya@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm">Sanapalachanikya@gmail.com</a>
                        <span className="text-gray-600">•</span>
                        <a href="tel:+917032368835" className="text-gray-400 hover:text-white transition-colors text-sm">+91 7032368835</a>
                    </div>

                    <div className="flex justify-center gap-4">
                        <a href="https://github.com/Chanikya-Sanapala" target="_blank" className="p-4 bg-apple-gray rounded-full hover:bg-white/10 transition-colors border border-white/5 group">
                            <span className="sr-only">GitHub</span>
                            <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.477 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.528 1.032 1.528 1.032.892 1.53 2.341 1.543 2.914 1.186.09-.924.349-1.543.635-1.9-2.22-.253-4.555-1.113-4.555-4.943 0-1.091.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.597 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .26.18.57.688.482A10.019 10.019 0 0022 12c0-5.516-4.477-10-10-10z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="https://linkedin.com/in/chanikya-sanapala-5b281935a" target="_blank" className="p-4 bg-apple-gray rounded-full hover:bg-white/10 transition-colors border border-white/5 group">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
                <footer className="mt-20 text-apple-text text-sm">
                    © {new Date().getFullYear()} Sanapala Chanikya. Crafted with React & Tailwind.
                </footer>
            </div>
        </section>
    );
}
