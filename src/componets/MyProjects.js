import React from "react";
import Projects from "./Projects";
import Contact from "./Contact";
import {
  BrowserRouter as Router,
  Route,
  useNavigate,
  NavLink,
  Routes,
  Outlet,
} from "react-router-dom";

const MyProjects = () => {
  const x = useNavigate();
  const style1 = ({ isActive }) => {
    return {
      background: isActive
        ? "linear-gradient(#e66465, #9198e5)"
        : "rgba(0, 0, 0, 0.123)",
      color: "white",
      display: "inline-block",
      textDecoration: "none",
      textAlign: " center",
      height: "50px",
      width: "18%",
      lineHeight: "50px",
      border: "0.7px solid white",
      cursor: "pointer",
      borderTopLeftRadius: "24px",
      borderBottomLeftRadius: "24px",
    };
  };
  const style2 = ({ isActive }) => {
    return {
      background: isActive
        ? "linear-gradient(#e66465, #9198e5)"
        : "rgba(0, 0, 0, 0.123)",
      color: "white",
      display: "inline-block",
      textDecoration: "none",
      textAlign: "center",
      height: "50px",
      width: "18%",
      margin: "auto",
      lineHeight: "50px",
      border: "0.7px solid white",
      cursor: "pointer",
      borderTopLeftRadius: "0px",
      borderBottomLeftRadius: "0px",
    };
  };
  const style3 = ({ isActive }) => {
    return {
      ...style2,
      background: isActive
        ? "linear-gradient(#e66465, #9198e5)"
        : "rgba(0, 0, 0, 0.123)",
      color: "white",
      textDecoration: "none",
      display: "inline-block",
      textAlign: " center",
      width: "18%",
      height: "50px",
      lineHeight: "50px",
      border: "0.7px solid white",
      cursor: "pointer",
      borderTopRightRadius: "24px",
      borderBottomRightRadius: "24px",
    };
  };

  return (
    <section className="myprojects" id="sections-projects">
      <h2 className="title" id="projects">
        My Projects
      </h2>
      <p className="desc">My name is Manhal , I am a Software Engineering </p>
      <div className="sections-header">
        <nav>
          <NavLink style={style1} to={"/"} onClick={() => x("/")}>
            1st Section
          </NavLink>
          <NavLink style={style2} to={"/contact"} onClick={() => x("/contact")}>
            2st Section
          </NavLink>
          <NavLink to={"/info"} style={style3} onClick={() => x("/info")}>
            3st Section
          </NavLink>
        </nav>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Projects /> <Contact />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/info"
          element={
            <>
              {" "}
              <p className="desc">
                My name is Manhal , I am a Software Engineering{" "}
              </p>
              <Contact />
            </>
          }
        />
      </Routes>
      <Outlet />
    </section>
  );
};

export default MyProjects;
