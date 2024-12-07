import React, { useState, useContext } from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function SoftwareSkill() {
  const { isDark } = useContext(StyleContext);
  const [activeIndex, setActiveIndex] = useState(null); // State to manage active tool

  console.log("Rendering SoftwareSkill component...");

  const allTools = skillsSection.categories.flatMap((category) =>
    category.tools.map((tool) => ({
      ...tool,
      category: category.categoryName,
    }))
  );

  // Handle click to fold/unfold labels
  const handleCardClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the card if clicked again
    } else {
      setActiveIndex(index); // Open the clicked card
    }
  };

  return (
    <div className={`software-skill ${isDark ? "dark" : "light"}`}>
      <div className="scrolling-container">
        <div className="row">
          {allTools.map((tool, index) => (
            <div
              key={`row1-${index}`}
              className="tool"
              onClick={() => handleCardClick(index)} // Add click handler
            >
              <div className={`tool-label ${activeIndex === index ? "label-unfolded" : "label-folded"}`}>
                {tool.category}
              </div>
              <img src={tool.logo} alt={tool.name} />
              <p>{tool.name}</p>
            </div>
          ))}
        </div>
        <div className="row">
          {allTools.reverse().map((tool, index) => (
            <div
              key={`row2-${index}`}
              className="tool"
              onClick={() => handleCardClick(index)} // Add click handler
            >
              <div className={`tool-label ${activeIndex === index ? "label-unfolded" : "label-folded"}`}>
                {tool.category}
              </div>
              <img src={tool.logo} alt={tool.name} />
              <p>{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
