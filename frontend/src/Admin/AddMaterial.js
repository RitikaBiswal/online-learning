import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './AddMaterial.module.css';
import Menuadmin from './Menuadmin';
import SIdebar from './SIdebar';

const AddMaterial = () => {
  // State variables
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [chapter, setChapter] = useState('');
  const [file, setFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [error, setError] = useState(null);

  // Fetch courses from backend
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:3001/admin/allCourses');
        setCourses(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchCourses();
  }, []);

  // Function to handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('courseName', selectedCourse);
    formData.append('chapter', chapter);
    formData.append('file', file);
    try {
      await axios.post('http://localhost:3001/admin/uploadMaterial', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setUploadSuccess(true);
      setSelectedCourse('');
      setChapter('');
      setFile(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (<>
    <div className={styles.super4}>
      <SIdebar />
      {/* <div className={styles.container}> */}
        {/* <h2>Add Material</h2> */}
        <form className={styles.frm} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="course">Select Course:</label>
            <select id="course" value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
              <option className={styles.opt} value="">Select Course</option>
              {courses.map(course => (
                <option className={styles.opt} key={course.id} value={course.course_name}>{course.course_name}</option>
              ))}
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="chapter">Chapter:</label>
            <input type="text" id="chapter" value={chapter} onChange={(e) => setChapter(e.target.value)} required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="file">Upload Material:</label>
            <input type="file" id="file" onChange={handleFileChange} required />
          </div>
          <button type="submit">Upload Material</button>
        </form>
        {uploadSuccess && <p className={styles.successMessage}>Material uploaded successfully!</p>}
        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>
    {/* </div> */}
  </>
  );
};

export default AddMaterial;
