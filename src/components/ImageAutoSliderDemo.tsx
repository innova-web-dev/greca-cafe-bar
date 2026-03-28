import { ImageAutoSlider } from "@/components/ui/image-auto-slider";

export const ImageAutoSliderDemo = () => {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center gap-12 p-8">
      <div className="text-center max-w-2xl">
        <h2 className="text-4xl font-heading text-green-dark italic mb-4">Nuestro Sabor en Imágenes</h2>
        <p className="text-brown-dark/70 font-body leading-relaxed">
          Descubre la esencia de Greca a través de nuestra galería interactiva.
        </p>
      </div>

      <ImageAutoSlider />

      <div className="text-sm font-sans uppercase tracking-widest text-terracotta/60">
        Desliza para explorar más
      </div>
    </div>
  );
};

export default ImageAutoSliderDemo;
