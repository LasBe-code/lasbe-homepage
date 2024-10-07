"use client";

import { useCallback, useEffect, useRef } from "react";

export default function NoiseScreen() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameIdRef = useRef<number | null>(null);

  // Resize canvas to fit window size
  const resizeCanvas = useCallback((canvas: HTMLCanvasElement) => {
    if (canvas) {
      const { innerWidth, innerHeight, devicePixelRatio } = window;
      canvas.width = innerWidth * devicePixelRatio;
      canvas.height = innerHeight * devicePixelRatio;
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
    }
  }, []);

  const noise = useCallback((ctx: CanvasRenderingContext2D) => {
    const w = ctx.canvas.width;
    const h = ctx.canvas.height;
    const iData = ctx.createImageData(w, h);
    const buffer32 = new Uint32Array(iData.data.buffer);
    const len = buffer32.length;

    for (let i = 0; i < len; i++) {
      if (Math.random() < 0.5) buffer32[i] = 0xffffffff;
    }

    ctx.putImageData(iData, 0, 0);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = canvas.height = 128;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => resizeCanvas(canvas);

    resizeCanvas(canvas);

    window.addEventListener("resize", handleResize);

    const noiseLoop = () => {
      noise(ctx);
      animationFrameIdRef.current = requestAnimationFrame(noiseLoop);
    };

    noiseLoop();

    return () => {
      window.removeEventListener("resize", handleResize);

      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [noise, resizeCanvas]);
  return (
    <canvas
      className="absolute z-10 opacity-20 mix-blend-soft-light pointer-events-none select-none"
      ref={canvasRef}
    />
  );
}
