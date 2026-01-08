import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function AppleNavbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? 'bg-[rgba(22,22,23,0.8)] backdrop-blur-md border-b border-white/5'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
                <Link href="/" className="text-xl font-semibold tracking-tight text-white/90 hover:text-white transition-colors">
                    Chanikya
                </Link>

                <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-[#E8E8ED]/80">
                    {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-white transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
