import Image from 'next/image'
import Hero from './components/Hero'
import KesatriaMuda from './components/KesatriaMuda'
import VideoSejarah from './components/VideoSejarah'

export default function Home() {
  return (
      <main>
        <Hero />
        <VideoSejarah />
        {/* <KesatriaMuda /> */}
      </main>
  )
}
