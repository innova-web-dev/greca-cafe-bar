import { useEffect, useRef, useState } from 'react';

interface CanvasFramePlayerProps {
  frameCount?: number;
  fps?: number;
  framePrefix?: string;
  frameExtension?: string;
  posterSrc?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function CanvasFramePlayer({
  frameCount = 144,
  fps = 18,
  framePrefix = '/frames/frame_',
  frameExtension = '.webp',
  posterSrc,
  className = '',
  style = {},
}: CanvasFramePlayerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isReady, setIsReady] = useState(false);

  // Keep frame cache in a ref so re-renders don't flush images
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const currentFrameIndexRef = useRef(0);
  const animationFrameIdRef = useRef<number | null>(null);
  const lastFrameTimeRef = useRef(0);
  const isVisibleRef = useRef(true);

  // Helper to format frame filename e.g. /frames/frame_001.webp
  const getFrameUrl = (index: number) => {
    const padded = (index + 1).toString().padStart(3, '0');
    return `${framePrefix}${padded}${frameExtension}`;
  };

  // Draw a specific image using object-fit: cover
  const drawFrame = (img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    if (canvasWidth === 0 || canvasHeight === 0) return;

    const imgWidth = img.naturalWidth || img.width;
    const imgHeight = img.naturalHeight || img.height;
    if (imgWidth === 0 || imgHeight === 0) return;

    // Calculate 'cover' geometry
    const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
    const nw = imgWidth * scale;
    const nh = imgHeight * scale;
    const nx = (canvasWidth - nw) / 2;
    const ny = (canvasHeight - nh) / 2;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, nx, ny, nw, nh);
  };

  // Handle resizing with devicePixelRatio for razor-sharp rendering
  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2x for memory efficiency
      const targetWidth = Math.round(rect.width * dpr);
      const targetHeight = Math.round(rect.height * dpr);

      if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        const currentImg = imagesRef.current[currentFrameIndexRef.current];
        if (currentImg && currentImg.complete) {
          drawFrame(currentImg);
        }
      }
    };

    updateSize();

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // Preload frames progressively
  useEffect(() => {
    let isCancelled = false;
    imagesRef.current = new Array(frameCount).fill(null);

    // 1. Load the first frame immediately for instant display
    const firstImg = new Image();
    firstImg.src = getFrameUrl(0);
    imagesRef.current[0] = firstImg;

    firstImg.onload = () => {
      if (isCancelled) return;
      setIsReady(true);
      drawFrame(firstImg);
    };

    // 2. Load remaining frames sequentially in chunks to prevent network choke
    const preloadRest = async () => {
      for (let i = 1; i < frameCount; i++) {
        if (isCancelled) break;
        const img = new Image();
        img.src = getFrameUrl(i);
        imagesRef.current[i] = img;
      }
    };

    preloadRest();

    return () => {
      isCancelled = true;
    };
  }, [frameCount, framePrefix, frameExtension]);

  // Pause when element is scrolled off-screen or tab is hidden
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );

    observer.observe(container);

    const handleVisibilityChange = () => {
      isVisibleRef.current = document.visibilityState === 'visible';
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // requestAnimationFrame Animation Loop
  useEffect(() => {
    const frameIntervalMs = 1000 / fps;

    const loop = (timestamp: number) => {
      if (!lastFrameTimeRef.current) {
        lastFrameTimeRef.current = timestamp;
      }

      const elapsed = timestamp - lastFrameTimeRef.current;

      if (isVisibleRef.current && elapsed >= frameIntervalMs) {
        // Advance frame based on elapsed time to maintain consistent playback rate
        const framesToAdvance = Math.floor(elapsed / frameIntervalMs);
        lastFrameTimeRef.current = timestamp - (elapsed % frameIntervalMs);

        const nextIndex = (currentFrameIndexRef.current + framesToAdvance) % frameCount;
        const img = imagesRef.current[nextIndex];

        if (img && img.complete && img.naturalWidth > 0) {
          currentFrameIndexRef.current = nextIndex;
          drawFrame(img);
        }
      }

      animationFrameIdRef.current = requestAnimationFrame(loop);
    };

    animationFrameIdRef.current = requestAnimationFrame(loop);

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [frameCount, fps]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={style}
    >
      {posterSrc && !isReady && (
        <img
          src={posterSrc}
          alt="Video poster"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <canvas
        ref={canvasRef}
        className="w-full h-full block pointer-events-none"
      />
    </div>
  );
}
