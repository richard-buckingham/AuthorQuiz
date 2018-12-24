import React from "react";

function Footer() {
  return (
    <div id="footer" className="row">
      <div className="col-10">
        <p className="text-muted credit">
          All images are from{" "}
          <a href="http://commons.wikimedia.org/wiki/Main_Page">
            Wikemedia Commons
          </a>{" "}
          and are in the public domain
        </p>
      </div>
    </div>
  );
}

export default Footer;
