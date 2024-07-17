import { useState, useEffect } from "react";
import "./MoreInfo.css";
function MoreInfo({ showMoreInfo, currentSelected }) {
  const [delayedRender, setDelayedRender] = useState(false);

  useEffect(() => {
    if (showMoreInfo) {
      const timer = setTimeout(() => {
        setDelayedRender(true);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setDelayedRender(false);
    }
  }, [showMoreInfo]);
  const style = showMoreInfo
    ? {
        width: "33%",
      }
    : {
        width: "0%",
      };
  return (
    <div className="more_info" style={style}>
      {delayedRender && (
        <>
          <img src={currentSelected?.image} alt="" />
          <div className="more_info_profile">{currentSelected?.name}</div>
          <p>This Area is Under Construction ...</p>
          <p>More Info Will be Added Later</p>
        </>
      )}
    </div>
  );
}

export default MoreInfo;
