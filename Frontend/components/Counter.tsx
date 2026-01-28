
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration = 2000, suffix = '', className }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref} className={className}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export default Counter;
