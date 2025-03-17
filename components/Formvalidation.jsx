import React, { useState } from 'react';

function FormValidation() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = 'Name is required';
    else if (name.length < 3) newErrors.name = 'Name must be at least 3 characters';

    if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', { name, password });
      setSuccessMessage('Form submitted successfully!');
      setName('');
      setPassword('');
      setErrors({});
    } else {
      setSuccessMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px', maxWidth: '400px' }}>
      <div style={{ marginBottom: '10px' }}>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => { setName(e.target.value); validate(); }}
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => { setPassword(e.target.value); validate(); }}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>

      <button type="submit" disabled={!name || password.length < 6}>Submit</button>

      {successMessage && <p style={{ color: 'green', marginTop: '10px' }}>{successMessage}</p>}
    </form>
  );
}

export default FormValidation;
