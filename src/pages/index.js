import Head from "next/head";
import { Navbar } from "../components/navbar/navbar";
import { Sec1 } from "../components/index/sec1";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <Sec1 />
        </div>
    );
}
