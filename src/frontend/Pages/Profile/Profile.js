import "./Profile.css";
import { RxDotsHorizontal } from "react-icons/rx";
import { RxArrowLeft } from "react-icons/rx";
import { useNavigate, useParams } from "react-router-dom";
import { Feed } from "../Feed/Feed";
import { Navbar } from "../../Components/Navbar/Navbar";
import { useData } from "../../Context/dataContext";
import { PostCard } from "../../Components/PostCard/PostCard";
import { LikePopover } from "../../Components/Popover/LikePopover";
export const Profile = () => {
  const { username: usernameParams } = useParams();
  const navigate = useNavigate();
  const {
    dataState: { users, posts },
  } = useData();

  const foundUser = users?.find(({ username }) => username === usernameParams);

  const foundPostOfUser = posts?.filter(
    ({ username }) => usernameParams === username
  );
  console.log(foundPostOfUser);

  return (
    <Feed
      navbar={
        <Navbar title={foundUser?.firstName + " " + foundUser?.lastName} />
      }
      filterbar={
        <div className="header-fixed-container">
          <div className="profile-header">
            <div
              className="profile-header-action"
              onClick={() => navigate("/")}
            >
              <RxArrowLeft />
            </div>
            <div className="profile-header-action">
              <RxDotsHorizontal />
            </div>
          </div>
        </div>
      }
    >
      <div className="header-fixed-container">
        <div className="profile-header">
          <div className="profile-header-action" onClick={() => navigate("/")}>
            <RxArrowLeft />
          </div>
          <div className="profile-header-action">
            <RxDotsHorizontal />
          </div>
        </div>
      </div>
      <div className="profile">
        <div className="header-bg">
          <img src="https://images.pexels.com/photos/5253574/pexels-photo-5253574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <div className="profile-avatar">
            <img src={foundUser?.avatar} />
          </div>
        </div>
        <div className="profile-name-header">
          <div className="profile-name">
            {foundUser?.firstName} {foundUser?.lastName}
          </div>
          <div className="profile-username">@{foundUser?.username}</div>
          <div className="profile-bio">{foundUser?.bio}</div>
          <a className="profile-link" src={foundUser?.username}>
            {foundUser?.link}
          </a>
        </div>
        <div className="profile-dashboard">
          <div className="profile-dashboard-info">
            <span className="profle-dashboard-info-data">
              {foundPostOfUser?.length}
            </span>
            <span className="profle-dashboard-info-data-name">Posts</span>
          </div>
          <LikePopover likedBy={foundUser?.followers}>
            <div className="profile-dashboard-info">
              <span className="profle-dashboard-info-data">
                {" "}
                {foundUser?.followers?.length}
              </span>
              <span className="profle-dashboard-info-data-name">Followers</span>
            </div>
          </LikePopover>

          <LikePopover likedBy={foundUser?.following}>
            <div className="profile-dashboard-info">
              <span className="profle-dashboard-info-data">
                {foundUser?.following?.length}
              </span>
              <span className="profle-dashboard-info-data-name">Following</span>
            </div>
          </LikePopover>
        </div>

        <div className="profile-posts">
          {foundPostOfUser?.map((post) => (
            <PostCard post={post} />
          ))}
        </div>
      </div>
    </Feed>
  );
};
