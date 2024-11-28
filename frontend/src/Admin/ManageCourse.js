import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './ManageCourse.module.css';
import Menuadmin from './Menuadmin';
import SIdebar from './SIdebar';

const ManageCourse = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:3001/admin/allCourses');
        setCourses(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3001/admin/deleteCourse/${id}`);
      alert(response.data);
      setCourses(courses.filter(course => course.id !== id));
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  return (
    <>
      <div className={styles.super5}>
        <SIdebar />
        {/* <h1>manage</h1> */}
        {/* <div className={styles.container}> */}
        {/* <h1 className={styles.heading}>Manage Courses</h1> */}
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {courses.length > 0 && (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Course Name</th>
                <th>Course Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map(course => (
                <tr key={course.id}>
                  <td>{course.id}</td>
                  <td>{course.course_name}</td>
                  <td>{course.course_description}</td>
                  <td>
                    <button className={styles.deleteButton} onClick={() => handleDelete(course.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {/* </div> */}
    </>
  );
};

export default ManageCourse;
