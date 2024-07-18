import "./UserMessage.css";
function UserMessage({ message, picture }) {
  return (
    <div className="chat_user_message">
      <div className="chat_user_entry">{message}</div>
      <img src={picture} alt="" className="chat_user_img" />
    </div>
  );
}

export default UserMessage;
