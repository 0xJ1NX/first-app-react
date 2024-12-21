import { useState } from 'react';
import './App.css'
import Student from './components/student/student.component';
import { IStudent } from './types';


const COURSES_LIST = ['React', 'HTML', 'CSS'];


const INITIAL_STUDENTS_DATA: Array<IStudent> = [
  { id:"1201001", name: "Ahmad Saeed", age: 18, isGraduated: false, coursesList: COURSES_LIST },
  { id:"1201002", name: "Sami Fadi", age: 20, isGraduated: true, coursesList: COURSES_LIST },
  { id:"1201003", name: "Sara Ali", age: 22, isGraduated: false, coursesList: COURSES_LIST },
  { id:"1201004", name: "Samer Mohammad", age: 23, isGraduated: true, coursesList: COURSES_LIST },
  { id:"1201005", name: "Karam Naser", age: 21, isGraduated: false, coursesList: COURSES_LIST },
]


function App() {


  const [studentList , setStudentList] = useState<Array<IStudent>>(INITIAL_STUDENTS_DATA);


  return (
    <>
      <h1 style={{ color: '#a3ff55' }}>Welcome to GSG React/Next Course</h1>

      {studentList.map((std) => (
        <Student 
          key={std.id}
          id={std.id}
          name={std.name} 
          age={std.age} 
          isGraduated={std.isGraduated} 
          coursesList={std.coursesList} 
        />
      ))}

    </>
  )
}

export default App
