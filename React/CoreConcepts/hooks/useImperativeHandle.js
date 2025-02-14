// This is like creating a special control panel for a parent component.
// Simple explanation: It lets you customize what a parent component can do with your component when using refs.

// Child component with a custom exposed API
const FancyInput = React.forwardRef((props, ref) => {
    const inputRef = useRef();
    
    useImperativeHandle(ref, () => ({
      // Only expose what we want the parent to use
      focus: () => {
        inputRef.current.focus();
      },
      reset: () => {
        inputRef.current.value = '';
      }
    }));
    
    return <input ref={inputRef} {...props} />;
  });
  
  // Parent component using the custom API
  function Form() {
    const fancyInputRef = useRef();
    
    function handleSubmit() {
      // Can use the custom methods we exposed
      fancyInputRef.current.reset();
    }
    
    return (
      <form onSubmit={handleSubmit}>
        <FancyInput ref={fancyInputRef} />
        <button type="submit">Submit</button>
      </form>
    );
  }