import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // 1. Create a state variable to track the selected category, defaulting to "All"
  const [selectedCategory, setSelectedCategory] = useState("All");

  // 2. Handler to update state when the <select> value changes
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // 3. Filtering logic
  const filteredItems = items.filter((item) => {
    // If "All" is selected, return true for all items
    if (selectedCategory === "All") {
      return true;
    }
    // Otherwise, only return items whose category matches the selectedCategory
    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        {/* 4. Attach the handler and set the value attribute */}
        <select name="filter" onChange={handleCategoryChange} value={selectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {/* 5. Map over the filtered array instead of the original 'items' array */}
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;