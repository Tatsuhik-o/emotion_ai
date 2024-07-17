import { useState } from "react";
import "./SearchArea.css";
import { useFriendsContext } from "../FriendsContext";
function SearchArea({ setFriendsToDisplay, friends }) {
  const { setIsSelected } = useFriendsContext();
  const [searchQuery, setSearchQuery] = useState("");

  function handleChange(e) {
    setFriendsToDisplay(
      friends.filter((elem) => elem.name.toLowerCase().includes(e.target.value))
    );
    setSearchQuery(e.target.value);
    setIsSelected(Array.from({ length: friends.length }, () => false));
  }

  return (
    <div className="search_area">
      <input
        type="text"
        placeholder="Search Friend ..."
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchArea;
