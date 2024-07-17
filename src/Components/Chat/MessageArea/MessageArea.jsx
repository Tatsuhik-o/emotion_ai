import "./MessageArea.css";
function MessageArea() {
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
      />
      <div className="send_button_icon">
        <i className="fa-regular fa-paper-plane-top"></i>
      </div>
    </div>
  );
}

export default MessageArea;
