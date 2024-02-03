import React from 'react'
import { useRef } from 'react';

const Signup = () => {
  const firstNameRef = useRef(null); 
  const lastNameRef = useRef(null);  
  const emailRef = useRef(null);  
  const passwordRef = useRef(null); 

  const handleSignUp = (e) => {  
    // prevents page from submitting when page load
    e.preventDefault(); 

    const user = { 
      firstName : firstNameRef.current.value,
      lastName : lastNameRef.current.value,
      email : emailRef.current.value,
      password : passwordRef.current.value,
    }
    try {
    //Access input values using useRef 
    
  
        //Basic client-side validation 
        if(!user.firstName || !user.lastName || !user.email || !user.password) { 
          alert('All fields are required.') 
          return;
        }  

       }  catch (error) { 
        alert("An error occurred during sign-up.")
      }  

      }


  return (
    <div>
      <h1>Sign in </h1>
      <form>
    <label htmlFor='first-name' >First Name</label>
    <input id="firstname" ref={firstNameRef} defaultValue=""></input>
    <label htmlFor='last-name'>Last Name</label>
    <input id = "lastname" ref={lastNameRef} defaultValue=""></input>
    <label htmlFor='email-address' >Email: </label>
    <input id = "emailaddress" ref={emailRef} defaultValue=""></input>
    <label htmlFor='password'>Password</label>
    <input id = "password" ref={passwordRef} defaultValue=""></input>
    <button onSubmit={handleSignUp}>Submit</button>
    </form>
    </div>
    
  )
}

export default Signup;