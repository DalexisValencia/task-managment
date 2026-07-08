import type { UserCard } from "../../interfaces/usersCard";

const DeveloperCard = (developer: UserCard) => {
  return (
    <div className="developer-card">
        <img src={developer.avatar} alt={developer.name} />
        <h3>{developer.name}</h3>
        <p>{developer.role}</p>
        <p>{developer.tasks}</p>
    </div>
  )
};

export default DeveloperCard;