import "./Profile.css";
import { RxDotsHorizontal } from "react-icons/rx";
import { RxArrowLeft } from "react-icons/rx";
import { useParams } from "react-router-dom";
import { Feed } from "../Feed/Feed";
import { Navbar } from "../../Components/Navbar/Navbar";
import { useData } from "../../Context/dataContext";
export const Profile = () => {
  const { username:usernameParams } = useParams();
  const {dataState:{users}} = useData();
  const foundUser = users?.find(({username})=>username === usernameParams)
  return (
    <Feed navbar={<Navbar title={foundUser?.firstName +" " + foundUser?.lastName}/>}>
      <div className="profile">
        <div className="profile-header">
          <div className="profile-header-action">
            <RxArrowLeft />
          </div>
          <div className="profile-header-action">
            <RxDotsHorizontal />
          </div>
        </div>
      </div>
    </Feed>
  );
};
