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
            Developed by <a href="https://tutoradar.com">S. Patil</a>. The
            source code is licensed by
            <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>.
            The website content is licensed{" "}
            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
              CC BY NC SA 4.0
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
};
