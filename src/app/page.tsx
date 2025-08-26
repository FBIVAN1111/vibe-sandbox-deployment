import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import MissionsSection from '@/components/MissionsSection'
import VehiclesSection from '@/components/VehiclesSection'
import AchievementsSection from '@/components/AchievementsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />
      <MissionsSection />
      <VehiclesSection />
      <AchievementsSection />
      <Footer />
    </main>
  )
}

export const metadata = {
  title: 'SpaceX - Making Life Multiplanetary',
  description: 'SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.',
  keywords: 'SpaceX, rockets, spacecraft, Mars, Falcon 9, Starship, space exploration',
  openGraph: {
    title: 'SpaceX - Making Life Multiplanetary',
    description: 'SpaceX designs, manufactures and launches advanced rockets and spacecraft.',
    type: 'website',
    url: 'https://spacex.com',
    images: [
      {
        url: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/33c156f9-8b74-4b23-aa4d-2558352d5d4a.png',
        width: 1200,
        height: 630,
        alt: 'SpaceX Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpaceX - Making Life Multiplanetary',
    description: 'SpaceX designs, manufactures and launches advanced rockets and spacecraft.',
    images: ['https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7663f277-415c-43dc-9c89-b88ad539a6ae.png'],
  },
}