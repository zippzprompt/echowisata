// components/FadeInSection.jsx
import { useInView } from "react-intersection-observer";

const FadeInSection = ({
  children,
  threshold = 0.15,
  delay = 0,
  duration = 700,
  type = "fade", // 'fade' | 'slide-up' | 'scale' | 'blur'
}) => {
  const { ref, inView } = useInView({
    threshold: threshold,
    triggerOnce: true,
  });

  const getTransitionClasses = () => {
    switch (type) {
      case "slide-up":
        return `transition-all duration-${duration} ease-out transform ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`;
      case "scale":
        return `transition-all duration-${duration} ease-out transform ${inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`;
      case "blur":
        return `transition-all duration-${duration} ease-out ${inView ? "opacity-100 blur-0" : "opacity-0 blur-sm"}`;
      default: // fade
        return `transition-all duration-${duration} ease-out ${inView ? "opacity-100" : "opacity-0"}`;
    }
  };

  return (
    <div ref={ref} className={getTransitionClasses()} style={{ transitionDelay: `${delay}ms`, transitionDuration: `${duration}ms` }}>
      {children}
    </div>
  );
};

export default FadeInSection;
