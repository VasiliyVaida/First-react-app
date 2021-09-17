import React, { useState } from "react";
import { ListsPage } from ".";

export const ListsPageContainer = () => {
  const [userList, setUserList] = useState([
    { name: 'Ditto', age: 18 },
    { name: 'Pikachu', age: 23 },
    { name: 'Bulbasaur', age: 16 },
  ]);
  const handleUserRemove = (index) => {
    const stateCopy = [...userList];
    stateCopy.splice(index, 1);
    setUserList(stateCopy);
  };
  return <ListsPage users={userList} onCardClick={handleUserRemove} />
};