import Hero from '../components/Hero'
import BentoGrid from '../components/BentoGrid'
import dynamic from 'next/dynamic'

const MoonBackground = dynamic(() => import('../components/MoonBackground'), {
  ssr: false,
})

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <MoonBackground />
      <div className="relative z-10">
        <Hero />
        <BentoGrid />
      </div>
    </div>
  )
}
