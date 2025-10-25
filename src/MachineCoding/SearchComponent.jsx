// Problem Statement: Implement Debouncing in React with Static Data
// For this task, you are required to optimize an existing React component 
// that includes a search input field for filtering a list of items. 
// The original component filters the list immediately as the user types, 
// leading to potentially inefficient rendering. You will modify the component 
// by implementing debouncing to reduce unnecessary renders when the user types. 
// Wait for "300ms" before filtering again and reset the list if the input is cleared.


import { useCallback, useEffect, useRef, useState } from "react";

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
  const debounceRef = useRef(null);


  useEffect(() => {
    const results = dataList.filter((i) => i.name.toLowerCase().includes(query.toLowerCase()));
    setFilteredData(results)
  }, [query])

  const debounce = (fn, delay) => {
    return (...args) => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
      debounceRef.current = setTimeout(() => fn(...args), delay);
    }
  }

  const handleChange = useCallback(
    debounce((e) => {
      setQuery(e.target.value);
    }, 300), []);

  return (
    <div>
      <input
        type="text"
        // value={query} uncontrolled input issue
        onChange={handleChange}
      />
      <ul>
        {
          filteredData.map((item) =>
            <li key={item.id}>{item.name}</li>
          )
        }
      </ul>
    </div>
  );
}

export default SearchComponent;


