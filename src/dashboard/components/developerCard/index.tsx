import type { UserCard } from "../../interfaces/usersCardInterface";

const DeveloperCard = (developer: UserCard) => {
  const { name, avatar, role, tasks } = developer;
  return (
    <div className="developer-card">
        <img src={avatar} alt={name} />
        <h3>{name}</h3>
        <p>{role}</p>
        <p>{tasks}</p>
    </div>
  )
};

export default DeveloperCard;