import NavigationSection from "./NavigationSection";
import { Collapse, Button } from "reactstrap";
import { useState } from "react";
import Sections from "./Sections";
import Connect from "./Connect";
import Social from "./Social";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <header>
        <div id="home" className="container-fluid p-0">
          <div className="header-container">
            <span className="logo">logo</span>
            <NavigationSection />
            <div className="navigation-section-md">
              <Button color="black" onClick={toggle}>
                <i class="fa fa-bars"></i>
              </Button>
            </div>
          </div>
          <Collapse isOpen={isOpen}>
            <div className="collapsed-header-md">
              <Sections />
              <div className="social-md">
                <Social />
                <Connect />
              </div>
            </div>
          </Collapse>
        </div>
      </header>
    </>
  );
}
export default Header;
