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
        <li>
          <a href="https://github.com/akardet">
            <Github className="social__icon" />
          </a>
        </li>
        <li>
          <a href="https://codepen.io/nullui">
            <Codepen className="social__icon" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/null_ui">
            <Twitter className="social__icon" />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/nullui.co/">
            <Instagram className="social__icon" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/sam-tancharoensuksavai/">
            <Linkedin className="social__icon" />
          </a>
        </li>
      </ul>
    </div>
  )
}
