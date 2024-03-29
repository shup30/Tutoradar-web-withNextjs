import React from "react";
import Link from "next/link";

export default function mobileApp() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1 className="title is-1">Mobile App Development Topics</h1>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="column">
              <div className="tile is-ancestor">
                  <div className="tile is-parent">
                    <article className="tile is-child box notification is-white">
                    <Link href="/kotlin">
                      <p className="title">Android Development</p>
                      </Link>

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
                    <p className="title">React Native</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Mobile Development</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Ionic</p>
                  </article>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Google Flutter</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Swift</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Dart Programming Language</p>
                  </article>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Kotlin</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Redux Framework</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Xamarin</p>
                  </article>
                </div>
                </div>
                <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Swift UI</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Firebase</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">C#</p>
                  </article>
                </div>
                </div>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">App Development</p>
                  </article>
                </div>
                              <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Augmented Reality</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Android Studio</p>
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
