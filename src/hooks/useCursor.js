import { useEffect } from 'react';

export function useCursor() {
  useEffect(() => {
    // Only run on non-touch devices
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mediaQuery.matches) return;

    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    if (!cursor || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    let rafId;

    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    };

    const animate = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      rafId = requestAnimationFrame(animate);
    };

    animate();
    document.addEventListener('mousemove', onMouseMove);

    const grow = () => {
      cursor.style.width = '18px';
      cursor.style.height = '18px';
      ring.style.width = '54px';
      ring.style.height = '54px';
    };
    const shrink = () => {
      cursor.style.width = '10px';
      cursor.style.height = '10px';
      ring.style.width = '36px';
      ring.style.height = '36px';
    };

    const interactives = document.querySelectorAll('a, button');
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', grow);
        el.removeEventListener('mouseleave', shrink);
      });
    };
  });
}
