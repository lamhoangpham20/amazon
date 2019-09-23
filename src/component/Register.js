import React from 'react'
import {Link} from "react-router-dom"
export default function Register(props)
{
    return(
      <div>
      <h1>Register</h1>

    <label for='fname'>First Name</label>
    <input type='text'  id='fname' value={props.firstname} name='firstname' onChange={props.handleChange}></input><br/>
    <label for='lname'>Last Name</label>
    <input type='text' id='lname' value={props.lastname} name='lastname' onChange={props.handleChange}></input><br/>
    <label for='address'>Email</label>
    <input type='text' id='email' value={props.email} name='email' onChange={props.handleChange}></input><br/>
    <label for='phone'>Phone Number</label>
    <input type='number' id='phone' value={props.phoneNumber} name='phoneNumber' onChange={props.handleChange}></input><br/>
    <Link to={`/`}><button type='submit' onClick={props.handleSubmit}>Register</button></Link>
    <button onClick={() => props.history.goBack()}>Back</button>
    </div>
  )


}
