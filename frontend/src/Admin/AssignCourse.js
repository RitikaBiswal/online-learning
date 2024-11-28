import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './AssignCourse.module.css';
import Menuadmin from './Menuadmin';
import SIdebar from './SIdebar';

const AssignCourse = () => {
  // State variables
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedStudent, setSelectedStudent] = useState('');
  const [assignmentSuccess, setAssignmentSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');

  // Fetch courses and students from backend
  useEffect(() => {
    const fetchCoursesAndStudents = async () => {
      try {
        const coursesResponse = await axios.get('http://localhost:3001/admin/allCourses');
        const studentsResponse = await axios.get('http://localhost:3001/admin/allStudents');
        setCourses(coursesResponse.data);
        setStudents(studentsResponse.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchCoursesAndStudents();
  }, []);

  // Function to handle form submission
  const handleAssignCourse = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/admin/assignCourse', {
        courseId: selectedCourse,
        studentId: selectedStudent
      });
      setAssignmentSuccess(true);
      setSelectedCourse('');
      setSelectedStudent('');
      setAlertMessage('Course assigned successfully!');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className={styles.super3}>
        <SIdebar />
        {/* <div className={styles.container}> */}
          {/* <h2>Assign Course to Student</h2> */}
          <form className={styles.form} onSubmit={handleAssignCourse}>
            <div className={styles.inputGroup}>
              <label htmlFor="courseSelect">Select Course:</label>
              <select id="courseSelect" value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
                <option value="">Select Course</option>
                {courses.map(course => (
                  <option className={styles.opt} key={course.id} value={course.course_name}>{course.course_name}</option>
                ))}
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="studentSelect">Select Student:</label>
              <select id="studentSelect" value={selectedStudent} onChange={(e) => setSelectedStudent(e.target.value)}>
                <option value="">Select Student</option>
                {students.map(student => (
                  <option className={styles.opt} key={student.id} value={student.email}>{student.email}</option>
                ))}
              </select>
            </div>
            <button type="submit">Assign Course</button>
          </form>
          {assignmentSuccess && <p className={styles.successMessage}>{alertMessage}</p>}
          {error && <p className={styles.errorMessage}>{error}</p>}
        </div>
      {/* </div> */}
    </>
  );
};

export default AssignCourse;
