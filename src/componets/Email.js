import React from "react";

const Email = () => {
  return (
    <div className="email">
      <div className="email-container">
        <p className="text">
          See My Projects At Once & leave here Your E-mail Adress ,
        </p>
        <div className="email-submit">
          <input type="email" placeholder="Email Address Yasta" />
          <input
            type="submit"
            value={"Submit"}
            onSubmit={(e) => e.preventDefailt()}
          />
        </div>
      </div>
    </div>
  );
};

export default Email;
