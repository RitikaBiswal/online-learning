

import React, { useState } from 'react';
import axios from 'axios';
import styles from './AddCourse.module.css';
import Menuadmin from './Menuadmin';
import SIdebar from './SIdebar';

const AddCourse = () => {
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/admin/addCourse', {
        courseName,
        courseDescription
      });
      if (response.data === 'success') {
        setMessage('Course added successfully');
      } else {
        setMessage('Failed to add course');
      }
    } catch (error) {
      console.error('Error adding course:', error);
      setMessage('Failed to add course');
    }
  };

  return (
    <>
      {/* <Menuadmin/> */}
      <div className={styles.super1}>
        <SIdebar />
        {/* <div className={styles.container}> */}
        {/* <h2 className={styles.h}>Add Course</h2> */}
        <form onSubmit={handleSubmit} className={styles.form1}>
          <label htmlFor="courseName">Course Name</label>
          <input
            type="text"
            id="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
          <label htmlFor="courseDescription">Course Description</label>
          <textarea className={styles.txtarea}
            id="courseDescription"
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            required rows={1}
          ></textarea>
          <button type="submit">Add Course</button>
        </form>
        {message && <p className={styles.message}>{message}</p>}
      </div>
      {/* </div> */}
    </>
  );
};

export default AddCourse;
