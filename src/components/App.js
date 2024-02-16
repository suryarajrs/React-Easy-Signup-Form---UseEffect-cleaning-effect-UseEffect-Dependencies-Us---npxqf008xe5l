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
  {console.log(error)}

  const handeOnClick  = (e)=>{
    e.preventDefault();
    {console.log(formdata)}

    seterror(signUpFormValidation(formdata))
  }
  
  return (
    <form>
     <label htmlFor='name'>Name:</label>
     <input onChange={(e)=>{setformdata({...formdata,name:e.target.value})}} value={formdata.name} id='name' type="text"></input>
     <br />
     {error.name&&<p  style={{color:'red'}}>{error.name}</p>}

     <label htmlFor='email'>Email:</label>   
     <input onChange={(e)=>{setformdata({...formdata,email:e.target.value})}} id='email' required value={formdata.email} type="text"/>
     <br/>
     {error.email&& <p style={{color:'red'}}>{error.email}</p>}

     <label htmlFor='password'>Password</label>   
     <input onChange={(e)=>{setformdata({...formdata,password:e.target.value})}} id='password' value={formdata.password} type="text"></input>
     <br/>
     
     {error.password && <p style={{color:'red'}}>{error.password}</p>}
     

     <label htmlFor='consent'>   
     <input id='consent' type="checkbox"></input>all
     </label>
     <br/>

     <button onClick={handeOnClick} id=''>Signup</button>
    </form>

  )
}


export default App;
