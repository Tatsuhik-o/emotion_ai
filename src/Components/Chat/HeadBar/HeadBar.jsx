import "./HeadBar.css";
function HeadBar({ currentSelected, setShowMoreInfo }) {
  //
  return (
    <div className="headbar">
      <div className="user_profile_pic">
        <img src={currentSelected?.image} alt="" />
      </div>
      <div className="more_indo_details_icons">
        <i className="fa-regular fa-phone"></i>
        <i className="fa-regular fa-video"></i>
        <i
          className="fa-regular fa-circle-info"
          onClick={() => setShowMoreInfo((moreInfo) => !moreInfo)}
        ></i>
      </div>
    </div>
  );
}

export default HeadBar;
