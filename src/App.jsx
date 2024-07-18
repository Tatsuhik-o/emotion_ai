import "./App.css";
import Messenger from "./Components/Messenger/Messenger";
import Chat from "./Components/Chat/Chat";
import MoreInfo from "./Components/MoreInfo/MoreInfo";
import { useEffect, useState } from "react";
function App() {
  const [currentSelected, setCurrentSelected] = useState(null);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    let temp = {};
    if (currentSelected === null) return;
    friends.forEach((elem) => {
      if (elem.id === currentSelected.id) temp = elem;
    });
    setCurrentSelected(temp);
  }, [friends]);
  return (
    <div className="app">
      <Messenger
        setCurrentSelected={setCurrentSelected}
        friends={friends}
        setFriends={setFriends}
      />
      <Chat
        currentSelected={currentSelected}
        setShowMoreInfo={setShowMoreInfo}
        setFriends={setFriends}
        friends={friends}
      />
      <MoreInfo currentSelected={currentSelected} showMoreInfo={showMoreInfo} />
    </div>
  );
}

export default App;
