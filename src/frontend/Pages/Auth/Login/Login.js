import "./Login.css";
import { FaEmber, FaEye, FaEyeSlash } from "react-icons/fa";

import { useRef, useState } from "react";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import { motion } from "framer-motion";
import { useAuth } from "../../../Context/authContext";

export const Login = () => {
  const { loginHandler, authLoading } = useAuth();
  const [passwordVisible, setPasswordVisisble] = useState(false);
  const formRef = useRef(null);
  const userName = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(formRef.current);
    const obj = {};
    for (const [key, value] of formdata.entries()) {
      obj[key] = value;
    }
    loginHandler(obj);
  };

  const createTestAccount = () => {
    userName.current.value = "parasarya";
    passwordRef.current.value = "parasarya123";
  };

  const changePasswordVisibility = () => {
    setPasswordVisisble((prev) => !prev);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.1 }}
    >
      <h1 className="auth-heading">
        <FaEmber />
      </h1>
      <form ref={formRef} className="auth-form" onSubmit={handleSubmit}>
        <input
          ref={userName}
          type="text"
          name="username"
          placeholder="Username"
          required
        />
        <div className="auth-password">
          <input
            ref={passwordRef}
            type={passwordVisible ? "text" : "password"}
            name="password"
            placeholder="Password"
            required
          />
          {passwordVisible ? (
            <button type="button" onClick={changePasswordVisibility}>
              <FaEye />
            </button>
          ) : (
            <button type="button" onClick={changePasswordVisibility}>
              <FaEyeSlash />
            </button>
          )}
        </div>
        <Dropdown className="auth-dropdown" as={ButtonGroup}>
          <Button
            className="auth-btn"
            type="submit"
            disabled={authLoading}
            variant="dark"
          >
            Login
          </Button>

          <Dropdown.Toggle
            disabled={authLoading}
            split
            variant="dark"
            id="dropdown-split-basic"
          />
          <Dropdown.Menu className="auth-dropdown-item">
            <Dropdown.Item
              className="auth-dropdown-item"
              onClick={(e) => {
                createTestAccount();
                handleSubmit(e);
              }}
            >
              Guest login
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </form>
    </motion.div>
  );
};
