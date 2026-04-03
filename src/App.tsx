import MenuSection from './components/MenuSection'
import FooterSection from './components/FooterSection'
import BottomNav from './components/BottomNav'
import ScrollExpandMedia from './components/scroll-expansion-hero'
import { ImageAutoSlider } from './components/ui/image-auto-slider'

export default function App() {
  return (
    <>
      <main className="min-h-screen font-sans">
        <ScrollExpandMedia
          mediaType="video"
          mediaSrc={{
            webm: "/videocafe.webm",
            mp4: "/videocafe.mp4"
          }}
          posterSrc="/poster.avif"
          bgImageSrc="/arepa.png"
          className="bg-green-dark"
          textBlend
        />
        <ImageAutoSlider className="bg-green-dark" />
        <MenuSection />
        <FooterSection />
      </main>
      <BottomNav />
    </>
  )
}
