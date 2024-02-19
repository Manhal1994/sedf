import Connect from "./Connect";
import Sections from "./Sections";
import Social from "./Social";

function NavigationSection() {
  return (
    <>
      <div className="navigation-section">
        <Sections />
        <Social />
        <Connect />
      </div>
    </>
  );
}

export default NavigationSection;
