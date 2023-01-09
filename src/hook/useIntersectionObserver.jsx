import { useEffect, useRef } from "react";

function useIntersectionObserver({ onIntersect }) {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("fade-out");
          entry.target.classList.add("fade-in");
          onIntersect(entry);
          observer.unobserve(entry.target);
        } else {
          entry.target.classList.remove("fade-in");
          entry.target.classList.add("fade-out");
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [onIntersect]);

  return ref;
}

export default useIntersectionObserver;
