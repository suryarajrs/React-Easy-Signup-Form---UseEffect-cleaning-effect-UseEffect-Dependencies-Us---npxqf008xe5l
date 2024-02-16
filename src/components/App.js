import React, { useState } from 'react'
import '../styles/App.css';
import { signUpFormValidation } from '../utils/validation';


const App = () => {

  const [formdata , setformdata] =useState({
    email:'',
    password:'',
    name:''

  })
  const [error , seterror]=useState({})


  const handleSubmit = (e) => {

    e.preventDefault();

    const fields = {
      name: formdata.name.trim(),
      email: formdata.email.trim(),
      password: formdata.password.trim(),
    };
    
    const validationErrors = signUpFormValidation(fields);

    if (validationErrors) {
      seterror(validationErrors);
    } else {
      // Form submission logic goes here
      // Reset the form and errors

      setformdata({
        email:'',
        password:'',
        name:''
    
      })
      
    }
  };
  

  
  
  return (
    <div>
    <form onSubmit={handleSubmit}>
     <label htmlFor='name'>Name:</label>
     <input onChange={(e)=>{setformdata({...formdata,name:e.target.value})}} value={formdata.name} id='name' type="text"></input>
     <br />
     {error.name&&<p  style={{color:'red'}}>{error.name}</p>}

     <label htmlFor='email'>Email:</label>   
     <input onChange={(e)=>{setformdata({...formdata,email:e.target.value})}} id='email'  value={formdata.email} type="text"/>
     <br/>
     {error.email&& <p style={{color:'red'}}>{error.email}</p>}

     <label htmlFor='password'>Password</label>   
     <input onChange={(e)=>{setformdata({...formdata,password:e.target.value})}} id='password' value={formdata.password} type="text"></input>
     <br/>
     
     {error.password && <p style={{color:'red'}}>{error.password}</p>}
     

     <label htmlFor='consent'>   
     <input id='consent' type="checkbox"></input>I agree to the terms and conditions
     </label>
     <br/>

     <button type="submit" id=''>Signup</button>
    </form>
    </div>
  )
}



export default App;
