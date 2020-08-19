import React, { useEffect, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";

function App() {
  const [clicks, setClicks] = useState(0);
  const [loading, data] = useFetch(
    "https://jsonplaceholder.typicode.com/todos/"
  );

  console.log(loading);

  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <button
        onClick={() => {
          setClicks(clicks + 1);
        }}
      >
        Click Me : {clicks}
      </button>
      <ul>
        {data.map((d) => (
          <ListItem key={d.id} data={d} />
        ))}
      </ul>
    </div>
  );
}

const ListItem = ({ data: { id, title } }) => {
  return <li id={id}>{title}</li>;
};
export default App;
