import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './ManageAssignedCourses.module.css';
import Menuadmin from './Menuadmin';
import SIdebar from './SIdebar';

const ManageAssignedCourses = () => {
  // State variables
  const [assignedCourses, setAssignedCourses] = useState([]);
  const [error, setError] = useState(null);

  // Fetch assigned courses from backend
  useEffect(() => {
    const fetchAssignedCourses = async () => {
      try {
        const response = await axios.get('http://localhost:3001/admin/assignedCourses');
        setAssignedCourses(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchAssignedCourses();
  }, []);

  // Function to handle deletion of assigned course
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/admin/deleteAssignedCourse/${id}`);
      // After successful deletion, update the list of assigned courses
      const updatedCourses = assignedCourses.filter(course => course.id !== id);
      setAssignedCourses(updatedCourses);
      alert('course reverted successfully')
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className={styles.super6}>
        {/* <Menuadmin /> */}
        <SIdebar />
        {/* <div className={styles.container}>
          <h2>Manage Assigned Courses</h2> */}
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Student Email</th>
              <th>Course Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {assignedCourses.map(course => (
              <tr key={course.id}>
                <td>{course.student_email}</td>
                <td>{course.course_name}</td>
                <td>
                  <button onClick={() => handleDelete(course.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>
      {/* </div> */}
    </>
  );
};

export default ManageAssignedCourses;
