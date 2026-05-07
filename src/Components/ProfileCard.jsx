function ProfileCard({ student, toggleActive}) {
    const { id, name, track, bio, skillLevel, isActive } = student;
    return (
        <div className={`card ${isActive ? "active" : "inactive"}`}>
            <h2>{name}</h2>
            <p><strong>Area of Study:</strong> {track}</p>
            <p> <strong>Bio:</strong> {bio}</p>
            <p><strong>Skill Level:</strong> {skillLevel}</p>

            <div className="status-badge">
                {isActive ? "Active" : "Inactive"}
            </div>

            <button onClick={() => toggleActive(id)}>
                    {isActive ? "Deactivate" : "Active"}
            </button>
        </div>
    );
};

export default ProfileCard;