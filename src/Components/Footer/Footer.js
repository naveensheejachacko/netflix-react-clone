import React from 'react'
import "./Footer.css";

function Footer() {
  return (
    <>
    <section className="link">
      <div className="logos">
        <a href="#">
          <i className="fab fa-facebook-square fa-2x logo" />
        </a>
        <a href="#">
          <i className="fab fa-instagram fa-2x logo" />
        </a>
        <a href="#">
          <i className="fab fa-twitter fa-2x logo" />
        </a>
        <a href="#">
          <i className="fab fa-youtube fa-2x logo" />
        </a>
      </div>
      <div className="sub-links">
        <ul>
          <li>
            <a href="#">Audio and Subtitles</a>
          </li>
          <li>
            <a href="#">Audio Description</a>
          </li>
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">Gift Cards</a>
          </li>
          <li>
            <a href="#">Media Center</a>
          </li>
          <li>
            <a href="#">Investor Relations</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Legal Notices</a>
          </li>
          <li>
            <a href="#">Corporate Information</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </section>
    <footer>
      <p>© 1997-2018 Netflix, Inc.</p>
      <p>Carlos Avila © 2018</p>
    </footer>
  </>
  
  )
}
export default Footer