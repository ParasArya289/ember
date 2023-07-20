import { FaEmber, FaEye, FaEyeSlash } from "react-icons/fa";
import { BsShuffle } from "react-icons/bs";

import { useRef, useState } from "react";
import { Button, ButtonGroup, Dropdown, Spinner } from "react-bootstrap";
import { motion } from "framer-motion";
import { useAuth } from "../../../Context/authContext";
import { avatars } from "../../../../Utils/avatars";
import "./Signup.css";
export const Signup = () => {
  const [passwordVisible, setPasswordVisisble] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [avatarLoading, setAvatarLoading] = useState(true);
  const { singupHandler, authLoading } = useAuth();
  const formRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const userName = useRef(null);
  const passwordRef = useRef(null);

  function createDramaEffect() {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 5);
        console.log(randomNumber);
        setSelectedAvatar(randomNumber);
      }, i * 100);
    }
  }

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
    firstNameRef.current.value = "John";
    lastNameRef.current.value = "Doe";
    userName.current.value = "johndoe";
    passwordRef.current.value = "test";
  };

  const changePasswordVisibility = () => {
    setPasswordVisisble((prev) => !prev);
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

        <motion.div className="avatar-radio-header">
          <motion.p>Select Avatar</motion.p>
          <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 1 }}>
            <BsShuffle onClick={createDramaEffect} />
          </motion.span>
        </motion.div>
        <div className="avatar-radio-group">
          {avatars.map((avatar, index) => (
            <label key={index} className="avatar-radio">
              <input
                type="radio"
                name="avatar"
                value={avatar}
                checked={index === selectedAvatar}
                required
                onChange={() => setSelectedAvatar(index)}
              />
              {avatarLoading && <Spinner size="sm" className="spinner" />}
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1 }}
                initial={{ scale: 1 }}
                animate={{ scale: selectedAvatar === index ? 1.2 : 1 }}
                src={avatar}
                alt={`Avatar ${index + 1}`}
                className="avatar-image"
                style={{
                  borderColor: selectedAvatar === index ? "grey" : "",
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
