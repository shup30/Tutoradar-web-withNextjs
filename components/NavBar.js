import React, { Fragment } from "react";
import Link from "next/link";
import Router from "next/router";
import { signout, isAuthenticated } from "./auth";

const toggleStyles = event => {
  document.querySelector("#burger").classList.toggle("is-active");
  document.querySelector("#navbarmenu").classList.toggle("is-active");
};

export default class NavBar extends React.Component {
  componentDidMount() {
    document.querySelectorAll(".navbar-link").forEach(function(navbarLink) {
      navbarLink.addEventListener("click", function() {
        navbarLink.nextElementSibling.classList.toggle("is-hidden-mobile");
      });
    });
  }

  render() {
    const redirectToHome = () => {
      Router.push("/");
    };

    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <span className="navbar-item">
              <Link href="/">
                <img src="/images/tut3.png" height="70px" width="200px"/>
              </Link>
            </span>

            <a
              id="burger"
              onClick={toggleStyles}
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarmenu"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarmenu" className="navbar-menu">
            <div className="navbar-start">
              <span className="navbar-item">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </span>

              <span className="navbar-item">
                <Link href="/categories">
                  <a>Categories</a>
                </Link>
              </span>
              <span className="navbar-item">
                <Link href="/topics">
                  <a>Tutorials</a>
                </Link>
              </span>
              <span className="navbar-item">
                <Link href="/projects">
                  <a> Project ideas</a>
                </Link>
              </span>

              <div
                className="navbar-item has-dropdown is-hoverable"
                id="navmore"
              >
                <span className="navbar-link">
                  <Link href="/more">
                    <a>More</a>
                  </Link>
                </span>

                <div className="navbar-dropdown is-hidden-mobile is-boxed">
                  <span className="navbar-item">
                    <Link href="/about">
                      <a>About</a>
                    </Link>
                  </span>
                  <span className="navbar-item">
                    <Link href="/jobs">
                      <a>Jobs</a>
                    </Link>
                  </span>
                  <span className="navbar-item">
                    <Link href="/contact">
                      <a>Contact</a>
                    </Link>
                  </span>
                  <hr className="navbar-divider" />
                  <span className="navbar-item">
                    <Link href="/report">
                      <a>Report an issue</a>
                    </Link>
                  </span>
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                {!isAuthenticated() && (
                  <React.Fragment>
                    <div className="buttons">
                    <span className="button is-link is-outlined">
                        <Link href="/signin">
                          <strong> Log in</strong>
                        </Link>
                      </span>
                      <span className="button is-link is-outlined">
                        <Link href="/signup">
                          <strong>Sign up</strong>
                        </Link>
                      </span>
                    </div>
                  </React.Fragment>
                )}
              </div>
              <div className="navbar-item">
                {isAuthenticated() && (
                  <React.Fragment>
                    <div className="buttons">
                    <Link href="/post/create">
                      <span className="button is-link is-outlined">
                          Upload a Resource
                      </span>
                      </Link>
                      <span
                        className="button is-link is-outlined"
                        onClick={() => signout(() => redirectToHome())}
                      >
                        Sign Out
                      </span>
                    </div>
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
