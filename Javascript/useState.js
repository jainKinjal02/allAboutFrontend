// useState is like a "memory box" for your component.
function Counter() {
    const [count, setCount] = useState(0);
    
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }

  //In this example, count is stored in the component's memory, and we update it with the setCount function.
