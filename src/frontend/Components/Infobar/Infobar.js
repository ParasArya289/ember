import { Button } from "react-bootstrap";
import { followUser } from "../../AsyncUtilities/dataAsyncHelpers";
import { useAuth } from "../../Context/authContext";
import { useData } from "../../Context/dataContext";
import { ProfileHoverCard } from "../ProfileHoverCard/ProfileHoverCard";
import { Searchbar } from "../Searchbar/Searchbar";
import "./Infobar.css";
export const Inforbar = () => {
  const {
    dataState: { notFollowing },
  } = useData();
  const { setUser, token } = useAuth();

  return (
    <div>
      <div className="info-searchbar">
        <Searchbar />
      </div>

      <div className="info-card">
        <h4>Who to follow</h4>
        {notFollowing?.map((user) => (
          <div key={user?._id} className="info-Card-users-container">
            <div key={user?._id} className="info-Card-users">
              <ProfileHoverCard key={user?._id} user={user}>
                <div className="info-card-users-img">
                  <img src={user?.avatar} height="40" />
                </div>
              </ProfileHoverCard>
              <div className="info-Card-users-info">
                <h6 className="info-Card-users-info-name">
                  {user?.firstName} {user?.lastName}
                </h6>
                <p className="info-Card-users-info-username">
                  @{user?.username}
                </p>
              </div>
            </div>
            <Button
              variant="secondary"
              className="info-Card-users-btn"
              onClick={() => followUser(user?._id, token,setUser)}
            >
              Follow
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
