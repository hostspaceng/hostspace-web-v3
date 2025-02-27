import { useEffect, useRef } from "react";

interface Partner {
  name: string;
  color: string;
}

const partners: Partner[] = [
  { name: "Helium Health", color: "#2D5BFF" },
  { name: "Nobus", color: "#00A67E" },
  { name: "Helium Health", color: "#2D5BFF" },
  { name: "Nobus", color: "#00A67E" },
];

export function InfiniteSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Clone the slider content for seamless looping
    slider.innerHTML = slider.innerHTML + slider.innerHTML;

    // Calculate the animation duration based on content width
    const duration = (slider.scrollWidth / 2) * 0.02; // Adjust speed here

    slider.style.animationDuration = `${duration}s`;
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

      {/* Slider container */}
      <div ref={sliderRef} className="flex animate-slide">
        {partners.map((partner, index) => (
          <div key={`${partner.name}-${index}`} className="flex-shrink-0 px-12">
            <div className="relative flex items-center justify-center h-12 w-48">
              <span
                className="text-xl font-bold tracking-tight bg-clip-text text-transparent transition-transform duration-300 hover:scale-105"
                style={{
                  backgroundImage: `linear-gradient(to right, ${partner.color}, ${partner.color}88)`,
                }}
              >
                {partner.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
