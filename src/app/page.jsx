import Hero from './components/Hero'
import KesatriaMuda from './components/KesatriaMuda'
import VideoSejarah from './components/VideoSejarah'

export default function Home() {
  return (
      <main className="overflow-x-hidden">
        <Hero />
        <VideoSejarah />
        <KesatriaMuda />
      </main>
  )
}
