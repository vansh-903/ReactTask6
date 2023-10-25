import React from 'react';
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <form action="/contact" method="POST">
        <input type="name" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Your Email" />
        <textarea name="message" placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
          <ul>
            <li><a href="aroravansh903@gmail.com">Gmail Me</a></li>
            <li><a href="https://www.linkedin.com/in/im-vansharora/">LinkedIn</a></li>
            <li><a href="https://github.com/vansh-903">GitHub</a></li>
          </ul>
    </div>
  );
}

export default Contact;