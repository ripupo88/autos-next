import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container-fluid">
                <div className="row">
                    <Component {...pageProps} />
                </div>
            </div>
        </>
    );
}

export default MyApp;
