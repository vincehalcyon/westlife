import React from "react";
import Score from "./Score"; // Ensure the correct path to the Score component

const FourScores = ({
  performance_score,
  accessibility_score,
  best_practices_score,
  seo_score,
  speed_index,
}) => {
  const getTextColors = (speed_index) => {
    if (speed_index >= 0 && speed_index <= 1.3) {
      return "text-[#51C975]"; // Change this to the appropriate tailwind CSS class for green text
    } else if (speed_index >= 1.4 && speed_index <= 2.3) {
      return "text-[#ffa400]"; // Change this to the appropriate tailwind CSS class for orange text
    } else {
      return "text-[#cc0000]"; // Change this to the appropriate tailwind CSS class for red text
    }
  };
 
  const textColor = getTextColors(speed_index);

  return (
    <div className="flex justify-around items-center">
      <div>
        <Score score={performance_score} />
        <div className="text-[20px] text-center">Performance</div>
      </div>
      <div>
        <Score score={accessibility_score} />
        <div className="text-[20px] text-center">Accessibility</div>
      </div>
      <div>
        <Score score={best_practices_score} />
        <div className="text-[20px] text-center">Best Practices</div>
      </div>
      <div>
        <Score score={seo_score} />
        <div className="text-[20px] text-center">SEO</div>
      </div>
      <div className=" flex flex-col justify-center items-center">
        <div className={`text-center text-[35px] tracking-[-5.2px] leading-[1.3] font-roboto ${textColor}`}>{speed_index}</div>
        <div>Speed Index</div>
      </div>
      {/* <div>
        <Score score={performance_score} />
      </div>
      <div>
        <Score score={accessibility_score} />
      </div>
      <div>
        <Score score={best_practices_score} />
      </div>
      <div>
        <Score score={seo_score} />
      </div> */}
    </div>
  );
};

export default FourScores;
