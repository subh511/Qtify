import SearchIcons from "../Assests/Search icon.png";
import "./SearchBar.css";


function SearchBar(){

    return(
        <form className="search-bar">
        <input
          type="text"
          placeholder="Search..."
        />
        <button type="submit">
          <img src={SearchIcons} alt="Search" />
        </button>
      </form>
    )
}
export default SearchBar;