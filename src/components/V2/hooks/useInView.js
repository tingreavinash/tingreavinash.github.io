import { useEffect, useRef, useState } from "react";

export function useInView(options = {}) {
  const { threshold = 0.1, rootMargin = "0px", once = true } = options;
  const ref = useRef(null);
  const [inView, setInView] = useState(() => {
    // Degrade gracefully to visible if IntersectionObserver is unavailable
    return typeof window === "undefined" || !("IntersectionObserver" in window);
  });

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) {
            observer.unobserve(node);
          }
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  return [ref, inView];
}
