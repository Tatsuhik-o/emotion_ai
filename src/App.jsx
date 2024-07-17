import "./App.css";
import Messenger from "./Components/Messenger/Messenger";
import Chat from "./Components/Chat/Chat";
import MoreInfo from "./Components/MoreInfo/MoreInfo";
import { useState } from "react";
function App() {
  const [currentSelected, setCurrentSelected] = useState(null);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  return (
    <div className="app">
      <Messenger setCurrentSelected={setCurrentSelected} />
      <Chat
        currentSelected={currentSelected}
        setShowMoreInfo={setShowMoreInfo}
      />
      <MoreInfo currentSelected={currentSelected} showMoreInfo={showMoreInfo} />
    </div>
  );
}

export default App;
