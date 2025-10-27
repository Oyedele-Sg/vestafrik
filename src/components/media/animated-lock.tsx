"use client";

import * as React from "react";

type AnimatedLockProps = {
  className?: string;
  poster?: string;
  mp4?: string;
  webm?: string;
};

const DEFAULT_POSTER =
  "https://cdn.prod.website-files.com/65035c417fe69396bd8c0d5c/652f16c085906dcdcf49d977_Lock_1-poster-00001.jpg";
const DEFAULT_MP4 =
  "https://cdn.prod.website-files.com/65035c417fe69396bd8c0d5c/652f16c085906dcdcf49d977_Lock_1-transcode.mp4";
const DEFAULT_WEBM =
  "https://cdn.prod.website-files.com/65035c417fe69396bd8c0d5c/652f16c085906dcdcf49d977_Lock_1-transcode.webm";

export function AnimatedLock({
  className,
  poster = DEFAULT_POSTER,
  mp4 = DEFAULT_MP4,
  webm = DEFAULT_WEBM,
}: AnimatedLockProps) {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [shouldReduceMotion, setShouldReduceMotion] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setShouldReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  React.useEffect(() => {
    if (!videoRef.current || shouldReduceMotion) return;
    const video = videoRef.current;
    let playedOnce = false;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !playedOnce) {
          video.play().catch(() => {});
          playedOnce = true;
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [shouldReduceMotion]);

  return (
    <div className={className}>
      <video
        ref={videoRef}
        muted
        playsInline
        preload="none"
        controls={false}
        loop={false}
        poster={poster}
        className="block h-full w-full rounded-none object-contain"
      >
        <source src={mp4} type="video/mp4" />
        <source src={webm} type="video/webm" />
      </video>
    </div>
  );
}

export default AnimatedLock;
