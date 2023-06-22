import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { PrivateRoute } from "./frontend/Components/PrivateRoute";
import { Auth } from "./frontend/Pages/Auth/auth";
import { Feed } from "./frontend/Pages/Feed/Feed";

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
              <Feed />
            </PrivateRoute>
          }
        />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
