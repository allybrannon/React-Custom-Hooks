import React from "react";
import useFetch from "./hooks/useFetch";

const App = () => {
  const { loading, data, error } = useFetch("http://localhost:5544/api");

  console.log(data);

  return (
    <div>{data && data.results.map((d) => <div key={d.id}>{d.id}</div>)}</div>
  );
};

export default App;
