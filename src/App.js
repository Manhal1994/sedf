import Main from "./componets/Main";
import Header from "./componets/Header";
import "./App.css";
import Skills from "./componets/Skills";
import Footer from "./componets/Footer";
import MyProjects from "./componets/MyProjects";

function App() {
  return (
    <>
      <Header />
      <div style={{ height: 40 + "px" }}></div>
      <Main />
      <section class="skills" id="skills">
        <div class="skills-container">
          <h2 className="skills-title">Skills</h2>
          <p className="desc">You Can See My Skills Here Yasta</p>
          <Skills
            items={[
              {
                name: "BackEnd Development",
                rate: "70",
              },
              {
                name: "FrontEnd Development",
                rate: "80",
              },
              {
                name: "Data Science",
                rate: "50",
              },
              {
                name: "Mobile Development",
                rate: "75",
              },
            ]}
          />
        </div>
      </section>
      <MyProjects />
      <Footer />
    </>
  );
}

export default App;
