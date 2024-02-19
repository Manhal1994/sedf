import SocialItem from "./SocialItem";

function Social() {
  return (
    <>
      <nav className="social">
        <SocialItem icon="fa fa-linkedin" />
        <SocialItem icon="fa fa-facebook" />
        <SocialItem icon="fa fa-instagram" />
      </nav>
    </>
  );
}

export default Social;
