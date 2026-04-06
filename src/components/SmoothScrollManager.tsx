'use client';

import { useEffect, useRef } from 'react';

export default function SmoothScrollManager() {
  const isScrolling = useRef(false);

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'portfolio', 'contact'];

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 10) return;

      if (isScrolling.current) {
        e.preventDefault();
        return;
      }

      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

      if (sections.length === 0) return;

      const direction = e.deltaY > 0 ? 1 : -1;

      let currentIndex = 0;
      let maxVisibleArea = -1;

      sections.forEach((sec, i) => {
        const rect = sec.getBoundingClientRect();
        const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
        if (visibleHeight > maxVisibleArea) {
          maxVisibleArea = visibleHeight;
          currentIndex = i;
        }
      });

      const currentSection = sections[currentIndex];
      const rect = currentSection.getBoundingClientRect();

      if (direction === 1) {
        if (rect.bottom > window.innerHeight + 5) {
          return;
        }
      } else {
        if (rect.top < -5) {
          return;
        }
      }

      let nextIndex = currentIndex + direction;
      nextIndex = Math.max(0, Math.min(nextIndex, sections.length - 1));

      if (currentIndex !== nextIndex) {
        e.preventDefault();
        isScrolling.current = true;

        sections[nextIndex].scrollIntoView({ behavior: 'smooth' });

        setTimeout(() => {
          isScrolling.current = false;
        }, 1000);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    const handleKeyDown = (e: KeyboardEvent) => {
      const isNavKey = e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'PageDown' || e.key === 'PageUp';
      if (!isNavKey) return;

      if (isScrolling.current) {
        e.preventDefault();
        return;
      }

      const direction = e.key === 'ArrowDown' || e.key === 'PageDown' ? 1 : -1;

      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

      if (sections.length === 0) return;

      let currentIndex = 0;
      let maxVisibleArea = -1;

      sections.forEach((sec, i) => {
        const rect = sec.getBoundingClientRect();
        const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
        if (visibleHeight > maxVisibleArea) {
          maxVisibleArea = visibleHeight;
          currentIndex = i;
        }
      });

      const currentSection = sections[currentIndex];
      const rect = currentSection.getBoundingClientRect();

      if (direction === 1) {
        if (rect.bottom > window.innerHeight + 5) {
          return;
        }
      } else {
        if (rect.top < -5) {
          return;
        }
      }

      let nextIndex = currentIndex + direction;
      nextIndex = Math.max(0, Math.min(nextIndex, sections.length - 1));

      if (currentIndex !== nextIndex) {
        e.preventDefault();
        isScrolling.current = true;
        sections[nextIndex].scrollIntoView({ behavior: 'smooth' });

        setTimeout(() => {
          isScrolling.current = false;
        }, 1000);
      } else {
        // Prevent default if we are at the boundaries and can't go to another section
        // Or we might let it bounce (default browser behavior) at top/bottom of entire page.
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
