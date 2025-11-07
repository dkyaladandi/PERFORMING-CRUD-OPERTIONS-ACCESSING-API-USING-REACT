// src/App.jsx
import "./App.css"; // Import your global CSS
// CORRECTED: Use NAMED IMPORT to match 'export const Posts'
import { Posts } from "./components/Posts.jsx"; 

function App() {
  return (
    <div className="App">
      <h1>React CRUD Application</h1>
      {/* Posts component handles its own state, API calls, and renders the Form inside it. */}
      <Posts />
    </div>
  );
}

export default App;