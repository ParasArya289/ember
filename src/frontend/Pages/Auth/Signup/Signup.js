import { FaEmber } from "react-icons/fa";

import { useRef, useState } from "react";
import { Button, ButtonGroup, Dropdown, Spinner } from "react-bootstrap";
import { motion } from "framer-motion";
import { useAuth } from "../../../Context/authContext";
import { avatars } from "../../../../Utils/avatars";
import "./Signup.css";
export const Signup = () => {
  const [selectedAvatar, setSelectedAvatar] = useState();
  const [avatarLoading, setAvatarLoading] = useState(true);
  const { singupHandler, authLoading } = useAuth();
  const formRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const userName = useRef(null);
  const passwordRef = useRef(null);

  console.log(avatars);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(formRef.current);
    const obj = {};
    for (const [key, value] of formdata.entries()) {
      obj[key] = value;
    }
    singupHandler(obj);
  };

  const createTestAccount = () => {
    firstNameRef.current.value = "Test";
    lastNameRef.current.value = "Test";
    userName.current.value = "test@gmail.com";
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
          ref={userName}
          type="text"
          name="username"
          placeholder="Username"
          required
        />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <p>Select avatar</p>
        <div className="avatar-radio-group">
          {avatars.map((avatar, index) => (
            <label key={index} className="avatar-radio">
              <input
                type="radio"
                name="avatar"
                value={avatar}
                required
                onChange={() => setSelectedAvatar(index)}
                />
                {avatarLoading && <Spinner size="sm" className="spinner"/>}
              <img
                src={avatar}
                alt={`Avatar ${index + 1}`}
                className="avatar-image"
                style={{
                  outline: selectedAvatar === index ? "1px solid grey" : "",
                }}
                onLoad={() => setAvatarLoading(false)}
              />
            </label>
          ))}
        </div>
        <Dropdown className="auth-dropdown" as={ButtonGroup}>
          <Button
            className="auth-btn"
            type="submit"
            disabled={authLoading}
            variant="dark"
          >
            Create Account
          </Button>

          <Dropdown.Toggle
            disabled={authLoading}
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
