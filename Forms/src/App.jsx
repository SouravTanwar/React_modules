import React, { useState } from 'react';
import './App.css'

function App() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    gender: "",
    subjects: [],
    resume: null,
    url: "",
    about: ""
  });


  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setData((prevData) => ({
        ...prevData,
        subjects: checked
          ? [...prevData.subjects, value]
          : prevData.subjects.filter((subject) => subject !== value)
      }));
    } else if (type === "radio") {
      setData({ ...data, [name]: value });
    } else if (type === "file") {
      setData({ ...data, [name]: files[0] });
      console.log(files)
      console.log("<<<<<>>>>>>")
      console.log(files[0])
      console.log(data.resume)
    } else {
      setData({ ...data, [name]: value });
    }
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    if (!data.firstname.trim()) errors.firstname = "First Name is required";
    if (!data.lastname.trim()) errors.lastname = "Last Name is required";
    if (!data.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(data.email)) errors.email = "Email is invalid";
    if (!data.contact.trim()) errors.contact = "Contact is required";
    else if (!/^\d{10}$/.test(data.contact)) errors.contact = "Contact number is invalid";
    if (!data.gender) errors.gender = "Gender is required";
    if (!data.resume) errors.resume = "Resume is required";
    if (!data.url.trim()) errors.url = "URL is required";
    else if (!/^https?:\/\/\S+$/.test(data.url)) errors.url = "URL is invalid";

    setErrors(errors);

    if (Object.keys(errors).length > 0) return;

    alert("Form Submitted Successfully");
    localStorage.setItem("user", JSON.stringify(data));
    setData({
      firstname: "",
      lastname: "",
      email: "",
      contact: "",
      gender: "",
      subjects: [],
      resume: null,
      url: "",
      about: ""
    });
    document.getElementById('fileInput').value = '';
  };

  const resetForm = () => {
    setData({
      firstname: "",
      lastname: "",
      email: "",
      contact: "",
      gender: "",
      subjects: [],
      resume: null,
      url: "",
      about: ""
    });
    document.getElementById('fileInput').value = '';
    setErrors({});
  };

  return (
    <div className='container'> 
      <form
        className='form'
        onSubmit={handleSubmit}
      >
        <label>First Name*</label>
        <input
          className='input-field'
          type='text'
          name='firstname'
          placeholder='Enter First Name'
          value={data.firstname}
          onChange={handleInput}
        />
        <span>{errors.firstname}</span>

        <label>Last Name*</label>
        <input
          className='input-field'
          type='text'
          name='lastname'
          placeholder='Enter Last Name'
          value={data.lastname}
          onChange={handleInput}
        />
        <span >{errors.lastname}</span>

        <label>Email*</label>
        <input
          className='input-field'
          type='email'
          name='email'
          placeholder='Enter email'
          value={data.email}
          onChange={handleInput}
        />
        <span >{errors.email}</span>

        <label>Contact*</label>
        <input
          className='input-field'
          type='tel'
          name='contact'
          placeholder='Enter Mobile number'
          value={data.contact}
          onChange={handleInput}
        />
        <span >{errors.contact}</span>

        <label>Gender*</label>
        <div className='Gender'>
          <input
            type='radio'
            name='gender'
            value='Male'
            checked={data.gender === 'Male'}
            onChange={handleInput}
          />
          <label>Male</label>
          <input
            type='radio'
            name='gender'
            value='Female'
            checked={data.gender === 'Female'}
            onChange={handleInput}
          />
          <label>Female</label>
          <input
            type='radio'
            name='gender'
            value='Other'
            checked={data.gender === 'Other'}
            onChange={handleInput}
          />
          <label>Other</label>
        </div>
        <span >{errors.gender}</span>

        <label>Your Best Subject</label>
        <div className='Subjects'>
          <input
            type='checkbox'
            name='subjects'
            value='English'
            checked={data.subjects.includes('English')}
            onChange={handleInput}
          />
          <label>English</label>
          <input
            type='checkbox'
            name='subjects'
            value='Physics'
            checked={data.subjects.includes('Physics')}
            onChange={handleInput}
          />
          <label>Physics</label>
          <input
            type='checkbox'
            name='subjects'
            value='Math'
            checked={data.subjects.includes('Math')}
            onChange={handleInput}
          />
          <label>Math</label>
        </div>
        <span ></span>

        <label>Upload Resume*</label>
        <input
          type='file'
          name='resume'
          id='fileInput'
          onChange={handleInput}
        />
        <span >{errors.resume}</span>

        <label>Url*</label>
        <input
          className='input-field'
          type='url'
          name='url'
          placeholder='Enter Url'
          value={data.url}
          onChange={handleInput}
        />
        <span >{errors.url}</span>

        <label>About</label>
        <textarea
        className='About'
          name='about'
          placeholder='Tell About yourself'
          value={data.about}
          onChange={handleInput}
        />
        <span ></span>
        
        <div
          style={{
            display: "flex",
            justifyContent: 'space-around',
          }}
        >
          <button type='submit'>Submit</button>
          <button type='button' onClick={resetForm}>Reset</button>
        </div>
      </form>
    </div>
  );
}

export default App;
