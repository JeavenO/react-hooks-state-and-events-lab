import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // 1. Create a state variable 'isDarkMode' defaulting to false (light mode)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 2. Define the handler function to toggle the state
  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); // Toggles the boolean value
  };

  // 3. Determine the class name based on the state variable
  // If isDarkMode is true, use "App dark", otherwise use "App light"
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/* 4. Attach the handler to the button's onClick event */}
        <button onClick={handleToggleDarkMode}>
          {/* Change button text based on current state */}
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
