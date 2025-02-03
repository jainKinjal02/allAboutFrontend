// Functional components are the modern, preferred way to write components in React. They are JavaScript functions that return React elements (JSX).

// Basic functional component
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  // Same component using arrow function
  const Welcome = (props) => {
    return <h1>Hello, {props.name}</h1>;
  };

// Advantages of functional components:

// Simpler syntax and easier to understand
// Less boilerplate compared to class components
// Better performance in some cases
// Easier to test and debug
// Support for hooks, which provide a more direct way to use state and lifecycle features

// Example of a well-structured functional component
function ProductCard({ product, onAddToCart }) {
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
  
    return (
      <div
        className={`product-card ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <button onClick={() => onAddToCart(product.id)}>
          Add to Cart
        </button>
      </div>
    );
  }