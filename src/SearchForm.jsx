import { useState } from "react";
import { useGlobalContext } from "./Context";

const SearchForm = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
  };

  return (
    <section>
      <h1 className="title">Unsplash images</h1>
      <form onSubmit={handleSubmit} action="" className="search-form">
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="cats"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;