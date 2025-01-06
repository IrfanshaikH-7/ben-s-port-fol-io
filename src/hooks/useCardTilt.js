import { useMotionValue, useTransform, useSpring } from "framer-motion";

export function useCardTilt() {
  // Create base motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Create spring-based motion values
  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], [-15, 15]), 
    {
      stiffness: 50,
      damping: 15,
      mass: 0.5
    }
  );

  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], [-15, 15]), 
    {
      stiffness: 50,
      damping: 15,
      mass: 0.5
    }
  );

  // Shadow transforms
  const shadowX = useTransform(x, [-0.5, 0.5], [-20, 20]);
  const shadowY = useTransform(y, [-0.5, 0.5], [20, -20]);
  const shadowBlur = useTransform(
    [x, y],
    ([latestX, latestY]) => Math.abs(latestX + latestY) * 30 + 10
  );
  const shadowOpacity = useTransform(
    [x, y],
    ([latestX, latestY]) => Math.min(Math.abs(latestX + latestY) + 0.3, 0.8)
  );

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    
    const xPct = (mouseX / rect.width) - 0.5;
    const yPct = (mouseY / rect.height) - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { 
    rotateX, 
    rotateY, 
    shadowX, 
    shadowY, 
    shadowBlur, 
    shadowOpacity,
    handleMouseMove, 
    handleMouseLeave 
  };
} 