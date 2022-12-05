import { useState, useEffect } from "react";
import axios from "axios";

export const SuperHeroesPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    axios.get("http://localhost:4000/superheroes").then((resp) => {
      setData(resp.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <>
      <h2>Super Heroes Page</h2>
      {data.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </>
  );
};
