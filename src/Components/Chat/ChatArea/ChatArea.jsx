import "./ChatArea.css";
import UserMessage from "./UserMessage/UserMessage";
import AIMessage from "./AIMessage/AIMessage";
function ChatArea({ currentSelected }) {
  return (
    <div className="chat_area">
      {currentSelected?.messages.map((elem, index) => {
        if (index % 2 === 0)
          return (
            <UserMessage
              key={index}
              message={elem}
              picture={currentSelected.image}
            />
          );
        return <AIMessage key={index} message={elem} />;
      })}
    </div>
  );
}

export default ChatArea;
