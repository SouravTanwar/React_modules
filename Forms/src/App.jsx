import React, { useState } from 'react';

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
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ 
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "40vw",
          marginLeft: "auto",
          marginRight: "auto", 
        }}
      >
        <label>First Name*</label>
        <input
          type='text'
          name='firstname'
          placeholder='Enter First Name'
          value={data.firstname}
          onChange={handleInput}
        />
        <span style={{ color: "red", height: "20px"}}>{errors.firstname}</span>

        <label>Last Name*</label>
        <input
          type='text'
          name='lastname'
          placeholder='Enter Last Name'
          value={data.lastname}
          onChange={handleInput}
        />
        <span style={{ color: "red", height: "20px" }}>{errors.lastname}</span>

        <label>Email*</label>
        <input
          type='email'
          name='email'
          placeholder='Enter email'
          value={data.email}
          onChange={handleInput}
        />
        <span style={{ color: "red", height: "20px" }}>{errors.email}</span>

        <label>Contact*</label>
        <input
          type='tel'
          name='contact'
          placeholder='Enter Mobile number'
          value={data.contact}
          onChange={handleInput}
        />
        <span style={{ color: "red", height: "20px" }}>{errors.contact}</span>

        <label>Gender*</label>
        <div>
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
        <span style={{ color: "red" , height: "20px" }}>{errors.gender}</span>

        <label>Your Best Subject</label>
        <div>
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
        <span style={{ height: "20px" }}></span>

        <label>Upload Resume*</label>
        <input
          type='file'
          name='resume'
          id='fileInput'
          onChange={handleInput}
        />
        <span style={{ color: "red", height: "20px" }}>{errors.resume}</span>

        <label>Url*</label>
        <input
          type='url'
          name='url'
          placeholder='Enter Url'
          value={data.url}
          onChange={handleInput}
        />
        <span style={{ color: "red", height: "20px" }}>{errors.url}</span>

        <label>About</label>
        <textarea
          name='about'
          placeholder='Tell About yourself'
          value={data.about}
          onChange={handleInput}
        />
        <span style={{ height: "20px" }}></span>
        
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
