import React from "react"

import Github from "../components/svg/github"
import Codepen from "../components/svg/codepen"
import Instagram from "../components/svg/instagram"
import Linkedin from "../components/svg/linkedin"
import Twitter from "../components/svg/twitter"

export default function social() {
  return (
    <div className="social">
      <ul className="social__wrapper">
        <li className="icon github">
          <a href="https://github.com/akardet" className="icon-github">
            <Github className="social__icon" />
            Github
          </a>
        </li>
        <li>
          <a href="https://codepen.io/nullui" className="icon-codepen">
            <Codepen className="social__icon" />
            Codepen
          </a>
        </li>
        <li>
          <a href="https://twitter.com/null_ui" className="icon-twitter">
            <Twitter className="social__icon icon-twitter" />
            Twitter
          </a>
        </li>
        <li>
          <a href="https://instagram.com/nullui.co/" className="icon-instagram">
            <Instagram className="social__icon icon--instagram" />
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/sam-tancharoensuksavai/"
            className="icon-linkedin"
          >
            <Linkedin className="social__icon icon--linkedin" />
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  )
}
