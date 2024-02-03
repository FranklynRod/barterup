import React from 'react'
import {useRef} from 'react'
const Home = () => {
  return (
    <div>
        <h2>Welcome, FirstName LastName </h2>
        <p>Barter your services in exchange for other services</p> 
        <p>Looking for items/services??</p>
        <form> 
            <label for = "items">Items/Services Willing To Barter:</label> 
            <select id = "items" name = "items"> 
            <option>Clothes</option>
            <option>Furniture</option>
            <option>Toys</option> 
            <option>Cleaning Services</option>
            <option>Cooking Services</option>
            <option>Building Services</option> 
            <option>Coding Services</option> 
            <option>Technical Services</option>
            </select>
            <button onSubmit={handleSignUp}>Submit</button>
        </form>
    </div>
  )
}

export default Home