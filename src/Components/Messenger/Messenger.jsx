import "./Messenger.css";
import { useEffect, useState } from "react";
import IconArea from "./IconArea/IconArea";
import SearchArea from "./SearchArea/SearchArea";
import FriendsArea from "./FriendsArea/FriendsArea";
import { FriendsProvider } from "./FriendsContext";
function Messenger({ setCurrentSelected, friends, setFriends }) {
  const [isAddNewFriend, setIsAddNewFriend] = useState(false);
  const [friendsToDisplay, setFriendsToDisplay] = useState([]);
  useEffect(() => {
    setFriendsToDisplay([...friends]);
  }, [friends]);
  return (
    <div className="messenger">
      <IconArea setIsAddNewFriend={setIsAddNewFriend} friends={friends} />
      <FriendsProvider>
        <SearchArea
          friends={friends}
          setFriends={setFriends}
          setFriendsToDisplay={setFriendsToDisplay}
        />
        <FriendsArea
          isAddNewFriend={isAddNewFriend}
          friends={friendsToDisplay}
          setFriends={setFriends}
          setIsAddNewFriend={setIsAddNewFriend}
          setCurrentSelected={setCurrentSelected}
        />
      </FriendsProvider>
    </div>
  );
}

export default Messenger;
