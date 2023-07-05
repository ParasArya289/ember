import { useRef, useState } from "react";
import { search } from "../../../Utils/utils";
import { useData } from "../../Context/dataContext";
import { SearchPopover } from "../Popover/SearchPopover";
import "./Searchbar.css";
export const Searchbar = () => {
  const [searchOutput, setSearchOutput] = useState([]);
  const {
    dataState: { users },
  } = useData();
  const inputRef = useRef(null);

  const searchHandler = (e) => {
    const key = e.target.value.toLowerCase().replace(" ", "");
    const searchedArray = search(users, key);
    setSearchOutput(searchedArray);
    return;
    return;
  };

  return (
    <SearchPopover array={searchOutput} inputRef={inputRef}>
      <input
        ref={inputRef}
        type="text"
        className="searchbar"
        placeholder="Search Ember"
        onChange={(e) => searchHandler(e)}
      />
    </SearchPopover>
  );
};
