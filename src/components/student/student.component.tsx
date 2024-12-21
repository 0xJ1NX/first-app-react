import CoursesList from '../courses-list/courses-list.component';
import './student.css';
import { IStudent } from '../../types';
import { useState } from 'react';

interface IProps extends IStudent {

}



const Student = (props: IProps) => {


  const [absents, setAbsents] = useState(0);

  function addAbsent() {
    setAbsents(absents + 1);
  }

  function removeAbsent() {
    if (absents> 0)
      setAbsents(absents - 1);
  }

  function resetAbsent() {
    setAbsents(0);
  }


  // console.log(props);
  return (
    <div className='std-wrapper'>
      <div>
        <b>Student:</b> {props.name.toUpperCase() + '!'}
      </div>
      <div>
        <b>Age:</b> {props.age}
      </div>
      <div>
        <b>Is Graduated:</b> {props.isGraduated ? 'Yes' : 'No'}
      </div>
      <div>
        <b>Absents</b> {absents}
        <button onClick={addAbsent}>Add Absent</button>
        <button onClick={removeAbsent}>Remove Absent</button>
        <button onClick={resetAbsent}>Reset Absents</button>

      </div>

      <CoursesList list={props.coursesList} />
    </div>
  )
}

export default Student;