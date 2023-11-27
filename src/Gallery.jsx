import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./Context";
const APIKEY = import.meta.env.VITE_API_KEY;

const url = `https://api.unsplash.com/search/photos?client_id=${APIKEY}&query=`;

const Gallery = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();
  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}${searchTerm}`);
      return result.data;
    },
  });

  {
    /** Check for loading */
  }
  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading.....</h4>
      </section>
    );
  }

  {
    /** Check for Error */
  }
  if (response.isError) {
    return (
      <section className="image-container">
        <h4>There was an error.....</h4>
      </section>
    );
  }

  {
    /** Check if empty array no results */
  }
  const results = response.data.results;
  console.log(results);

  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.raw;
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};
export default Gallery;
