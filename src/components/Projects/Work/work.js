import WorkCard from "../Work-Card/work-card";
import WorkCardData from "./workCardData";
import React from "react";
const Work = () => {
  return (
    <div className="work-container">
      <div className="project-container">
        {WorkCardData.map((val, ind) => {
          return (
            <WorkCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
