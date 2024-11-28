// CourseDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuStudent from './MenuStudent';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const [chapters, setChapters] = useState([]);
  const [error, setError] = useState(null);
  const { courseName } = useParams(); // Get course name from route parameters

  useEffect(() => {
    const fetchChaptersForCourse = async (courseName) => {
      try {
        const response = await axios.get(`http://localhost:3001/student/chapters/${courseName}`);
        setChapters(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    if (courseName) {
      fetchChaptersForCourse(courseName);
    }
  }, [courseName]); // Fetch chapters when courseName changes

  const downloadMaterial = async (chapter) => {
    try {
      const response = await axios.get(`http://localhost:3001/student/material/${courseName}/${chapter}`);
      const filePath = response.data.file_path;
      const filename = filePath.replace('Materials\\', '');
      const url = `http://localhost:3001/download/${filename}`;
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading material:', error);
    }
  };

  return (
    <>
      <MenuStudent />
      <div>
        <h2>Course Details</h2>
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Chapter Name</th>
              <th>Download Material</th>
            </tr>
          </thead>
          <tbody>
            {chapters.map((chapter) => (
              <tr key={chapter.id}>
                <td>{courseName}</td> {/* Display course name */}
                <td>{chapter.chapter}</td>
                <td>
                  <button onClick={() => downloadMaterial(chapter.chapter)}>Download</button>
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

export default CourseDetails;
