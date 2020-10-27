import React from "react";
import "./Widgets.css";
import WidgetTrend from "./WidgetTrend";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__SearchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <div className="widgets__header">
          <h2>Trends for you</h2>
          <SettingsIcon />
        </div>

        <WidgetTrend
          trend="#HelloWorld!"
          tweets="12.8K"
          trendInfo="Trending in Indonesia"
        />
        <WidgetTrend
          trend="ReactJS and Firebase"
          tweets="3.021"
          trendInfo="Technology - IT"
        />
        <WidgetTrend
          trend="#TwitterClone"
          tweets="1.980"
          trendInfo="Trending in Somewhere"
        />
      </div>

      <div className="widgets__copyright">
        <p>
          This twitter-clone is created with ReactJS and Firebase.
          <br /> Build by{" "}
          <a
            href="https://rpangarego.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="link_portofolio"
          >
            Ronaldo Pangarego
          </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Widgets;
