import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';


const Social = () => {
  return (
    
<div class="social-connect">
    <h2>Follow Us on Social Media</h2>
    <div class="social-handlers">
        <a href="https://github.com/yourprofile" target="_blank" className="social-icon github">
            <i className="fab fa-github"></i>
        </a>
        <a href="https://www.twitter.com/yourprofile" target="_blank" class="social-icon twitter">
            <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/yourprofile" target="_blank" class="social-icon instagram">
            <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" class="social-icon linkedin">
            <i class="fab fa-linkedin-in"></i>
        </a>
    </div>
</div>

  )
}

export default Social