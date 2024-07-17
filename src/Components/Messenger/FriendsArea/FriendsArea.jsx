import "./FriendsArea.css";
import Friend from "./Friend/Friend";
import { useEffect, useState } from "react";
import { useFriendsContext } from "../FriendsContext";
function FriendsArea({
  setFriends,
  friends,
  isAddNewFriend,
  setIsAddNewFriend,
  setCurrentSelected,
}) {
  const { isSelected, setIsSelected } = useFriendsContext();
  const [name, setName] = useState("");
  const [image, setImage] = useState(
    `https://avatar.iran.liara.run/public/${Math.floor(Math.random() * 20)}`
  );
  useEffect(() => {
    setIsSelected([...isSelected, false]);
  }, [friends]);
  function capitalize(name) {
    return name
      .split("")
      .map((elem, idx) => {
        if (idx !== 0) return elem;
        return elem.toUpperCase();
      })
      .join("");
  }
  function handleAddFriend() {
    if (!name || !image) return;
    setFriends((friends) => [
      ...friends,
      { id: friends.length, name: capitalize(name), image, ["messages"]: [] },
    ]);
    setIsAddNewFriend(false);
    setName("");
    setImage(
      `https://avatar.iran.liara.run/public/${Math.floor(Math.random() * 20)}`
    );
  }
  return (
    <div className="friends_area">
      {friends?.map((elem, index) => {
        return (
          <Friend
            friend={elem}
            key={index}
            isSelected={isSelected}
            setIsSelected={setIsSelected}
            index={index}
            setCurrentSelected={setCurrentSelected}
          />
        );
      })}
      {isAddNewFriend && friends.length < 5 && (
        <div className="form">
          <div className="friend_name">
            <label htmlFor="">Your Name : </label>
            <input
              type="text"
              placeholder="Your Name ..."
              value={name}
              onChange={(e) => setName(capitalize(e.target.value))}
            />
          </div>
          <div className="friend_picture">
            <label htmlFor="">Your Picture : </label>
            <input
              type="text"
              placeholder="Your Picture ..."
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <button onClick={handleAddFriend}>Add Friend</button>
        </div>
      )}
      {friends.length >= 5 && (
        <div className="maximum_user">
          You have reached the maximum users allowed
        </div>
      )}
    </div>
  );
}

export default FriendsArea;
