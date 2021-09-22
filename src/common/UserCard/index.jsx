import './styles.scss';

export const UserCard = (props) => {
  return (
    <div className={`card-wrapper ${props.active ? 'is-active' : ''}`} onClick={props.onCardClick}>
      {props.avatar && <p><img src={props.avatar} alt="" /></p>}
      {props.name && <p>Name: {props.name}</p>}
      {props.age && <p>Age: {props.age}</p>}
      {props.phone && <p>Phone: {props.phone}</p>}
    </div>
  );
};