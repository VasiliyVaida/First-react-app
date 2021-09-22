import { UserCard } from "../../common/UserCard";

export const UsersPage = (props) => {
  return (
    <div className="users-page">
      {props.users.map((item, index) => (
        <UserCard
          key={item.name}
          avatar={item.avatar}
          name={item.name}
          age={item.age}
          phone={item.phone}
          onCardClick={() => props.handleUserRemove(index)}
        />
      ))}
    </div>
  )
};