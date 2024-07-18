import { useState } from "react";
import "./IconArea.css";
function IconArea({ setIsAddNewFriend, friends }) {
  return (
    <div className="icon_area">
      <h2>Chats</h2>
      <div className="icons">
        <i className="fa-regular fa-video-plus"></i>
        <i
          className="fa-regular fa-message-plus"
          onClick={() => {
            if (friends.length > 4) return;
            setIsAddNewFriend(true);
          }}
        ></i>
      </div>
    </div>
  );
}

export default IconArea;
