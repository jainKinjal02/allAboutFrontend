// This is like a more sophisticated memory box with rules.
// Simple explanation: It's a more complex version of useState for when your state logic gets complicated.

function TodoList() {
    const [todos, dispatch] = useReducer((state, action) => {
      switch (action.type) {
        case 'ADD_TODO':
          return [...state, { text: action.text, completed: false }];
        case 'TOGGLE_TODO':
          return state.map((todo, index) =>
            index === action.index ? { ...todo, completed: !todo.completed } : todo
          );
        default:
          return state;
      }
    }, []);
    
    function handleAddTodo(text) {
      dispatch({ type: 'ADD_TODO', text });
    }
    
    return (
      <div>
        <button onClick={() => handleAddTodo('New Todo')}>Add Todo</button>
        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              onClick={() => dispatch({ type: 'TOGGLE_TODO', index })}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }