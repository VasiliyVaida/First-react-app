import { UserCard } from '../../common/UserCard';

export const UsersPage = (props) => {
  return (
    <div className="users-page">
      <button onClick={props.handleUsersSort}>Sort</button>
      {props.users.map((item, index) => (
        <UserCard key={item.name} avatar={item.avatar} name={item.name} age={item.age} phone={item.phone} onCardClick={() => props.handleUserActive(item, index)} />
      ))}
    </div>
  );
};
