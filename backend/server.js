const express = require('express');
const mysql = require('mysql2');
const cors = require('cors')
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const router = express.Router();
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ritika@9808',
  database: 'keepdata'
});
connection.connect((err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("connected")
    }
})


// Set up multer storage for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Define the destination folder for uploaded files
    cb(null, './Materials');
  },
  filename: (req, file, cb) => {
    // Define the filename for uploaded files
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// Create multer instance
const upload = multer({ storage });

app.use('/download', express.static(path.join(__dirname, 'Materials')));

app.post('/register/student', (req, res) => {
  const { username, password, email, mobileno, address } = req.body;
  const sql = "INSERT INTO students (username, password, email, mobileno, address) VALUES (?, ?, ?, ?, ?)";
  if (!username || !password || !email || !mobileno || !address) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  connection.query(sql, [username, password, email, mobileno, address], (error, results) => {
      if (error) {
          console.error('Error registering student:', error);
          return res.status(500).send(error);
      }
      console.log('Student registered successfully');
      res.send("Student registration successful");
  });
});

app.post('/login/student', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM students WHERE email = ? AND password = ?';
console.log(email,password);
  connection.query(sql, [email, password], (error, results) => {
    if (error) {
      console.error('Error logging in student:', error);
      return res.status(500).send(error);
    }
    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    console.log('Student logged in successfully');
    res.send("success");
  });
});

app.post('/changepassword/student', (req, res) => {
  console.log("changing");
  const { email, crr_pass, new_pass } = req.body;
  const checkUserSql = 'SELECT * FROM students WHERE email = ? AND password = ?';
  const updatePasswordSql = 'UPDATE students SET password = ? WHERE email = ?';
  console.log(email,crr_pass,new_pass);
  connection.query(checkUserSql, [email, crr_pass], (error, results) => {
    if (error) {
      console.error('Error checking student:', error);
      return res.status(500).send('Error changing password');
    }
    console.log("ch-"+email,crr_pass,new_pass);
    if (results.length === 0) {
      console.log(results.length);
      return res.status(401).send('Invalid current password');
    }
    connection.query(updatePasswordSql, [new_pass, email], (error, result) => {
      if (error) {
        console.error('Error updating student password:', error);
        return res.status(500).send('Error changing password');
      }
      res.send('success');
    });
  });
});

app.get('/student/records', (req, res) => {
  const { email } = req.query;
  const sql = 'SELECT * FROM students WHERE email = ?';
  connection.query(sql, [email], (error, results) => {
    if (error) {
      console.error('Error fetching student records:', error);
      return res.status(500).send(error);
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'No records found for this email' });
    }
    res.json(results);
  });
});

app.get('/admin/allStudents', (req, res) => {
  const sql = 'SELECT * FROM students';
  connection.query(sql, (error, results) => {
    if (error) {
      console.error('Error fetching all students:', error);
      return res.status(500).send(error);
    }
    res.json(results);
  });
});

app.get('/student/courses/:email', (req, res) => {
  const studentEmail = req.params.email;
  const sql = `
    SELECT courses.course_name 
    FROM student_courses 
    INNER JOIN courses ON student_courses.course_name = courses.course_name 
    WHERE student_courses.student_email = ?;
  `;
  connection.query(sql, [studentEmail], (error, results) => {
    if (error) {
      console.error('Error fetching student courses:', error);
      return res.status(500).send('Failed to fetch student courses');
    }
    // console.log(results);
    res.json(results);
  });
});

app.get('/student/chapters/:course_name', (req, res) => {
  const course_name = req.params.course_name;
  const sql = `
    SELECT chapter FROM materials
    WHERE course_name = '${course_name}'
  `;
  connection.query(sql, (error, results) => {
    if (error) {
      console.error('Error fetching chapters:', error);
      return res.status(500).send('Failed to fetch chapters');
    }
    // console.log(results);
    res.json(results);
  });
});

app.get('/student/material/:course_name/:chapter', (req, res) => {
  const { course_name, chapter } = req.params;
  console.log('hii');
  console.log(course_name,chapter);
  const sql = `SELECT file_path FROM materials WHERE course_name = '${course_name}' AND chapter = '${chapter}'`;
  connection.query(sql, (error, results) => {
    if (error) {
      console.error('Error fetching material file path:', error);
      return res.status(500).json({ error: 'Failed to fetch material file path' });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Material not found' });
    }
    const filePath = results[0].file_path;
    console.log(filePath);
    res.json({ file_path: filePath });
  });
});


app.delete('/admin/deleteStudent/:id', (req, res) => {
  const studentId = req.params.id;
  const sql = 'DELETE FROM students WHERE id = ?';
  connection.query(sql, [studentId], (error, results) => {
    if (error) {
      console.error('Error deleting student:', error);
      return res.status(500).send(error);
    }
    res.send('Student deleted successfully');
  });
});

app.put('/admin/updateStudent/:id', (req, res) => {
  const studentId = req.params.id;
  const { username, email, mobileno, address } = req.body;
  if (!username || !email || !mobileno || !address) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  // console.log(studentId);
  const sql = 'UPDATE students SET username = ?, email = ?, mobileno = ?, address = ? WHERE id = ?';
  connection.query(sql, [username, email, mobileno, address, studentId], (error, results) => {
    if (error) {
      console.error('Error updating student:', error);
      return res.status(500).send(error);
    }
    res.send('Student information updated successfully');
  });
});

app.post('/register/admin', (req, res) => {
  const { username, password, email, mobileno, address } = req.body;
  const sql = "INSERT INTO administrators (username, password, email, mobileno, address) VALUES (?, ?, ?, ?, ?)";
  if (!username || !password || !email || !mobileno || !address) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  connection.query(sql, [username, password, email, mobileno, address], (error, results) => {
      if (error) {
          console.error('Error registering admin:', error);
          return res.status(500).send(error);
      }
      console.log('Admin registered successfully');
      res.send("Admin registration successful");
  });
});

app.post('/login/admin', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM administrators WHERE email = ? AND password = ?';

  connection.query(sql, [email, password], (error, results) => {
    if (error) {
      console.error('Error logging in admin:', error);
      return res.status(500).send(error);
    }
    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    console.log('Admin logged in successfully');
    res.send("success");
  });
});

app.post('/changepassword/admin', (req, res) => {
  const { email, crr_pass, new_pass } = req.body;
  const checkUserSql = 'SELECT * FROM administrators WHERE email = ? AND password = ?';
  const updatePasswordSql = 'UPDATE administrators SET password = ? WHERE email = ?';

  connection.query(checkUserSql, [email, crr_pass], (error, results) => {
    if (error) {
      console.error('Error checking admin:', error);
      return res.status(500).send('Error changing password');
    }
    if (results.length === 0) {
      return res.status(401).send('Invalid current password');
    }
    connection.query(updatePasswordSql, [new_pass, email], (error, result) => {
      if (error) {
        console.error('Error updating admin password:', error);
        return res.status(500).send('Error changing password');
      }
      res.send('Password updated successfully');
    });
  });
});

app.get('/admin/records', (req, res) => {
  const { email } = req.query;
  const sql = 'SELECT * FROM administrators WHERE email = ?';
  connection.query(sql, [email], (error, results) => {
    if (error) {
      console.error('Error fetching admin records:', error);
      return res.status(500).send(error);
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'No records found for this email' });
    }
    res.json(results);
  });
});

app.post('/admin/addCourse', (req, res) => {
  const { courseName, courseDescription } = req.body;
  const sql = "INSERT INTO courses (course_name, course_description) VALUES (?, ?)";
  if (!courseName || !courseDescription) {
    return res.status(400).json({ error: 'Course name and description are required' });
  }
  connection.query(sql, [courseName, courseDescription], (error, results) => {
    if (error) {
      console.error('Error adding course:', error);
      return res.status(500).send('Failed to add course');
    }
    console.log('Course added successfully');
    res.send("success");
  });
});

app.get('/admin/allCourses', (req, res) => {
  const sql = 'SELECT * FROM courses';
  connection.query(sql, (error, results) => {
    if (error) {
      console.error('Error fetching all courses:', error);
      return res.status(500).send(error);
    }
    res.json(results);
  });
});
app.delete('/admin/deleteCourse/:id', (req, res) => {
  const courseId = req.params.id;
  const sql = 'DELETE FROM courses WHERE id = ?';
  connection.query(sql, [courseId], (error, results) => {
    if (error) {
      console.error('Error deleting course:', error);
      return res.status(500).send(error);
    }
    res.send('Course deleted successfully');
  });
});

app.post('/admin/assignCourse', (req, res) => {
  const { courseId, studentId } = req.body;
  const sql = "INSERT INTO student_courses (student_email, course_name) VALUES (?, ?)";
  console.log(courseId,studentId);
  if (!courseId || !studentId) {
    return res.status(400).json({ error: 'Both course ID and student ID are required' });
  }

  connection.query(sql, [studentId, courseId], (error, results) => {
    if (error) {
      console.error('Error assigning course to student:', error);
      return res.status(500).send('Failed to assign course');
    }
    console.log('Course assigned to student successfully');
    res.send("success");
  });
});

app.get('/admin/assignedCourses', (req, res) => {
  const sql = 'SELECT * FROM student_courses';
  connection.query(sql, (error, results) => {
    if (error) {
      console.error('Error fetching all courses:', error);
      return res.status(500).send(error);
    }
    res.json(results);
  });
});

app.delete('/admin/deleteAssignedCourse/:id', async (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM student_courses WHERE id = ?';
    connection.query(sql,[id],(error , results)=>{
      if (error) {
        return res.status(500).send(error);
      }
      res.json(results);
    })
});

app.post('/admin/uploadMaterial', upload.single('file'), (req, res) => {
  const { courseName, chapter } = req.body;
  const filePath = req.file.path;

  // Insert material details into the database
  const sql = 'INSERT INTO materials (course_name, chapter, file_path) VALUES (?, ?, ?)';
  connection.query(sql, [courseName, chapter, filePath], (error, results) => {
    if (error) {
      console.error('Error inserting material details:', error);
      return res.status(500).json({ error: 'Failed to upload material' });
    }
    console.log('Material uploaded successfully');
    res.json({ success: true });
  });
});

app.get('/admin/allMaterials', (req, res) => {
  const sql = 'SELECT * FROM materials';
  connection.query(sql, (error, results) => {
    if (error) {
      console.error('Error fetching all materials:', error);
      return res.status(500).send(error);
    }
    res.json(results);
  });
});

app.delete('/admin/deleteMaterial/:id', (req, res) => {
  const materialId = req.params.id;
  const getFilePathQuery = 'SELECT file_path FROM materials WHERE id = ?';
  const deleteMaterialQuery = 'DELETE FROM materials WHERE id = ?';
  connection.query(getFilePathQuery, [materialId], (error, results) => {
    if (error) {
      console.error('Error retrieving file path:', error);
      return res.status(500).send(error);
    }
    if (results.length === 0) {
      return res.status(404).send('Material not found');
    }
    // console.log(results);
    const filePath = results[0].file_path;
    connection.query(deleteMaterialQuery, [materialId], (error, deleteResult) => {
      if (error) {
        console.error('Error deleting material:', error);
        return res.status(500).send(error);
      }
      fs.unlink(filePath, (error) => {
        if (error) {
          console.error('Error deleting file:', error);
          return res.status(500).send(error);
        }
        // console.log('Material and associated file deleted successfully');
        res.send('Material and associated file deleted successfully');
      });
    });
  });
});

module.exports = router;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
