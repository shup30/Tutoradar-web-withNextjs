import React from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

export default function Home() {
  function togglefunction() {
   var toggle = document.querySelector("#myUL").classList.toggle("is-hidden");
  }
  
  function myFunction() {
    var input, filter, ul, li, a, i, txtValue, toggle; 
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
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
                  id="searchbar"
                  onKeyUp={myFunction}
                  onInput={togglefunction}
                  className="input is-warning is-small"
                  type="text"
                  placeholder="Search tutorials"
                />
                <ul className="is-hidden" id="myUL">
                  <li>
                    <a href="programming-courses/python">Python</a>
                  </li>
                  <li>
                    <a href="javascript">Javascript</a>
                  </li>

                  <li>
                    <a href="/billy">React</a>
                  </li>
                  <li>
                    <a href="/bob">Vue</a>
                  </li>

                  <li>
                    <a href="/calvin">CSS</a>
                  </li>
                  <li>
                    <a href="/christina">Angular</a>
                  </li>
                  <li>
                    <a href="/cindy">Php</a>
                  </li>
                </ul>
                <span className="icon is-left">
                  <FaSearch />
                </span>
              </div>
              <div className="control">
                <span className="button is-dark is-outlined is-inverted is-small">
                  Search
                </span>
              </div>
            </div>
          </div>

          <div className="tabs is-boxed is-large">
            <ul className="tab-bar">
              <li>
                <Link href="/programming">
                  <a>Programming</a>
                </Link>
              </li>
              <li>
                <Link href="/designing">
                  <a>Designing</a>
                </Link>
              </li>
              <li>
                <Link href="/engineering">
                  <a>Engineering</a>
                </Link>
              </li>
              <li>
                <Link href="/business">
                  <a>Business</a>
                </Link>
              </li>
              <li>
                <Link href="/finance">
                  <a>Finance</a>
                </Link>
              </li>
              <li>
                <Link href="/office">
                  <a>Office</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
