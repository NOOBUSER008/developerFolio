import React, { useContext } from "react";
import "./SplashScreen.css";
import devopsInfinity from "../../assets/devops-infinity.gif"; // Import your custom loader
import { greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function SplashScreen() {
  const { isDark } = useContext(StyleContext);

  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
      <div className="splash-animation-container">
        <img src={devopsInfinity} alt="DevOps Infinity Loop" className="infinity-loader" />
      </div>
      <div className="splash-title-container">
        <span className="signature-name">{greeting.username}</span>
      </div>
    </div>
  );
}
