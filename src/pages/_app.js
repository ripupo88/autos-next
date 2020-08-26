import { Navbar } from "../components/navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/global.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className="container-fluid p-0 m-0">
                <div className="row p-0 m-0">
                    <Component {...pageProps} />
                </div>
                <footer>
                    <p className="mb-0">
                        Copyright &copy; 2020{" "}
                        <img src="./rpr-logo.svg" alt="logo" alt="logo RPR" />{" "}
                        All Rights Reserved.
                    </p>
                </footer>
                <style jsx>
                    {`
                        footer {
                            background: #1a1e25;
                            color: #868c96;
                        }

                        footer p {
                            color: #cdcdcd;
                            font-size: 1em;
                            padding: 20px 0;
                            text-align: center;
                        }

                        footer img {
                            width: 60px;
                        }
                    `}
                </style>
            </div>
        </>
    );
}

export default MyApp;
