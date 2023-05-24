import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [ref, setRef] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const firstNameParam = params.get('firstname');
    const lastNameParam = params.get('lastname');
    const phoneNumberParam = params.get('phonenumber');
    const emailParam = params.get('email');
    const refParam = params.get('ref');

    if(firstNameParam) {
      setFirstName(firstNameParam);
    }

    if(lastNameParam) {
      setLastName(lastNameParam);
    }

    if(phoneNumberParam) {
      setPhoneNumber(phoneNumberParam);
    }

    if (emailParam) {
      setEmail(emailParam);
    }

    if (refParam) {
      setRef(refParam);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { firstName, lastName, phoneNumber, email, ref });
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div className='input-box'>
          <p>First Name</p>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
        </div>
        <div className='input-box'>
          <p>Last Name</p>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
        </div>
        <div className='input-box'>
          <p>Phone Number</p>
          <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required/>
        </div>
        <div className='input-box'>
          <p>Email</p>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div className='input-box'>
          <p>Ref</p>
          <input type="text" value={ref} onChange={(e) => setRef(e.target.value)} required/>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default App;
