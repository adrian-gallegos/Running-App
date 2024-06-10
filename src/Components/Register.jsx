import React, { useState } from "react";
import './Register.css'

//import icons
import { MdEmail } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
import { BsShieldLockFill } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Register() {
    const [userData, setUserData] = useState(
        {username: "", password: "", email: ""}
    );

    function handleChange(event){
        setUserData(prevUserData => {
          return {
            ...prevUserData,
            [event.target.name]: event.target.value
          }
        })
      }
    
      function handleSubmit(event){
        event.preventDefault()
        console.log(userData)
        // API data submission goes here
        fetch(`${API_URL}/api/register`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(userData)
         }).then(
             res => res.json()
         ).then((data) =>{
               //setUserData(data)
               console.log(data);
            console.log("Trying to redirect");
            // if (data.message.includes("New")) {
            //   navigateTo("/weather"); // Redirect to '/weather' if user is found
            // } else {
            //   // Handle login failure
            //   alert("Invalid login");
            // }
          });
    
         
      }

    return (
        <div className="formDiv flex">
        <div className="headerDiv">
          <h3>Tell Us about Yourself!</h3>
        </div>

        <form action="" className='form grid' onSubmit={handleSubmit}>
          {/* <span className='showMessage'>Register Status goes here</span> */}

          <div className="inputDiv">
            <label htmlFor="email">Email</label>
            <div className="input flex">
              <MdEmail className ='icon'/>
              <input type="email"
                     id='email'
                     placeholder='Enter Email'
                     onChange={handleChange}
                     name="email"
                     value={userData.email}
              />
            </div>
          </div>
          
          
          <div className="inputDiv">
            <label htmlFor="username">Username</label>
            <div className="input flex">
              <FaUserShield className ='icon'/>
              <input type="text"
                     id='username'
                     placeholder='Enter Username'
                     onChange={handleChange}
                     name="username"
                     value={userData.username}
              />
            </div>
          </div>

          <div className="inputDiv">
            <label htmlFor="password">Password</label>
            <div className="input flex">
              <BsShieldLockFill className ='icon'/>
              <input type="password"
                     id='password'
                     placeholder='Enter Password'
                     onChange={handleChange}
                     name="password"
                     value={userData.password}
              />
            </div>
          </div>
          <button className='btn flex'>
            <span>Register</span>
            <FaLongArrowAltRight className='icon' />
          </button>

        </form>
      </div>    
    )
}
