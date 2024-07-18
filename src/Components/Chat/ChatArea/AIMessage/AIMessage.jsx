import "./AIMessage.css";
function AIMessage({ message }) {
  return (
    <div className="chat_ai_message">
      <img
        src="https://avatar.iran.liara.run/public/job/operator/male"
        alt=""
        className="chat_ai_img"
      />
      <div className="chat_ai_entry">{message}</div>
    </div>
  );
}

export default AIMessage;
