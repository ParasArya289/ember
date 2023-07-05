import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { followUser } from "../../AsyncUtilities/dataAsyncHelpers";
import { useAuth } from "../../Context/authContext";
import { useData } from "../../Context/dataContext";
import "./SuggestionBoxMobile.css";
export const SuggestionBoxMobile = () => {
  const {
    dataState: { notFollowing },
  } = useData();

  const { setUser, token } = useAuth();

  const navigate = useNavigate();

  // const isMobile = window.innerWidth < 850;

  // const responsiveMapping = isMobile? notFollowing?.slice(0, 3):notFollowing?.slice(0, 4)

  return (
    <>
      <div className="suggestionBoxMobile-container">
        {notFollowing?.slice(0, 3)?.map((user) => (
          <div key={user?._id} className="suggestionBoxMobile-info">
            <img
              src={user?.avatar}
              onClick={() => navigate("/profile/" + user?.username)}
            />
            <p>
              {user?.firstName} {user?.lastName}
            </p>
            <Button
              variant="secondary"
              className="info-Card-users-btn"
              onClick={() => followUser(user?._id, token, setUser)}
            >
              Follow
            </Button>
          </div>
        ))}
      </div>
      <hr className="postcard-hr" />
    </>
  );
};
