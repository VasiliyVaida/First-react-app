import { Link } from "react-router-dom";
import { UserCard } from "../../common/UserCard";
import { ROUTES } from "../../routes/routesNames";
import './styles.scss';

export const ListsPage = (props) => {
  return (
    <div className="lists-page">
      <h1>Lists Page</h1>
      <Link to={ROUTES.HOME_PAGE}>
        <button className="return-btn">Get back</button>
      </Link>
      <div>
        {props.users.map((user, index) => (
          <UserCard
            key={user.name}
            name={user.name}
            age={user.age} 
            onCardClick={() => props.onCardClick(index)}
          />
        ))}
      </div>
    </div>
  )
}