import space from "../astronaut.png";
import Skills from "./Skills";

function Main() {
  return (
    <>
      <section className="main">
        <div className="bg">
          <div className="intro">
            <button className="welcome">Welcome All In My Portfolio</button>

            <div class="typewriter">Hi I'm Manhal Akram Khwashki,</div>

            <p>
              Hello Everyone, I have 8 years of Experience in Web Development
            </p>
            <p className="lets">
              Let's connect &nbsp; &nbsp;<i class="fa fa-arrow-right"></i>
            </p>
          </div>
          <div className="image-section">
            <img src={space} alt="space" />
          </div>
        </div>
      </section>
    </>
  );
}
export default Main;
