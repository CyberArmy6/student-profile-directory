import React, { useState } from 'react';
import Header from './Components/Header';
import ProfileList from './Components/ProfileList';
import Footer from './Components/Footer';
import './App.css';

function App() {


const [students, setStudents] = useState ([
    { 
      id: 1, 
      name: "Tiisu Sharif", 
      track: "Computer Science", 
      bio: "Passionate about AI and React development.", 
      skillLevel: "Intermediate", 
      isActive: true 
    },
    { 
      id: 2, 
      name: "Amina Mensah", 
      track: "Frontend Development", 
      bio: "Enjoys creating responsive user interfaces.", 
      skillLevel: "Beginner", 
      isActive: false 
    },
    { 
      id: 3, 
      name: "Hudu Madaniatu Nati", 
      track: "Lab Technician", 
      bio: "Focusing on Lab practicing.", 
      skillLevel: "Advanced", 
      isActive: true 
    },
    { 
      id: 4, 
      name: "Big Nash", 
      track: "UI/UX Design", 
      bio: "Turning complex problems into simple designs.", 
      skillLevel: "Intermediate", 
      isActive: true 
    },
    { 
      id: 5, 
      name: "Abdul Hafiz", 
      track: "Mobile App Development", 
      bio: "Building cross-platform apps with React Native.", 
      skillLevel: "Beginner", 
      isActive: false 
    },
    { 
      id: 6, 
      name: "Fatima Ali", 
      track: "Backend Development", 
      bio: "Working with APIs and Databases.", 
      skillLevel: "Intermediate", 
      isActive: false 
    },
    { 
      id: 7, 
      name: "Yajim Randy", 
      track: "Cybersecurity", 
      bio: "Learning to protect web applications from threats.", 
      skillLevel: "Intermediate", 
      isActive: true 
    }
  ]);

  // 2. Toggle Logic
  // This function finds a student by ID and flips their isActive status.
  const toggleActive = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id 
          ? { ...student, isActive: !student.isActive } 
          : student
      )
    );
  };

  return (
    <div className="App">
        <Header />
        <ProfileList students={students} toggleActive={toggleActive} />
        <Footer total={students.length} />
    </div>
  );
}

export default App;
