function ProductCard({ product }) {
    const isNew = (new Date() - new Date(product.releaseDate)) < (30 * 24 * 60 * 60 * 1000);
  
    // 1. Using if statements
    if (isNew) {
      return (
        <div className="product-card">
          <h2>{product.name}</h2>
          <span className="badge">New!</span>
        </div>
      );
    }
    return (
      <div className="product-card">
        <h2>{product.name}</h2>
      </div>
    );
  
    // 2. Using ternary operator
    return (
      <div className="product-card">
        <h2>{product.name}</h2>
        {isNew ? <span className="badge">New!</span> : null}
      </div>
    );
  
    // 3. Using logical && operator
    return (
      <div className="product-card">
        <h2>{product.name}</h2>
        {isNew && <span className="badge">New!</span>}
      </div>
    );
  }


// If Statements
// Most straightforward and readable for complex conditions
// Good for when you need different layouts based on conditions
// Can't be used directly inside JSX
// Best used when you need to return completely different JSX structures


// Ternary Operators (?:)
// Perfect for inline conditions in JSX
// Great for simple if/else scenarios
// Can be nested (though this can hurt readability)
// Format: condition ? trueElement : falseElement
// Very useful for toggling between two states


// Logical && Operator
// Best for simple "show/hide" scenarios
// Shortest syntax
// Only renders when condition is true
// Important caveat: Don't use with numbers as 0 will be rendered
// Format: condition && element

// Some additional tips for conditional rendering:
// Multiple conditions using &&
return (
    <div>
      {isLoggedIn && hasPermission && <AdminPanel />}
    </div>
  );
  
  // Combining ternary with &&
  return (
    <div>
      {isLoggedIn ? (
        hasPermission && <AdminPanel />
      ) : (
        <LoginPrompt />
      )}
    </div>
  );
  
  // Early return pattern for loading/error states
  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  
  return <MainContent />;