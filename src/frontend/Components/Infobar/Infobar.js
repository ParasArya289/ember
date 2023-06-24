import { Searchbar } from "../Searchbar/Searchbar";
import "./Infobar.css";
export const Inforbar = () => {
  return (
    <div>
      <div className="info-searchbar">
        <Searchbar />
      </div>
      <div className="info-card"></div>
      <div className="info-card"></div>
      <div className="info-card"></div>
    </div>
  );
};
