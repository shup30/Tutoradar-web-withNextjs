import Head from "next/head";
import "../styles.scss";
import Navbar from "../components/NavBar";

export default ({ children }) => {
  return (
    <div>
      <Head>
        <title>Tutoradar</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <header>
        <Navbar />
      </header>
      {children}
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            Copyright © 2020 Tutoradar, All rights Reserved |&nbsp;&nbsp;&nbsp;Developed By{" "}
            <a href="http://www.github.com/shup30">Shubham Patil</a>.
          </p>
        </div>
      </footer>
    </div>
  );
};
