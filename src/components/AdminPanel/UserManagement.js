import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import "./User.css"

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const createUser = async (e) => {
    e.preventDefault();
    // Check if username is empty
    if (!username.trim()) {
      toast.error('Username cannot be empty.');
      return;
    }

    try {
      // Fetch existing users
      const response = await axios.get('http://localhost:5001/api/users');
      const existingUsers = response.data;

      // Check if username is already taken
      const isUsernameTaken = existingUsers.some(user => user.username === username);

      if (isUsernameTaken) {
        toast.error('Username is already taken. Please choose a different username.');
        return;
      }

      // Proceed with creating the user if username is available
      const createUserResponse = await axios.post('http://localhost:5001/api/users', {
        username,
        email,
        password,
      });

      console.log('User created:', createUserResponse.data);
      toast.success('User created successfully!');
      setUsername('');
      setEmail('');
      setPassword('');

      // Fetch updated list of users after creating a new user
      fetchUsers();
    } catch (error) {
      console.error('Error creating user:', error);
      if (error.response) {
        console.log(error.response.data); // Log server response data if available
      }
      toast.error('Failed to create user.');
    }
  };

  const deleteUser = async (userId) => {
    try {
      const response = await axios.delete(`http://localhost:5001/api/users/${userId}`);

      console.log('User deleted:', response.data);
      toast.success('User deleted successfully!');
      fetchUsers(); // Refresh the user list after deletion
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error('Failed to delete user.');
    }
  };

  return (
<div className="user-management">
      <ToastContainer />
      <div className="container">
        <div className="row">
          {/* Create User Form */}
          <div className="col-lg-6">
            <div className="create-user">
              <form className="register-form" onSubmit={createUser}>
                <p className="register-title">Register</p>
                <p className="register-message">Signup now and get full access to our app.</p>
                <label>
                  <input
                    className="register-input"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                  />
                </label>
                <label>
                  <input
                    className="register-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                  />
                </label>
                <label>
                  <input
                    className="register-input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />
                </label>
                <button className="register-signin button-add" type="submit">Create User</button>
              </form>
            </div>
          </div>
          {/* List of Users */}
          <div className="col-lg-6">
            <div className="user-list">
              <h3>Users</h3>
              <ul>
                {users.map((user) => (
                  <li key={user.id}>
                    <div>
                      <span>{user.username}</span> - <span>{user.email}</span>
                    </div>
                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>  );
};

export default UserManagement;
