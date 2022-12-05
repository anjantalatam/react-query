import { useQuery } from "react-query";
import axios from "axios";

export const RQSuperHeroesPage = () => {
  const { data, isLoading, error } = useQuery("superHeroes", () => {
    return axios.get("http://localhost:4000/superheroes");
  });

  console.log(data, isLoading);

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      {data?.data.map((hero) => (
        <div key={hero.id}>{hero.name}</div>
      ))}
    </>
  );
};
