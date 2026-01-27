import { useEffect, useRef } from "react";

export default function Antigravity({
  count = 200,
  color = "#5227FF",
  particleSize = 1.5,
  lerpSpeed = 0.05,
  magnetRadius = 6,
  fieldStrength = 10,
  autoAnimate = true,
}) {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: count }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: 0,
      vy: 0,
    }));

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", onMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;

        if (dist < 150) {
          const force = (1 - dist / 150) * fieldStrength;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        p.vx *= 0.9;
        p.vy *= 0.9;

        p.x += p.vx * lerpSpeed;
        p.y += p.vy * lerpSpeed;

        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(p.x, p.y, particleSize, 0, Math.PI * 2);
        ctx.fill();
      });

      if (autoAnimate) requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [
    count,
    color,
    particleSize,
    lerpSpeed,
    magnetRadius,
    fieldStrength,
    autoAnimate,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block"
    />
  );
}