import React from "react";
import Link from "next/link";

export default function dataScience() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1 className="title is-1">Data Science Topics</h1>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="column">
              <div className="tile is-ancestor">
                  <div className="tile is-parent">
                    <article className="tile is-child box notification is-white">
                    <Link href="/data-science">
                      <p className="title">Data Science</p>
                      </Link>
                    </article>
                  </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Python</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Machine Learning</p>
                  </article>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Deep Learning</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">R</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Neural Networks</p>
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
                    <p className="title">Data Analysis</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Artificial Intelligence</p>
                  </article>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Tenserflow</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Neural Networks</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Natural Language Processing</p>
                  </article>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Statistics</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Apache Spark</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Buisness Analytics</p>
                  </article>
                </div>
                </div>
                <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Big Data</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Reinforcement Learning</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Computer Vision</p>
                  </article>
                </div>
                </div>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Scala</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">PyTorch</p>
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
