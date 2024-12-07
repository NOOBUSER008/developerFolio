import React, { useContext } from "react";
import "./SplashScreen.css";
import { greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function SplashScreen() {
  const { isDark } = useContext(StyleContext);

  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
      <div className="splash-animation-container">
        <video autoPlay loop muted className="infinity-loader">
          <source src="/DevOps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="splash-title-container">
        <span className="signature-name">{greeting.username}</span>
      </div>
    </div>
  );
}
