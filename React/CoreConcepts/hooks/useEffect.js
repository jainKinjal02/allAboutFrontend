// This is like giving your component a "to-do list" after rendering.
// Simple explanation: It lets you run code after your component renders, like fetching data or setting up subscriptions.

function ProfilePage() {
    const [userData, setUserData] = useState(null);
    
    useEffect(() => {
      // This runs after the component renders
      fetch('https://api.example.com/user')
        .then(response => response.json())
        .then(data => setUserData(data));
      
      // This function runs when the component is removed
      return () => {
        console.log('Component is gone');
      };
    }, []); // Empty array means "run once after the first render"
    
    return (
      <div>
        {userData ? <p>Hello, {userData.name}!</p> : <p>Loading...</p>}
      </div>
    );
  }