'use client';

import { useEffect, useRef } from 'react';

export default function SmoothScrollManager() {
  const isScrolling = useRef(false);

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'portfolio', 'contact'];

    const handleWheel = (e: WheelEvent) => {
      // Prevent the default scroll behavior completely
      e.preventDefault();

      // Ignore tiny events
      if (Math.abs(e.deltaY) < 10) return;

      // If we are already animating a scroll, ignore new wheel events
      if (isScrolling.current) return;

      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

      if (sections.length === 0) return;

      const direction = e.deltaY > 0 ? 1 : -1;

      // Find currently visible section
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

        // Wait for the browser's smooth scroll animation to finish
        // Standard smooth scrolling takes around 500-800ms
        setTimeout(() => {
          isScrolling.current = false;
        }, 1000);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    // Also support keyboard arrows for same clean effect
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
