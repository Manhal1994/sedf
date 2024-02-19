function Sections() {
  return (
    <>
      <nav className="sections">
        <a
          className="active"
          id="home"
          href="/#home"
          onClick={() => handleNavigate("home")}
        >
          Home
        </a>
        <a
          id="sections-skills"
          href="#skills"
          onClick={() => handleNavigate("sections-skills")}
        >
          Skills
        </a>
        <a
          id="sections-projects"
          href="#projects"
          onClick={() => handleNavigate("sections-projects")}
        >
          Projects
        </a>
      </nav>
    </>
  );
}
function handleNavigate(id) {
  const eles = document.querySelectorAll(".sections a");
  eles.forEach((e) => {
    e.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}
export default Sections;
