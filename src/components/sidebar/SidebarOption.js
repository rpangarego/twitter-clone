import React from "react";
import "./SidebarOption.css";

function SidebarOption({ active, Icon, text }) {
  return (
    <div className={`sidebarOption ${active && `sidebarOption--active`}`}>
      <Icon />
      {text === "Profile" ? (
        <h2>
          <a
            href="https://rpangarego.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {text}
          </a>
        </h2>
      ) : (
        <h2>{text}</h2>
      )}
    </div>
  );
}

export default SidebarOption;
