import React, { useEffect, useRef, useState } from "react";
import "./fade.css";

function FadeUp({ children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);   // fade in when visible
        } else {
          setVisible(false);  // reset when scrolled out
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
  <div ref={ref} className={`fade-up ${visible ? "visible" : ""} ${className}`}>
    {children}
  </div>
);

}

export default FadeUp;
