
interface ImageAutoSliderProps {
  images?: string[];
  animationDuration?: string;
  className?: string;
}

export const ImageAutoSlider = ({ 
  images = [
    "/arepa.png",
    "/frappe.jpg",
    "/plato1.avif",
    "/plato2.avif",
    "/plato3.avif",
    "/tenders.jpg",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
  ],
  animationDuration = "30s",
  className = ""
}: ImageAutoSliderProps) => {
  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <section className={`w-full overflow-hidden py-12 ${className}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .infinite-scroll-animate {
          animation: scroll-right ${animationDuration} linear infinite;
        }
        .scroll-mask {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}} />
      
      <div className="relative z-10 w-full flex items-center justify-center">
        <div className="scroll-mask w-full">
          <div className="infinite-scroll-animate flex gap-6 w-max px-6">
            {duplicatedImages.map((image, index) => (
              <div
                key={`${index}-${image}`}
                className="group relative flex-shrink-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-xl border border-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:brightness-110"
              >
                <img
                  src={image}
                  alt={`Greca Gallery - Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
