import React, { Component } from "react";
import Slider from "react-slick";
import { useRouter } from "next/router";
import Link from "next/link";
import "../styles.scss";

export default class Landing extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 900,
      responsive: [
        {
          breakpoint: 5000,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2
          }
        }
      ]
    };
    return (
      <div className="container">
        <section className="section" id="course-carousel">
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-6">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <article className="tile is-child notification is-warning">
                    <p className="title">Programming Tutorials</p>
                    <p className="subtitle">
                      Find the best Programming Tutorials from community driven
                      sources
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>

          <div id="carousel-development" className="carousel">
            <Slider {...settings}>
              <div className="carousel-item">
                <div className="column">
                  <div className="card is-slightly-rounded">
                    <div className="card-image">
                      <figure className="image">
                        <Link href="/web-development">
                          <img
                            src="/assets/images/Engineering.jpg"
                            alt="Park Savoy"
                            className="is-slightly-rounded"
                            width="100"
                            height="300"
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <p>
                          <span className="title is-6 is-capitalized">
                            <Link href="/web-development">
                              <a> Web Development</a>
                            </Link>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="column">
                  <div className="card is-slightly-rounded">
                    <div className="card-image">
                      <figure className="image">
                        <Link href="/app-development">
                          <img
                            src="/assets/images/Software-Testing.jpg"
                            alt="Mobile App"
                            className="is-slightly-rounded"
                            width="100"
                            height="300"
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <p>
                          <span className="title is-6 is-capitalized">
                            <Link href="/app-development">
                              <a> Mobile Apps </a>
                            </Link>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="column">
                  <div className="card is-slightly-rounded">
                    <div className="card-image">
                      <figure className="image">
                        <Link href="/">
                          <img
                            src="/assets/images/Data-Science.jpg"
                            alt="Data Science"
                            className="is-slightly-rounded"
                            width="100"
                            height="300"
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <p>
                          <span className="title is-6 is-capitalized">
                            <Link href="/">
                              <a> Data Science </a>
                            </Link>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="column">
                  <div className="card is-slightly-rounded">
                    <div className="card-image">
                      <figure className="image">
                        <Link href="/">
                          <img
                            src="/assets/images/Software-Testing.jpg"
                            alt="Park Savoy"
                            className="is-slightly-rounded"
                            width="100"
                            height="300"
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <p>
                          <span className="title is-6 is-capitalized">
                            <Link href="/">
                              <a>Software Engineering </a>
                            </Link>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="column">
                  <div className="card is-slightly-rounded">
                    <div className="card-image">
                      <figure className="image">
                        <Link href="/">
                          <img
                            src="/assets/images/Data-Science2.jpg"
                            alt="Park Savoy"
                            className="is-slightly-rounded"
                            width="100"
                            height="300"
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <p>
                          <span className="title is-6 is-capitalized">
                            <Link href="/">
                              <a> Game Development </a>
                            </Link>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="column">
                  <div className="card is-slightly-rounded">
                    <div className="card-image">
                      <figure className="image">
                        <Link href="/">
                          <img
                            src="/assets/images/Software-Testing.jpg"
                            alt="Park Savoy"
                            className="is-slightly-rounded"
                            width="100"
                            height="300"
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <p>
                          <span className="title is-6 is-capitalized">
                            <Link href="/">
                              <a>Software Testing </a>
                            </Link>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="column">
                  <div className="card is-slightly-rounded">
                    <div className="card-image">
                      <figure className="image">
                        <Link href="/">
                          <img
                            src="/assets/images/Data-Science.jpg"
                            alt="Park Savoy"
                            className="is-slightly-rounded"
                            width="100"
                            height="300"
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <p>
                          <span className="title is-6 is-capitalized">
                            <Link href="/">
                              <a> Databases </a>
                            </Link>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </section>
        <hr />
        <section className="section" id="course-carousel">
          <div className="columns">
            <div className="column"></div>
            <div className="column">
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child notification is-warning">
                        <p className="title">Designing Tutorials</p>
                        <p className="subtitle">
                          Find the best Designing tutorials from community
                          driven sources{" "}
                        </p>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="carousel-development" className="carousel">
            <Slider {...settings}>
              <div className="carousel-item">
                <div className="column">
                  <div className="card is-slightly-rounded">
                    <div className="card-image">
                      <figure className="image">
                        <Link href="/web-development">
                          <img
                            src="/assets/images/Engineering.jpg"
                            alt="Park Savoy"
                            className="is-slightly-rounded"
                            width="100"
                            height="300"
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <p>
                          <span className="title is-6 is-capitalized">
                            <Link href="/web-development">
                              <a> Graphic Design</a>
                            </Link>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="column">
                  <div className="card is-slightly-rounded">
                    <div className="card-image">
                      <figure className="image">
                        <Link href="/app-development">
                          <img
                            src="/assets/images/Software-Testing.jpg"
                            alt="Mobile App"
                            className="is-slightly-rounded"
                            width="100"
                            height="300"
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <p>
                          <span className="title is-6 is-capitalized">
                            <Link href="/app-development">
                              <a> Design Tool </a>
                            </Link>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="column">
                  <div className="card is-slightly-rounded">
                    <div className="card-image">
                      <figure className="image">
                        <Link href="/">
                          <img
                            src="/assets/images/Data-Science.jpg"
                            alt="Data Science"
                            className="is-slightly-rounded"
                            width="100"
                            height="300"
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <p>
                          <span className="title is-6 is-capitalized">
                            <Link href="/">
                              <a> User Experience </a>
                            </Link>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="column">
                  <div className="card is-slightly-rounded">
                    <div className="card-image">
                      <figure className="image">
                        <Link href="/">
                          <img
                            src="/assets/images/Software-Testing.jpg"
                            alt="Park Savoy"
                            className="is-slightly-rounded"
                            width="100"
                            height="300"
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <p>
                          <span className="title is-6 is-capitalized">
                            <Link href="/">
                              <a>Game Design </a>
                            </Link>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="column">
                  <div className="card is-slightly-rounded">
                    <div className="card-image">
                      <figure className="image">
                        <Link href="/">
                          <img
                            src="/assets/images/Data-Science2.jpg"
                            alt="Park Savoy"
                            className="is-slightly-rounded"
                            width="100"
                            height="300"
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <p>
                          <span className="title is-6 is-capitalized">
                            <Link href="/">
                              <a> Design Thinking </a>
                            </Link>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="column">
                  <div className="card is-slightly-rounded">
                    <div className="card-image">
                      <figure className="image">
                        <Link href="/">
                          <img
                            src="/assets/images/Software-Testing.jpg"
                            alt="Park Savoy"
                            className="is-slightly-rounded"
                            width="100"
                            height="300"
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <p>
                          <span className="title is-6 is-capitalized">
                            <Link href="/">
                              <a>3D and Animation </a>
                            </Link>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="column">
                  <div className="card is-slightly-rounded">
                    <div className="card-image">
                      <figure className="image">
                        <Link href="/">
                          <img
                            src="/assets/images/Data-Science.jpg"
                            alt="Park Savoy"
                            className="is-slightly-rounded"
                            width="100"
                            height="300"
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <p>
                          <span className="title is-6 is-capitalized">
                            <Link href="/">
                              <a> Fashion </a>
                            </Link>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </section>
        <section className="section" id="course-carousel">
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-6">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <article className="tile is-child notification is-warning">
                    <p className="title">Buisness Tutorials</p>
                    <p className="subtitle">
                      Find the best Buisness Tutorials from community driven
                      sources
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>

          <div id="carousel-development" className="carousel">
            <Slider {...settings}>
              <div className="carousel-item">
                <div className="column">
                  <div className="card is-slightly-rounded">
                    <div className="card-image">
                      <figure className="image">
                        <Link href="/web-development">
                          <img
                            src="/assets/images/Engineering.jpg"
                            alt="Park Savoy"
                            className="is-slightly-rounded"
                            width="100"
                            height="300"
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <p>
                          <span className="title is-6 is-capitalized">
                            <Link href="/web-development">
                              <a> Entrepreneurship</a>
                            </Link>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="column">
                  <div className="card is-slightly-rounded">
                    <div className="card-image">
                      <figure className="image">
                        <Link href="/app-development">
                          <img
                            src="/assets/images/Software-Testing.jpg"
                            alt="Mobile App"
                            className="is-slightly-rounded"
                            width="100"
                            height="300"
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <p>
                          <span className="title is-6 is-capitalized">
                            <Link href="/app-development">
                              <a> Communications </a>
                            </Link>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="column">
                  <div className="card is-slightly-rounded">
                    <div className="card-image">
                      <figure className="image">
                        <Link href="/">
                          <img
                            src="/assets/images/Data-Science.jpg"
                            alt="Data Science"
                            className="is-slightly-rounded"
                            width="100"
                            height="300"
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <p>
                          <span className="title is-6 is-capitalized">
                            <Link href="/">
                              <a> Management </a>
                            </Link>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="column">
                  <div className="card is-slightly-rounded">
                    <div className="card-image">
                      <figure className="image">
                        <Link href="/">
                          <img
                            src="/assets/images/Software-Testing.jpg"
                            alt="Park Savoy"
                            className="is-slightly-rounded"
                            width="100"
                            height="300"
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <p>
                          <span className="title is-6 is-capitalized">
                            <Link href="/">
                              <a>Sales </a>
                            </Link>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="column">
                  <div className="card is-slightly-rounded">
                    <div className="card-image">
                      <figure className="image">
                        <Link href="/">
                          <img
                            src="/assets/images/Data-Science2.jpg"
                            alt="Park Savoy"
                            className="is-slightly-rounded"
                            width="100"
                            height="300"
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <p>
                          <span className="title is-6 is-capitalized">
                            <Link href="/">
                              <a> Strategy </a>
                            </Link>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="column">
                  <div className="card is-slightly-rounded">
                    <div className="card-image">
                      <figure className="image">
                        <Link href="/">
                          <img
                            src="/assets/images/Software-Testing.jpg"
                            alt="Park Savoy"
                            className="is-slightly-rounded"
                            width="100"
                            height="300"
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <p>
                          <span className="title is-6 is-capitalized">
                            <Link href="/">
                              <a>Operations </a>
                            </Link>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="column">
                  <div className="card is-slightly-rounded">
                    <div className="card-image">
                      <figure className="image">
                        <Link href="/">
                          <img
                            src="/assets/images/Data-Science.jpg"
                            alt="Park Savoy"
                            className="is-slightly-rounded"
                            width="100"
                            height="300"
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <p>
                          <span className="title is-6 is-capitalized">
                            <Link href="/">
                              <a> Project Management </a>
                            </Link>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </section>
      </div>
    );
  }
}
