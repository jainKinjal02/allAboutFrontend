// Rendering Lists in React:
// In React, you'll often need to display multiple similar components from a collection of data.
// This is typically done by using JavaScript's array methods, especially map(), to transform arrays of data into arrays of elements.

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map(number =>
  <li>{number}</li>
);

// Then use it in your render:
<ul>{listItems}</ul>

// Keys in React Lists:
// Keys are special string attributes that help React identify which items have changed, been added, or been removed. 
// They're crucial for React's reconciliation process.
// Some key points about keys:

// Each key must be unique among siblings (but can be repeated in different arrays)
// Keys should be stable identifiers - typically using database IDs or unique values from your data
// Using array indices as keys is generally discouraged unless your list is static and won't be reordered

// Here's how to properly use keys:
const todos = [
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build something cool' }
  ];
  
  function TodoList() {
    return (
      <ul>
        {todos.map(todo => 
          <li key={todo.id}>
            {todo.text}
          </li>
        )}
      </ul>
    );
  }


// Common mistakes to avoid:

// Generating keys on the fly (like using Math.random())
// Using non-unique values as keys
// Forgetting to add keys altogether

// Here's a more complete example showing proper list rendering with keys:

function BlogPosts({ posts }) {
    return (
      <div>
        {posts.map(post => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <div className="metadata">
              <span>{post.author}</span>
              <span>{post.date}</span>
            </div>
          </article>
        ))}
      </div>
    );
  }