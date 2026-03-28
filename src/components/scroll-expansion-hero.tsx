'use client';

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type TouchEvent,
  type WheelEvent,
} from 'react';
import { motion } from 'framer-motion';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc?: string;
  title?: string; // Standard title for consistency
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
  title, // Legacy prop support
  date,
  scrollToExpand,
  textBlend,
  children,
  className = '',
  style = {},
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => { });
    }
  }, []);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = (): void => {
      setTouchStartY(0);
    };

    const handleScroll = (): void => {
      if (!mediaFullyExpanded) {
        window.scrollTo(0, 0);
      }
    };

    if (!mediaFullyExpanded) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
    }

    window.addEventListener('wheel', handleWheel as unknown as EventListener, {
      passive: false,
    });
    window.addEventListener('scroll', handleScroll as EventListener);
    window.addEventListener(
      'touchstart',
      handleTouchStart as unknown as EventListener,
      { passive: false }
    );
    window.addEventListener(
      'touchmove',
      handleTouchMove as unknown as EventListener,
      { passive: false }
    );
    window.addEventListener('touchend', handleTouchEnd as EventListener);

    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
      window.removeEventListener(
        'wheel',
        handleWheel as unknown as EventListener
      );
      window.removeEventListener('scroll', handleScroll as EventListener);
      window.removeEventListener(
        'touchstart',
        handleTouchStart as unknown as EventListener
      );
      window.removeEventListener(
        'touchmove',
        handleTouchMove as unknown as EventListener
      );
      window.removeEventListener('touchend', handleTouchEnd as EventListener);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);

  return (
    <div
      ref={sectionRef}
      id="inicio"
      className={`transition-colors duration-700 ease-in-out overflow-x-hidden ${className}`}
      style={style}
    >
      <section className='relative flex flex-col items-center justify-start min-h-[100dvh]'>
        <div className='relative w-full flex flex-col items-center min-h-[100dvh]'>
          <motion.div
            className='absolute inset-0 z-0 h-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <img
              src={bgImageSrc}
              alt='Background'
              width={1920}
              height={1080}
              className='w-screen h-screen object-cover object-center'
            />
            <div className='absolute inset-0 bg-black/20' />
          </motion.div>

          <div className='container mx-auto flex flex-col items-center justify-start relative z-10'>
            <div className='flex flex-col items-center justify-center w-full h-[100dvh] relative'>
              <div
                className='absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none rounded-2xl overflow-hidden'
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.4)',
                }}
              >
                {mediaType === 'video' ? (
                  mediaSrc.includes('youtube.com') ? (
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
                        initial={{ opacity: 0.8 }}
                        animate={{ opacity: 0.7 - scrollProgress * 0.3 }}
                      />
                    </div>
                  ) : (
                    <div className='relative w-full h-full pointer-events-none'>
                      <video
                        ref={videoRef}
                        src={mediaSrc}
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
                      />
                      <motion.div
                        className='absolute inset-0 bg-black rounded-xl'
                        initial={{ opacity: 0.8 }}
                        animate={{ opacity: 0.7 - scrollProgress * 0.3 }}
                      />
                    </div>
                  )
                ) : (
                  <div className='relative w-full h-full'>
                    <img
                      src={mediaSrc}
                      alt={title || 'Media content'}
                      width={1280}
                      height={720}
                      className='w-full h-full object-cover rounded-xl'
                    />
                    <motion.div
                      className='absolute inset-0 bg-black rounded-xl'
                      initial={{ opacity: 0.8 }}
                      animate={{ opacity: 0.8 - scrollProgress * 0.3 }}
                    />
                  </div>
                )}

                <div className='flex flex-col items-center text-center relative z-10 bottom-1/4 w-full transition-none'>
                  {date && (
                    <p
                      className='text-xl text-terracotta/90 tracking-[0.4em] uppercase mb-2'
                      style={{
                        fontFamily: 'var(--font-sans)',
                        transform: `translateX(-${textTranslateX}vw)`,
                        textShadow: '0 4px 8px rgba(0,0,0,0.6)'
                      }}
                    >
                      {date}
                    </p>
                  )}
                  {scrollToExpand && (
                    <p
                      className='text-terracotta/80 text-sm tracking-[0.2em] uppercase font-medium text-center'
                      style={{
                        fontFamily: 'var(--font-sans)',
                        transform: `translateX(${textTranslateX}vw)`,
                        textShadow: '0 2px 5px rgba(0,0,0,0.5)'
                      }}
                    >
                      {scrollToExpand}
                    </p>
                  )}
                </div>
              </div>

              <div
                className={`flex items-center justify-center text-center w-full relative z-10 transition-none flex-col ${textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
                  }`}
              >
                {/* GRECA BRANDING ADAPTED TO TEMPLATE MOTION */}

                {/* Row 1: El café que (Move Left) */}
                <motion.p
                  className="text-terracotta text-sm tracking-[0.6em] uppercase mb-4"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    textShadow: '0 4px 15px rgba(0,0,0,0.8)',
                    transform: `translateX(-${textTranslateX}vw)`
                  }}
                >
                  El café que
                </motion.p>

                {/* Row 2: necesitas (Move Right) */}
                <motion.p
                  className="text-terracotta text-6xl mb-6"
                  style={{
                    fontFamily: 'var(--font-cursive)',
                    textShadow: '0 10px 40px rgba(0,0,0,0.9)',
                    transform: `translateX(${textTranslateX}vw)`
                  }}
                >
                  necesitas
                </motion.p>

                <div className="flex flex-col items-center leading-[0.8] gap-2">
                  {/* Row 3: GRECA (Move Left) */}
                  <motion.span
                    className="text-terracotta text-[100px] font-light tracking-[0.03em] mb-2"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      textShadow: '0 20px 60px rgba(0,0,0,1)',
                      transform: `translateX(-${textTranslateX}vw)`
                    }}
                  >
                    GRECA
                  </motion.span>

                  {/* Row 4: CAFÉ (Move Right) */}
                  <motion.span
                    className="text-terracotta text-2xl tracking-[0.6em] uppercase font-light mt-2"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      textShadow: '0 10px 30px rgba(0,0,0,0.8)',
                      transform: `translateX(${textTranslateX}vw)`
                    }}
                  >
                    CAFÉ
                  </motion.span>

                  {/* Row 5: BAR (Move Left) */}
                  <motion.span
                    className="text-terracotta text-sm tracking-[0.8em] uppercase font-light mt-2"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      textShadow: '0 5px 15px rgba(0,0,0,0.8)',
                      transform: `translateX(-${textTranslateX}vw)`
                    }}
                  >
                    BAR
                  </motion.span>
                </div>
              </div>
            </div>

            <motion.section
              className='flex flex-col w-full px-8 py-10 md:px-16 lg:py-20'
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
