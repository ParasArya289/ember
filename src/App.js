import Mockman from "mockman-js";
import { FaEmber } from "react-icons/fa";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <FaEmber style={{ color: "white", fontSize: "5rem" }} />
      {/* <Mockman /> */}
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/auth"/>
      </Routes>
    </div>
  );
}

export default App;
