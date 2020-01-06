import React from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";


export default function Home() {
  return (
    <div>
      <section className="section1">
        <div className="container">
          <div className="hero-body">
            <h2 className="title is-1 is-capitalized" id="hero-title">
              Find the best Learning Resources
            </h2>
            <div className="field is-grouped-centered is-grouped-multiline is-grouped">
              <div
                className="control has-icons-left is-me
    dium is-clearfix"
              >
                <input
                  className="input is-warning"
                  type="text"
                  placeholder="Search tutorials"
                />
                <span className="icon is-left">
                  <FaSearch/>
                </span>
              </div>
              <div className="control">
                <span className="button is-dark is-outlined is-inverted">Search</span>
              </div>
            </div>
          </div>

          <div className="tabs is-boxed is-medium">
            <ul clssName="tab-bar">
              <li>
                <Link href="/programming">
                  <a>Programming</a>
                </Link>
              </li>
              <li>
                <Link href="designing">
                  <a>Designing</a>
                </Link>
              </li>
              <li>
                <Link href="engineering">
                  <a>Engineering</a>
                </Link>
              </li>
              <li>
                <Link href="Buisness">
                  <a>Buisness</a>
                </Link>
              </li>
              <li>
                <Link href="Finance">
                  <a>Finance</a>
                </Link>
              </li>
              <li>
                <Link href="Office">
                  <a>Office</a>
                </Link>
              </li>
              <li>
                <Link href="Marketing">
                  <a>Marketing</a>
                </Link>
              </li>
              <li>
                <Link href="Lifestyle">
                  <a>Lifestyle</a>
                </Link>
              </li>
              <li>
                <Link href="Photography">
                  <a>Photography</a>
                </Link>
              </li>

              <li>
                <Link href="Health">
                  <a>Health</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
