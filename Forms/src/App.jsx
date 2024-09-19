import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{display: 'flex', justifyContent:'center', marginTop:'50px'}}>
      <form style={{display:"flex", flexDirection:"column", width:"25vw"}}>
        <label>First Name*</label>
        <input type='text' placeholder='Enter First Name' required />
        <label>Last Name*</label>
        <input type='text' placeholder='Enter Last Name' required />
        <label>Email*</label>
        <input type='email' placeholder='Enter email' required/>
        <label>Contact*</label>
        <input type='tel' placeholder='Enter Mobile number' required/>
        <label>Gender*</label>
        <div>
          <input type='radio'  />
          <label>Male</label>
          <input type='radio' />
          <label>Female</label>
          <input type='radio' />
          <label>Other</label>
        </div>
        <label>Your Best Subject</label>
        <div>
          <input type='checkbox' />
          <label>English</label>
          <input type='checkbox' />
          <label>Physics</label>
          <input type='checkbox' />
          <label>Math</label>
        </div>
        <label>Upload Resume*</label>
        <input type='file' placeholder='Select Resume' required />
        <label>Url*</label>
        <input type='url' placeholder='Enter Url' required/>
        <label>About </label>
        <textarea  placeholder='Tell About your self' />
        <label>Submit or Reset</label>
        <div>
          <button>Submit</button>
          <button>Reset</button>
        </div>
      </form>
    </div>
  )
}

export default App
