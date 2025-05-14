import React, {useState} from 'react';
import axios from 'axios';

const SignUp = () => {

    const [form, setForm] = useState({ name: "", email: '', password: '', role: 'student' });
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4000/api/user/signup', form);
        alert('Successfully Registered');
    };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button type="submit">Register</button>
    </form>
  )
}

export default SignUp