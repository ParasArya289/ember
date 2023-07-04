import { useEffect, useState } from "react";
import { useData } from "../../Context/dataContext";
import "./Filterbar.css";

export const Filterbar = () => {
  const [sortPerameter, setSortPerameter] = useState("trending");
  const { dataState:{posts}, dataDispatch } = useData();
  const addHighlightClass = (parameter) =>
    `filterbar-btn ${sortPerameter === parameter ? "filterbar-highlight" : ""}`;

  useEffect(() => {
    dataDispatch({ type: "SORT", payload: sortPerameter });
  }, [sortPerameter,posts]);

  return (
    <div className="filterbar">
      <button
        className={addHighlightClass("trending")}
        onClick={() => setSortPerameter("trending")}
      >
        Trending
      </button>
      <button
        className={addHighlightClass("latest")}
        onClick={() => setSortPerameter("latest")}
      >
        Latest
      </button>
      <button
        className={addHighlightClass("oldest")}
        onClick={() => setSortPerameter("oldest")}
      >
        Oldest
      </button>
    </div>
  );
};
