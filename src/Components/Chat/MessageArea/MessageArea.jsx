import { useEffect, useState } from "react";
import "./MessageArea.css";
function MessageArea({ currentSelected, setFriends }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [inputState, setInputState] = useState(false);
  function handleUserMessage(e) {
    setCurrentMessage(e.target.value);
  }
  useEffect(() => {
    setInputState(currentSelected ? false : true);
  }, [currentSelected]);
  function handleSubmit() {
    setInputState(true);
  }

  return (
    <div className="message_area_selected">
      <div className="icons_message_area">
        <i className="fa-regular fa-grid-round"></i>
        <i className="fa-regular fa-camera"></i>
        <i className="fa-regular fa-image"></i>
        <i className="fa-regular fa-microphone"></i>
      </div>
      <input
        type="text"
        className="user_message_chat"
        placeholder="Your Message ..."
        disabled={inputState}
        value={currentMessage}
        onChange={handleUserMessage}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
      />
      <div className="send_button_icon" onClick={handleSubmit}>
        <i className="fa-regular fa-paper-plane-top"></i>
      </div>
    </div>
  );
}

export default MessageArea;
