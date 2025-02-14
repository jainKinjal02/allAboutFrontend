// This is like useEffect but happens before the browser paints.
// Simple explanation: It works like useEffect, but runs synchronously after all DOM mutations and before the screen updates.

function Tooltip({ text, position }) {
    const tooltipRef = useRef();
    
    useLayoutEffect(() => {
      // This runs synchronously after DOM updates but before painting
      const { current } = tooltipRef;
      const computedPosition = calculatePosition(position, current);
      
      // Apply the position before the browser paints
      current.style.left = `${computedPosition.x}px`;
      current.style.top = `${computedPosition.y}px`;
    }, [position]);
    
    return <div ref={tooltipRef} className="tooltip">{text}</div>;
  }