import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Managestudent.module.css';
import Menuadmin from './Menuadmin';
import SIdebar from './SIdebar';

const ManageStudent = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editId, setEditId] = useState(null);
  const [editUsername, setEditUsername] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editMobileNo, setEditMobileNo] = useState('');
  const [editAddress, setEditAddress] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:3001/admin/allStudents');
        setStudents(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/admin/deleteStudent/${id}`);
      // Remove the deleted student from the state
      setStudents(students.filter(student => student.id !== id));
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  const handleEdit = (id, username, email, mobileNo, address) => {
    setEditId(id);
    setEditUsername(username);
    setEditEmail(email);
    setEditMobileNo(mobileNo);
    setEditAddress(address);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      console.log(editId);
      await axios.put(`http://localhost:3001/admin/updateStudent/${editId}`, {
        username: editUsername,
        email: editEmail,
        mobileno: editMobileNo,
        address: editAddress
      });
      setStudents(students.map(student => {
        if (student.id === editId) {
          return {
            ...student,
            username: editUsername,
            email: editEmail,
            mobileno: editMobileNo,
            address: editAddress
          };
        }
        return student;
      }));
      setEditId(null);
      setEditUsername('');
      setEditEmail('');
      setEditMobileNo('');
      setEditAddress('');
      window.alert('Student information updated successfully');
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  return (
    <>
      <div className={styles.super}>
        <SIdebar />
        <div className={styles.container}>
          <h1 className={styles.heading}>Manage Students</h1>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
          {students.length > 0 && (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Mobile No</th>
                  <th>Address</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map(student => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.username}</td>
                    <td>{student.email}</td>
                    <td>{student.mobileno}</td>
                    <td>{student.address}</td>
                    <td>
                      <button className={styles.editButton} onClick={() => handleEdit(student.id, student.username, student.email, student.mobileno, student.address)}>Edit</button>
                      <button className={styles.deleteButton} onClick={() => handleDelete(student.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {editId && (
            <div className={styles.editForm}>
              <h2>Edit Student</h2>
              <form onSubmit={handleUpdate}>
                <input type="text" value={editUsername} onChange={e => setEditUsername(e.target.value)} />
                <input type="email" value={editEmail} onChange={e => setEditEmail(e.target.value)} />
                <input type="text" value={editMobileNo} onChange={e => setEditMobileNo(e.target.value)} />
                <input type="text" value={editAddress} onChange={e => setEditAddress(e.target.value)} />
                <button type="submit">Update</button>
                <button type="button" onClick={() => setEditId(null)}>Cancel</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ManageStudent;
