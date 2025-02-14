// This is like saving a function in your pocket to reuse later.
// Simple explanation: It helps with performance by keeping the same function between renders.

function ParentComponent() {
    const [count, setCount] = useState(0);
    
    // This function will be the same function object between renders
    const handleClick = useCallback(() => {
      console.log('Button clicked!');
    }, []); // Empty array means it never needs to change
    
    return (
      <div>
        <ChildComponent onClick={handleClick} />
        <button onClick={() => setCount(count + 1)}>Update Count</button>
      </div>
    );
  }
  
  // This component only re-renders when its props actually change
  const ChildComponent = React.memo(function ChildComponent({ onClick }) {
    console.log('Child rendered!');
    return <button onClick={onClick}>Click me</button>;
  });