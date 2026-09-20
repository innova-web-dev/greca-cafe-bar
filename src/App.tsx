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
          mediaType="canvas-sequence"
          frameSequence={{
            frameCount: 144,
            fps: 18,
            prefix: "/frames/frame_",
            extension: ".webp"
          }}
          posterSrc="/poster.avif"
          bgImageSrc="/arepa.webp"
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
