import { useEffect, useState } from "react";
import { UsersPage } from ".";


export const UserPageContainer = () => {
  const [users, setUsers] = useState([]);
  const handleUserRemove = (index) => {
    const stateCopy = [...users];
    stateCopy.splice(index, 1);
    setUsers(stateCopy);
  };
  const handleUsersSort = () => {
    const stateCopy = [...users];
    const sortedUsers = stateCopy.sort((a, b) => b.age - a.age);
    setUsers(sortedUsers);
  };
  useEffect(() => {
    setUsers([
      { name: 'Alex', age: 27, phone: '+3752993847474', avatar: 'http://archilab.online/images/1/123.jpg' },
      { name: 'Bella', age: 23, phone: '+3752974756674', avatar: 'https://www.blast.hk/attachments/64805/' },
      { name: 'Vendetta', age: 27, phone: '+3752993847474', avatar: 'http://archilab.online/images/1/123.jpg' },
      { name: 'John', age: 23, phone: '+3752974756674', avatar: 'https://www.blast.hk/attachments/64805/' },
      { name: 'Tim', age: 27, phone: '+3752993847474', avatar: 'http://archilab.online/images/1/123.jpg' },
      { name: 'Alexa', age: 23, phone: '+3752974756674', avatar: 'https://www.blast.hk/attachments/64805/' },
    ]);
  }, []);
  return <UsersPage users={users} handleUserRemove={handleUserRemove} handleUsersSort={handleUsersSort} />
};