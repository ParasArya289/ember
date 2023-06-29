import { Button } from "react-bootstrap";
import { useData } from "../../Context/dataContext";
import { ProfileHoverCard } from "../ProfileHoverCard/ProfileHoverCard";
import { Searchbar } from "../Searchbar/Searchbar";
import "./Infobar.css";
export const Inforbar = () => {
  const {
    dataState: {notFollowing },
  } = useData();
  return (
    <div>
      <div className="info-searchbar">
        <Searchbar />
      </div>

      <div className="info-card">
        <h4>Who to follow</h4>
        {notFollowing?.map((user) => (
          <div className="info-Card-users-container">
          <div key={user?.id} 
          className="info-Card-users">
            <ProfileHoverCard key={user?.id} user={user}>
              <div className="info-card-users-img">
                <img src={user?.avatar} height="40" />
              </div>
            </ProfileHoverCard>
            <div className="info-Card-users-info">
              <h6 className="info-Card-users-info-name">
                {user?.firstName} {user?.lastName}
              </h6>
              <p className="info-Card-users-info-username">@{user?.username}</p>
            </div>
          </div>
          <Button variant="secondary" className="info-Card-users-btn">
            Follow
          </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
