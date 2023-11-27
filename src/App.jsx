import ThemeToggle from "./ThemeToggle";
import SearchForm from "./SearchForm";
import Gallery from "./Gallery";
import { useGlobalContext } from "./Context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const App = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  );
};
export default App;
