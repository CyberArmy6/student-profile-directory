import ProfileCard from './ProfileCard';

function ProfileList ({ students, toggleActive}) {
    return (
        <div className='Profile-List'>
            {students.map((student) => (
                <ProfileCard 
                key={student.id}
                student={student}
                toggleActive={toggleActive} 
                />
            ))}

        </div>
    );
};

export default ProfileList;