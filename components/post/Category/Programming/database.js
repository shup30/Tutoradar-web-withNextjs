import React from "react";
import Link from "next/link";

export default function database() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1 className="title is-1">Databases Topics</h1>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="column">
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <Link href="/kotlin">
                      <p className="title">Sql</p>
                    </Link>
                  </article>
                </div>

                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">MySQL</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Oracle SQL</p>
                  </article>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Oracle Certification</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Apache Kafka</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Database Programming</p>
                  </article>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">MongoDB</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">SQL server</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Database Management</p>
                  </article>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Pl/SQL</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Oracle Database</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Oracle 1Z0-071</p>
                  </article>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Elastic Search</p>
                  </article>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Server Adminstration</p>
                  </article>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">ETL</p>
                  </article>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child box notification is-white">
                    <p className="title">Oracle 1Z0-144</p>
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
