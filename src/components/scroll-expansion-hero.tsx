'use client';

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string | { mp4?: string; webm?: string };
  posterSrc?: string;
  bgImageSrc?: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
  className = '',
  style = {},
}: ScrollExpandMediaProps) => {
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Use Framer Motion's useScroll for better performance and native feel
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn("Autoplay blocked or failed:", err);
      });
    }

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Animation transforms based on scroll
  const mediaWidth = useTransform(
    smoothProgress,
    [0, 1],
    [300, isMobileState ? 950 : 1250]
  );

  const mediaHeight = useTransform(
    smoothProgress,
    [0, 1],
    [400, isMobileState ? 600 : 800]
  );

  const textTranslateXRight = useTransform(
    smoothProgress,
    [0, 1],
    [0, isMobileState ? 180 : 150]
  );

  const textTranslateXLeft = useTransform(
    smoothProgress,
    [0, 1],
    [0, isMobileState ? -180 : -150]
  );

  const bgOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const contentOpacity = useTransform(smoothProgress, [0.8, 1], [0, 1]);

  return (
    <div
      ref={containerRef}
      id="inicio"
      className={`relative h-[200vh] ${className}`}
      style={style}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <section className='relative flex flex-col items-center justify-start h-full w-full'>
          <div className='relative w-full flex flex-col items-center h-full'>
            <motion.div
              className='absolute inset-0 z-0 h-full w-full'
              style={{ opacity: bgOpacity }}
            >
              <img
                src={bgImageSrc}
                alt='Background'
                className='w-full h-full object-cover object-center'
              />
              <div className='absolute inset-0 bg-black/20' />
            </motion.div>

            <div className='flex flex-col items-center justify-start relative z-10 h-full w-full'>
              <div className='flex flex-col items-center justify-center w-full h-full relative'>
                <motion.div
                  className='absolute z-0 top-1/2 left-1/2 rounded-2xl overflow-hidden'
                  style={{
                    width: mediaWidth,
                    height: mediaHeight,
                    maxWidth: '100vw',
                    maxHeight: '100vh',
                    boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.4)',
                    x: '-50%',
                    y: '-50%'
                  }}
                >
                  {mediaType === 'video' ? (
                    typeof mediaSrc === 'string' && mediaSrc.includes('youtube.com') ? (
                      <div className='relative w-full h-full pointer-events-none'>
                        <iframe
                          width='100%'
                          height='100%'
                          src={
                            mediaSrc.includes('embed')
                              ? mediaSrc +
                              (mediaSrc.includes('?') ? '&' : '?') +
                              'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1'
                              : mediaSrc.replace('watch?v=', 'embed/') +
                              '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' +
                              mediaSrc.split('v=')[1]
                          }
                          className='w-full h-full rounded-xl border-none'
                          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                          allowFullScreen
                        />
                        <motion.div
                          className='absolute inset-0 bg-black rounded-xl'
                          style={{ opacity: useTransform(smoothProgress, [0, 1], [0.8, 0.4]) }}
                        />
                      </div>
                    ) : (
                      <div className='relative w-full h-full pointer-events-none'>
                        <video
                          ref={videoRef}
                          poster={posterSrc}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload='auto'
                          className='w-full h-full object-cover rounded-xl'
                          controls={false}
                          disablePictureInPicture
                          disableRemotePlayback
                        >
                          {typeof mediaSrc === 'object' ? (
                            <>
                              {mediaSrc.webm && <source src={mediaSrc.webm} type="video/webm" />}
                              {mediaSrc.mp4 && <source src={mediaSrc.mp4} type="video/mp4" />}
                            </>
                          ) : (
                            <source src={mediaSrc as string} type="video/mp4" />
                          )}
                        </video>
                        <motion.div
                          className='absolute inset-0 bg-black rounded-xl'
                          style={{ opacity: useTransform(smoothProgress, [0, 1], [0.8, 0.4]) }}
                        />
                      </div>
                    )
                  ) : (
                    <div className='relative w-full h-full'>
                      <img
                        src={typeof mediaSrc === 'string' ? mediaSrc : mediaSrc.mp4}
                        alt={title || 'Media content'}
                        className='w-full h-full object-cover rounded-xl'
                      />
                      <motion.div
                        className='absolute inset-0 bg-black rounded-xl'
                        style={{ opacity: useTransform(smoothProgress, [0, 1], [0.8, 0.5]) }}
                      />
                    </div>
                  )}

                  <div className='flex flex-col items-center text-center relative z-10 bottom-1/4 w-full'>
                    {date && (
                      <motion.p
                        className='text-xl text-terracotta/90 tracking-[0.4em] uppercase mb-2'
                        style={{
                          fontFamily: 'var(--font-sans)',
                          x: textTranslateXLeft,
                          textShadow: '0 4px 8px rgba(0,0,0,0.6)'
                        }}
                      >
                        {date}
                      </motion.p>
                    )}
                    {scrollToExpand && (
                      <motion.p
                        className='text-terracotta/80 text-sm tracking-[0.2em] uppercase font-medium text-center'
                        style={{
                          fontFamily: 'var(--font-sans)',
                          x: textTranslateXRight,
                          textShadow: '0 2px 5px rgba(0,0,0,0.5)'
                        }}
                      >
                        {scrollToExpand}
                      </motion.p>
                    )}
                  </div>
                </motion.div>

                <div
                  className={`flex items-center justify-center text-center w-full relative z-10 flex-col ${textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
                    }`}
                >
                  <motion.p
                    className="text-terracotta text-sm tracking-[0.6em] uppercase mb-4"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      textShadow: '0 4px 15px rgba(0,0,0,0.8)',
                      x: textTranslateXLeft
                    }}
                  >
                    El café que
                  </motion.p>

                  <motion.p
                    className="text-terracotta text-6xl mb-6"
                    style={{
                      fontFamily: 'var(--font-cursive)',
                      textShadow: '0 10px 40px rgba(0,0,0,0.9)',
                      x: textTranslateXRight
                    }}
                  >
                    necesitas
                  </motion.p>

                  <div className="flex flex-col items-center leading-[0.8] gap-2">
                    <motion.span
                      className="text-terracotta text-[100px] font-light tracking-[0.03em] mb-2"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        textShadow: '0 20px 60px rgba(0,0,0,1)',
                        x: textTranslateXLeft
                      }}
                    >
                      GRECA
                    </motion.span>

                    <motion.span
                      className="text-terracotta text-2xl tracking-[0.6em] uppercase font-light mt-2"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        textShadow: '0 10px 30px rgba(0,0,0,0.8)',
                        x: textTranslateXRight
                      }}
                    >
                      CAFÉ
                    </motion.span>

                    <motion.span
                      className="text-terracotta text-sm tracking-[0.8em] uppercase font-light mt-2"
                      style={{
                        fontFamily: 'var(--font-sans)',
                        textShadow: '0 5px 15px rgba(0,0,0,0.8)',
                        x: textTranslateXLeft
                      }}
                    >
                      BAR
                    </motion.span>
                  </div>
                </div>
              </div>

              <motion.section
                className='flex flex-col w-full px-8 py-10 md:px-16 lg:py-20 bg-green-dark relative z-20'
                style={{ opacity: contentOpacity }}
              >
                {children}
              </motion.section>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ScrollExpandMedia;
