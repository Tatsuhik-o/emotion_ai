import "./Chat.css";
import HeadBar from "./HeadBar/HeadBar";
import ChatArea from "./ChatArea/ChatArea";
import MessageArea from "./MessageArea/MessageArea";
function Chat({ currentSelected, setShowMoreInfo }) {
  return (
    <div className="chat">
      <HeadBar
        currentSelected={currentSelected}
        setShowMoreInfo={setShowMoreInfo}
      />
      <ChatArea />
      <MessageArea />
    </div>
  );
}

export default Chat;
