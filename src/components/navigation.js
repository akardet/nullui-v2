import React from "react"
import Logo from "../components/svg/logo"

export default function navigation() {
  return (
    <nav id="navigation">
      <a className="navigation__logo" href="/">
        <Logo />
      </a>
      <div className="links">
        <ul>
          <li>
            <a href="/about" className="link">
              about
            </a>
          </li>
          <li>
            <a href="/#work" className="link">
              work
            </a>
          </li>
          <li>
            <a href="/#contact" className="link">
              contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
