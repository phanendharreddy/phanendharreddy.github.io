import "./FormStyle.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <div className="form-intro">
            <h2>Let's Connect</h2>
            <p>Interested in collaborating on a project, discussing opportunities, or just want to say hi? I'd love to hear from you!</p>
            <div className="contact-methods">
                <div className="contact-item">
                    <strong>Email:</strong> <a href="mailto:phanendhar8@gmail.com">phanendhar8@gmail.com</a>
                </div>
                <div className="contact-item">
                    <strong>Phone:</strong> <a href="tel:+19296303215">+1 (929) 630-3215</a>
                </div>
                <div className="contact-item">
                    <strong>Location:</strong> Harrison, NJ, USA
                </div>
                <div className="contact-item">
                    <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/phanendharreddy" target="_blank" rel="noopener noreferrer">linkedin.com/in/phanendharreddy</a>
                </div>
            </div>
        </div>
        <form>
            <label>Your Name</label>
            <input type="text" placeholder="John Doe" required></input>
            
            <label>Your Email</label>
            <input type="email" placeholder="john.doe@example.com" required></input>
            
            <label>Subject</label>
            <input type="text" placeholder="Project Collaboration" required></input>
            
            <label>Message</label>
            <textarea rows="6" placeholder="Tell me about your project or inquiry..." required/>
            <button className="btn">Send Message</button>
        </form>
    </div>
  )
}

export default Form
