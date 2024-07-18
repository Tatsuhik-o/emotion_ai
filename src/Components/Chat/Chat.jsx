import "./Chat.css";
import HeadBar from "./HeadBar/HeadBar";
import ChatArea from "./ChatArea/ChatArea";
import MessageArea from "./MessageArea/MessageArea";
function Chat({ currentSelected, setShowMoreInfo, setFriends, friends }) {
  return (
    <div className="chat">
      <HeadBar
        currentSelected={currentSelected}
        setShowMoreInfo={setShowMoreInfo}
      />
      <ChatArea currentSelected={currentSelected} friends={friends} />
      <MessageArea currentSelected={currentSelected} setFriends={setFriends} />
    </div>
  );
}

export default Chat;
