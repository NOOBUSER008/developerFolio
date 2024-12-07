import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        {/* Custom message */}
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Crafted with ❤️ by Phani Mathangi")}
        </p>
        {/* Optional additional details */}
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          © 2024 Phani Mathangi. All rights reserved.
        </p>
      </div>
    </Fade>
  );
}
