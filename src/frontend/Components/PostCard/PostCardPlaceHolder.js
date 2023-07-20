import { Placeholder } from "react-bootstrap";
import "./PostCardPlaceHolder.css";

export const PostCardPlaceHolder = () => {
  return (
    <>
      <div className="postcard-placeholder">
        <Placeholder.Button
          xs={4}
          aria-hidden="true"
          variant="dark"
          className="postcard-placeholder-avatar"
          animation="wave"
        />
        <div>
          <Placeholder as="p" animation="wave" style={{ textAlign: "" }}>
            <Placeholder xs={4} />
            <br />
            <Placeholder xs={2} />
            <br />
            <br />
            <Placeholder xs={8} />
            <br />
            <Placeholder xs={6} />
          </Placeholder>
        </div>
      </div>
      {/* <hr className="postcard-hr" /> */}
    </>
  );
};
