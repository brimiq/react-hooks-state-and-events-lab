import React, { useState } from "react";
import ShoppingList from "./ShoppingList";

function App() {
  // Step 1: Create a state variable for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Step 2: Function to toggle dark mode
  function handleDarkModeClick() {
    setIsDarkMode(!isDarkMode);
  }

  // Step 3: Use state to set className dynamically
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Grocery List</h2>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList />
    </div>
  );
}

export default App;

