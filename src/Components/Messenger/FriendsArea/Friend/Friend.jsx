import { useState } from "react";
import "./Friend.css";
function Friend({
  friend,
  setIsSelected,
  isSelected,
  index,
  setCurrentSelected,
}) {
  const style = isSelected[index + 1]
    ? {
        backgroundColor: "#476CFF",
        color: "white",
      }
    : {};
  function handleSelect(index) {
    setCurrentSelected(friend);
    setIsSelected(
      isSelected.map((elem, idx) => {
        if (idx === index + 1) return true;
        return false;
      })
    );
  }
  return (
    <div className="friend" style={style} onClick={() => handleSelect(index)}>
      <div className="friend_image_message">
        <img src={friend?.image} alt={`${friend.name} Image`} />
      </div>
      <div className="friend_info_message">
        <div className="friend_name_message">{friend.name}</div>
        <div className="friend_lastmessage">
          {friend?.messages[friend.messages.length - 1]?.slice(0, 25) ||
            "Start Chatting ..."}
        </div>
      </div>
    </div>
  );
}

export default Friend;
