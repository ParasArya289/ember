import { toast } from "react-hot-toast";
const toastStyles = {
  id: "toast",
  style: {
    border: "var(--layout-border)",
    borderRadius: "30px",
    padding: "16px",
    marginTop: "70px",
    backgroundColor: "var(--background-blur-dark)",
    backdropFilter: "var(--blur)",
    WebkitBackdropFilter: "var(--blur)",
    color: "var(--primary-text-color)",
    fontSize: "small",
    fontWeight: "var(--fw-regular)",
  },
  iconTheme: {
    primary: "var(--primary-color)",
    secondary: "var(--primary-text-color)",
  },
};
//success toast
export const successToast = (text) => toast.success(text, toastStyles);

//error toast
export const errorToast = (text) => toast.error(text, toastStyles);

//custom toast
export const customToast = (user, text = "") => {
  toast(
    (t) => (
      <div style={{ fontSize: "small" }}>
        <img
          src={user?.avatar}
          height="30"
          style={{
            borderRadius: "50%",
            height: "30px",
            width: "30px",
            marginRight: "10px",
            backgroundColor: "var(--secondary-color)",
          }}
        />
        <span>
          {text}{" "}
          <span style={{ color: "var(--ember)" }}>@{user?.username}</span>
        </span>
      </div>
    ),
    toastStyles
  );
  console.log(user);
};
