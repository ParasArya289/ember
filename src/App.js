import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { PrivateRoute } from "./frontend/Components/PrivateRoute";
import { Auth } from "./frontend/Pages/Auth/auth";
import { Bookmark } from "./frontend/Pages/Bookmark/Bookmark";
import { Explore } from "./frontend/Pages/Explore/Explore";
import { Feed } from "./frontend/Pages/Feed/Feed";
import { Home } from "./frontend/Pages/Home/Home";

function App() {
  return (
    <div className="App">
      {/* <Mockman /> */}
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
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
