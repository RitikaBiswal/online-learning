// MyCourses.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuStudent from './MenuStudent';
import style from './MyCourses.module.css';
import { useNavigate } from 'react-router-dom';

const MyCourses = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const email = sessionStorage.getItem('email');
    const fetchStudentCourses = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/student/courses/${email}`);
        setCourses(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchStudentCourses();
  }, []);

  const viewCourseDetails = (courseName) => {
    navigate(`/student/coursedetails/${courseName}`); // Pass course name as route parameter
  };

  return (
    <>
      <MenuStudent />
      <div className={style.cntnr}>
        <h2 className={style.head}>My Courses</h2>
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.course_name}</td>
                <td>
                  <button onClick={() => viewCourseDetails(course.course_name)}>View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {error && <p>Error: {error}</p>}
      </div>
    </>
  );
};

export default MyCourses;
