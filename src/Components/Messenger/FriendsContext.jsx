import React, { createContext, useState, useContext } from "react";

const FriendsContext = createContext();

export const FriendsProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [isAddNewFriend, setIsAddNewFriend] = useState(false);
  const [isSelected, setIsSelected] = useState([]);

  return (
    <FriendsContext.Provider
      value={{
        friends,
        setFriends,
        isAddNewFriend,
        setIsAddNewFriend,
        isSelected,
        setIsSelected,
      }}
    >
      {children}
    </FriendsContext.Provider>
  );
};

export const useFriendsContext = () => useContext(FriendsContext);
