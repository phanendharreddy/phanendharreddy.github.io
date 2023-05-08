import "./FormStyle.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Name</label>
            <input type="text"></input>
            
            <label>E-mail</label>
            <input type="email"></input>
            
            <label>Message</label>
            <textarea row="6" placeholder="Enter your message here"/>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form
