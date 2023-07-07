import Mockman from "mockman-js";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { PrivateRoute } from "./frontend/Components/PrivateRoute";
import { Auth } from "./frontend/Pages/Auth/auth";
import { Bookmark } from "./frontend/Pages/Bookmark/Bookmark";
import { Explore } from "./frontend/Pages/Explore/Explore";
import { Feed } from "./frontend/Pages/Feed/Feed";
import { Home } from "./frontend/Pages/Home/Home";
import { Profile } from "./frontend/Pages/Profile/Profile";
import { SinglePost } from "./frontend/Pages/SinglePost/SInglePost";

function App() {
  return (
    <div className="App">
      {/* <Mockman /> */}
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/explore"
          element={
            <PrivateRoute>
              <Explore />
            </PrivateRoute>
          }
        />
        <Route
          path="/bookmark"
          element={
            <PrivateRoute>
              <Bookmark />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile/:username"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="/auth" element={<Auth />} />
        <Route path="/post/:postId" element={<SinglePost />} />
      </Routes>
    </div>
  );
}

export default App;
