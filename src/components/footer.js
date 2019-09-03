import React from "react"
import Social from "../components/social"

export default function footer() {
  return (
    <div>
      <section id="contact" className="footer">
        <div className="quote">
          <h4 className="subTitle">03. Contact</h4>
          <div className="divider"></div>

          <h1 data-aos="fade-right">
            Design is <br />
            by the people
            <br />
            for the people
          </h1>
          <h3 data-aos="fade-right">- Judy Wert</h3>
        </div>
        <div className="closing">
          <div className="cta">
            <div className="divider"></div>
            <p>
              I love what I do, and find any new challenge as an opportunity to
              not only deliver a{" "}
              <em>
                <b>thoughtful</b>
              </em>{" "}
              and <b>holistic</b> experience for the final product, but also the
              person, or people, I’m working with.
            </p>
            <p>
              I am also currently open to full-time opportunities that will
              challenge me as both a <b>developer</b> and a <b>designer</b>. I
              am not interested in a role that will silo me into being one or
              the other.
            </p>
            <p>
              If you think I might be the right person for the job, feel free to
              drop in and tell me more!
            </p>
            <a href="mailto:hello@nullui.co" className="btn cta__btn">
              Let's Talk
            </a>
          </div>
          <div className="social__container">
            <div className="divider"></div>
            <p>
              If you want to keep up with what I’m working on, or if you just
              want to say{" "}
              <em>
                <b>'Hi'</b>
              </em>
              , you can find me on the following platforms.
            </p>
            <Social />
          </div>
        </div>
        <div className="footer__terms">
          <p>&#169; Copyright 2019 nullui</p>
        </div>
      </section>
    </div>
  )
}
