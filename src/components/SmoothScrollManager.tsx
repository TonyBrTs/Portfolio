'use client';

import { useEffect, useRef } from 'react';

export default function SmoothScrollManager() {
  const isScrolling = useRef(false);

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'portfolio', 'contact'];

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (Math.abs(e.deltaY) < 10) return;

      if (isScrolling.current) return;

      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

      if (sections.length === 0) return;

      const direction = e.deltaY > 0 ? 1 : -1;

      let currentIndex = 0;
      let minDistance = Infinity;

      sections.forEach((sec, i) => {
        const rect = sec.getBoundingClientRect();
        const distance = Math.abs(rect.top);
        if (distance < minDistance) {
          minDistance = distance;
          currentIndex = i;
        }
      });

      let nextIndex = currentIndex + direction;
      nextIndex = Math.max(0, Math.min(nextIndex, sections.length - 1));

      if (currentIndex !== nextIndex) {
        isScrolling.current = true;

        sections[nextIndex].scrollIntoView({ behavior: 'smooth' });

      setTimeout(() => {
          isScrolling.current = false;
        }, 1000);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === 'ArrowDown' ||
        e.key === 'ArrowUp' ||
        e.key === 'PageDown' ||
        e.key === 'PageUp'
      ) {
        e.preventDefault();

        if (isScrolling.current) return;

        const direction = e.key === 'ArrowDown' || e.key === 'PageDown' ? 1 : -1;

        const sections = sectionIds
          .map((id) => document.getElementById(id))
          .filter(Boolean) as HTMLElement[];

        if (sections.length === 0) return;

        let currentIndex = 0;
        let minDistance = Infinity;

        sections.forEach((sec, i) => {
          const rect = sec.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          if (distance < minDistance) {
            minDistance = distance;
            currentIndex = i;
          }
        });

        let nextIndex = currentIndex + direction;
        nextIndex = Math.max(0, Math.min(nextIndex, sections.length - 1));

        if (currentIndex !== nextIndex) {
          isScrolling.current = true;
          sections[nextIndex].scrollIntoView({ behavior: 'smooth' });

          setTimeout(() => {
            isScrolling.current = false;
          }, 1000);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
}
