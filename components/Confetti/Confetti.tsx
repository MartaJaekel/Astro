import confetti from 'canvas-confetti';
import { useEffect } from 'react';

    const ConfettiTrigger = () => {
        const defaults = {
          spread: 360,
          ticks: 50,
          gravity: 0,
          decay: 0.94,
          startVelocity: 30,
          colors: ['#FFE400', '#FFBD00', '#E89400', '#FFCA6C', '#FDFFB8']
        };
      
        const shoot = () => {
          confetti({
            ...defaults,
            particleCount: 40,
            scalar: 1.2,
            shapes: ['star']
          });
      
          confetti({
            ...defaults,
            particleCount: 10,
            scalar: 0.75,
            shapes: ['circle']
          });
        };
      
        useEffect(() => {
          const timers = [
            setTimeout(() => shoot(), 0),
            setTimeout(() => shoot(), 100),
            setTimeout(() => shoot(), 200)
          ];
      
          // Cleanup timeouts when component unmounts
          return () => timers.forEach(clearTimeout);
        }, []); // Empty dependency array means this eff
    return (
        <div>
            <h1>Confetti</h1>
        </div>
    )
}
export default ConfettiTrigger;