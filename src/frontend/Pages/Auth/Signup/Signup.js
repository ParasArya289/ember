import { FaEmber } from "react-icons/fa";

import { useContext, useRef } from "react";
// import { authContext } from "../../../contexts/authContext";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import { motion } from "framer-motion";

export const Signup = () => {
  //   const { token, user, singupHandler, authLoading } = useContext(authContext);
  const formRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(formRef.current);
    const obj = {};
    for (const [key, value] of formdata.entries()) {
      obj[key] = value;
    }
    // singupHandler(obj);
  };

  const createTestAccount = () => {
    firstNameRef.current.value = "Test";
    lastNameRef.current.value = "Test";
    emailRef.current.value = "test@gmail.com";
    passwordRef.current.value = "test";
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <h1 className="auth-heading">
        <FaEmber />
      </h1>
      <form className="auth-form" ref={formRef} onSubmit={handleSubmit}>
        <input
          ref={firstNameRef}
          type="text"
          name="firstName"
          placeholder="First Name"
          required
        />
        <input
          ref={lastNameRef}
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
        />
        <input
          ref={emailRef}
          type="email"
          name="email"
          placeholder="Email"
          required
        />
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
            Create Account
          </Button>

          <Dropdown.Toggle
            // disabled={authLoading}
            split
            variant="dark"
            id="dropdown-split-basic"
          />
          <Dropdown.Menu className="auth-dropdown-item">
            <Dropdown.Item onClick={createTestAccount}>
              Fill With Test Data
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </form>
    </motion.div>
  );
};
