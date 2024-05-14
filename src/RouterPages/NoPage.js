import { Link, NavLink } from "react-router-dom";

const NoPage = () => {
  return (
    <>
      <p style={{ fontSize: "23px" }}>
        <big style={{ color: "RED" }}>Opps !</big>&nbsp;&nbsp;
        <small>PAGE NOT FOUND.</small>
      </p>
      <p>
        <NavLink className="nav-bar-link" to="/"><u>Go To Home Page</u></NavLink>
      </p>
    </>
  );
};
export default NoPage;
