import { useEffect, useRef } from "react";

const projects = [
  {
    title: "E-commerce App",
    image:
      "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=800",
  },
  {
    title: "Portfolio Website",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=800",
  },
  {
    title: "Dashboard UI",
    image:
      "https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=800",
  },
  {
    title: "Admin Panel",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
  },
];

export default function ProjectSlider() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const slider = scrollRef.current;
    let scrollAmount = 0;

    const autoScroll = () => {
      if (slider) {
        scrollAmount += 1; // speed
        if (scrollAmount >= slider.scrollWidth / 2) {
          scrollAmount = 0; // loop back
        }
        slider.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    };

    const interval = setInterval(autoScroll, 30); // every 30ms

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-gray-900">
      <h2 className="text-center text-3xl font-bold mb-6 text-white">
        My Projects
      </h2>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-4"
      >
        {/* Duplicate projects for seamless loop */}
        {[...projects, ...projects].map((project, index) => (
          <div
            key={index}
            className="min-w-[250px] sm:min-w-[280px] bg-gray-800 rounded-xl shadow-lg overflow-hidden flex-shrink-0"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-44 w-full object-cover"
            />
            <p className="p-3 text-center font-semibold text-white">
              {project.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
