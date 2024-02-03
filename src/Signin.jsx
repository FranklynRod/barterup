import React from 'react'
import axios from 'axios';
const Signin = () => {
    const firstNameRef = useRef(null); 
    const lastNameRef = useRef(null);  
    const emailRef = useRef(null);  
    const passwordRef = useRef(null); 

    const handleSignUp = async () => { 
        try { 
            //Access input values using useRef 
            const firstNameValue = firstNameRef.current.value; 
            const lastNameValue = lastNameRef.current.value; 
            const emailValue = emailRef.current.value; 
            const passwordValue = passwordRef.current.value; 

            //Basic client-side valida
        }
    }
    



    
  return (
    <div>
    <h1>Sign in </h1>
    <label >First Name <input id = "first" type ="" ref ={firstNameRef} /></label>
    <p>Last Name <input type ="text" ref ={lastNameRef}/></p>
    <p>Email: <input type ="text" ref ={emailRef}/></p>
    <p>Password <input type ="text" ref ={lastNameRef}/></p>
    </div>
    
  )
}

export default Signin