// This is like a family sharing system in React.
// Simple explanation: It lets components access shared values without passing them through every level.

// First, create a context
const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return <ThemedButton />;
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Themed Button</button>;
}

//The button can access the theme directly without it being passed through Toolbar.