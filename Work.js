import "./WorkCardStyles.css";
import React from 'react';

import Workcard from "./Workcard";
import WorkCardData from "./WorkCardData"; // Removed extra spaces in the import path

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading"></h1>
        <div className="project-container">
            {WorkCardData.map((val, ind) => {
                return (
                    <Workcard
                        key={ind} // Changed 'Key' to 'key' (lowercase 'k') for React to recognize it as a special prop
                        imgsrc={val.imgsrc}
                        title={val.title}
                        text={val.text}
                        view={val.view}
                    />
                );
            })}
        </div>
    </div>
  );
}

export default Work;
