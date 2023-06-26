import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "./Login/Login";
import { Signup } from "./Signup/Signup";
import { motion } from "framer-motion";
import "./auth.css";
import useMeasure from "react-use-measure";
import { useAuth } from "../../Context/authContext";

export const Auth = () => {
  const [loginUi, setLoginUi] = useState("login");
  const { token } = useAuth();
  const [ref, { height }] = useMeasure();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);
  return (
    <div className="auth">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, height: height + 70 }}
        transition={{ duration: 0.4, delay: 0 }}
        className="auth-container"
      >
        <header className="auth-header">
          <button
            style={{
              background:
                loginUi !== "login"
                  ? "rgba(38, 38, 38, 0.1)"
                  : "rgba(64, 64, 64, 0.2)",
            }}
            onClick={() => setLoginUi("login")}
          >
            LogIn
          </button>
          <button
            style={{
              background:
                loginUi !== "signup"
                  ? "rgba(38, 38, 38, 0.1)"
                  : "rgba(64, 64, 64, 0.2)",
            }}
            onClick={() => setLoginUi("signup")}
          >
            SignUp
          </button>
        </header>
        <div ref={ref}>{loginUi === "login" ? <Login /> : <Signup />}</div>
      </motion.div>
    </div>
  );
};
