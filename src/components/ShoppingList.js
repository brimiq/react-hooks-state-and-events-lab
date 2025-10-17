import React, { useState } from "react";
import Item from "./Item";
import items from "../data/items"; // assuming items are imported

function ShoppingList() {
  // Step 1: Track the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Step 2: Update when user selects a category
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // Step 3: Filter items based on selectedCategory
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  // Step 4: Render
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>

      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
