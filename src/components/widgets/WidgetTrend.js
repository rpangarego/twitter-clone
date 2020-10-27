import React from "react";
import "./WidgetTrend.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function WidgetTrend({ trend, tweets, trendInfo }) {
  return (
    <div className="widgetTrend">
      <div className="widgetTrend__info">
        <p>{trendInfo}</p>
        <ExpandMoreIcon />
      </div>
      <h3>{trend}</h3>
      <p className="widgetTrend_tweets">{tweets} Tweets</p>
    </div>
  );
}

export default WidgetTrend;
