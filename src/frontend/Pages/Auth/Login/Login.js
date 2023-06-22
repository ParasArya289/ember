import "./Login.css";
import {FaEmber} from "react-icons/fa"

import { useContext, useRef } from "react";
// import { authContext } from "../../../contexts/authContext";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import { motion } from "framer-motion";

export const Login = () => {
//   const { token, loginHandler, user, authLoading } = useContext(authContext);
  const formRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(formRef.current);
    const obj = {};
    for (const [key, value] of formdata.entries()) {
      obj[key] = value;
    }
    // loginHandler(obj)
};
// console.log(token)
  const createTestAccount = () => {
    emailRef.current.value = "parasarya289@gmail.com";
    passwordRef.current.value = "parasarya";
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.1 }}
    >
      <h1 className="auth-heading"><FaEmber/></h1>
      <form ref={formRef} className="auth-form" onSubmit={handleSubmit}>
        <input ref={emailRef} type="email" name="email" placeholder="Email" required/>
        <input
          ref={passwordRef}
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <Dropdown className="auth-dropdown" as={ButtonGroup}>
          <Button
            className="auth-btn"
            type="submit"
            // disabled={authLoading}
            variant="dark"
          >
            Login
          </Button>

          <Dropdown.Toggle
            // disabled={authLoading}
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
              Test login
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </form>
    </motion.div>
  );
};