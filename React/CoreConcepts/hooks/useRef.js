// This is like a sticky note that persists between renders.
// Simple explanation: It gives you a way to access DOM elements directly, or to hold any value that doesn't trigger re-renders when it changes.

function TextInputWithFocusButton() {
    const inputRef = useRef(null);
    
    function handleButtonClick() {
      // Direct access to the DOM element
      inputRef.current.focus();
    }
    
    return (
      <div>
        <input ref={inputRef} type="text" />
        <button onClick={handleButtonClick}>Focus the input</button>
      </div>
    );
  }