// Problem Statement: Implement Debouncing in React with Static Data
// For this task, you are required to optimize an existing React component 
// that includes a search input field for filtering a list of items. 
// The original component filters the list immediately as the user types, 
// leading to potentially inefficient rendering. You will modify the component 
// by implementing debouncing to reduce unnecessary renders when the user types. 
// Wait for "300ms" before filtering again and reset the list if the input is cleared.


import { useState } from "react";

const dataList = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
  { id: 4, name: "Date" },
  { id: 5, name: "Elderberry" },
];

function SearchComponent() {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState(dataList);


  return (
    <div>
      <input
        type="text"
        value={query}
      />
      <ul>

      </ul>
    </div>
  );
}

export default SearchComponent;


