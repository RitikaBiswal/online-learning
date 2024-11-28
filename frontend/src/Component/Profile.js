import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import MenuStudent from './MenuStudent';
import styles from './Profile.module.css';
import MenuAdmin from '../Admin/Menuadmin'
import SIdebar from '../Admin/SIdebar';

const Profile = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/adminpage');
  const email = sessionStorage.getItem('email');

  const [loading, setLoading] = useState(false);
  const [records, setRecords] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let response;
        if (isAdmin) {
          response = await axios.get(`http://localhost:3001/admin/records?email=${email}`);
        } else {
          response = await axios.get(`http://localhost:3001/student/records?email=${email}`);
        }
        setRecords(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [email, isAdmin]);

  return (
    <>
      <div className={styles.super8}>
        {isAdmin ? <SIdebar /> : <MenuStudent />}
        <div>
          <h1 className={styles.profileHeading}>This is your profile</h1>
          {loading && <p className={styles.loading}>Loading...</p>}
          {error && <p className={styles.error}>Error: {error.message}</p>}
          {records.length > 0 && (
            <table className={styles.recordsTable}>
              <caption className={styles.Caption}>Records</caption>
              <thead>
                <tr>
                  <th className={styles.tableHeader}>ID</th>
                  <th className={styles.tableHeader}>Username</th>
                  <th className={styles.tableHeader}>Email</th>
                  <th className={styles.tableHeader}>Mobile No</th>
                  <th className={styles.tableHeader}>Address</th>
                </tr>
              </thead>
              <tbody>
                {records.map((record) => (
                  <tr key={record.id} className={styles.tableRow}>
                    <td className={styles.tableCell}>{record.id}</td>
                    <td className={styles.tableCell}>{record.username}</td>
                    <td className={styles.tableCell}>{record.email}</td>
                    <td className={styles.tableCell}>{record.mobileno}</td>
                    <td className={styles.tableCell}>{record.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
