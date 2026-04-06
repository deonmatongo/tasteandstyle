import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const observeNew = (nodes) => {
      nodes.forEach((el) => {
        if (el.nodeType !== 1) return;
        if (el.classList?.contains('reveal') && !el.classList.contains('visible')) {
          io.observe(el);
        }
        el.querySelectorAll?.('.reveal:not(.visible)').forEach((child) => io.observe(child));
      });
    };

    // Observe elements already in the DOM
    document.querySelectorAll('.reveal:not(.visible)').forEach((el) => io.observe(el));

    // Watch for new .reveal elements added by React Router navigations
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((mut) => observeNew(mut.addedNodes));
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []); // Only runs once — MutationObserver handles all subsequent DOM changes
}
