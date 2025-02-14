// This is like saving the result of a calculation to avoid doing it again.
// Simple explanation: It helps with performance by remembering computed values between renders.

function ProductList({ products, filterText }) {
    // This calculation only runs when products or filterText changes
    const filteredProducts = useMemo(() => {
      console.log('Filtering products...');
      return products.filter(product =>
        product.name.toLowerCase().includes(filterText.toLowerCase())
      );
    }, [products, filterText]);
    
    return (
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    );
  }