import React from "react";
import Link from "next/link";

export default function Webdev() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1 className="title is-1">Web Development Topics</h1>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="column">
              <div className="tile is-ancestor">
                  <div className="tile is-parent">
                    <article className="tile is-child box notification is-white">
                    <p className="title">
                    <Link href="/python">
                      <a>Python</a>
                      </Link>
                    </p>
                    </article>
                  </div>

                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Javascript</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">React</p>
                  </article>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Vue</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Angular</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Svelte</p>
                  </article>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">One</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Three</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Four</p>
                  </article>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Two</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Three</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Four</p>
                  </article>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Four</p>
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
