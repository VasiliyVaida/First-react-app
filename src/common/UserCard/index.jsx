import './styles.scss';

export const UserCard = (props) => {
  return (
    <div className="card-wrapper" onClick={props.onCardClick}>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  )
};