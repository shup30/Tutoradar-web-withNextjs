import React from "react";
import Link from "next/link";

export default function softwareTesting() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1 className="title is-1"> Software Testing Topics</h1>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="column">
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <Link href="/kotlin">
                      <p className="title">Selenium WebDriver</p>
                    </Link>
                  </article>
                </div>

                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Software Testing</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Automation Testing</p>
                  </article>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">REST Assured</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Applum</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Java</p>
                  </article>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Selenium Testing Framework</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">API Testing</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Automation</p>
                  </article>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Python</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Cypress.io</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Performance Testing</p>
                  </article>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">REST API</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Unit Testing</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Quality Assurance</p>
                  </article>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">SoapUI</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">JMeter</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">JUnit</p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
