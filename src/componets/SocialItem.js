function SocialItem({ icon }) {
  return (
    <>
      <div className="social-item">
        <a href="https://www.linkedin.com/in/manhal-khwashki/">
          <i className={icon} aria-hidden="true"></i>
        </a>
      </div>
    </>
  );
}

export default SocialItem;
