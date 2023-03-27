import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/components/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>DeLorean Next Generation Motors</title>
        <meta
          name="description"
          content="DeLorean Next Generation Motors is a Detroit based automaker producing the next generation DeLorean, Model-JZD"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* hero */}
        {/* <div style={{ width: "100%", height: "100%", position: "relative" }}> */}
        <div>
          <Image
            src="/jzd-the-dream-never-died.png"
            alt="Model JZD with the quote 'the dream never died'"
            // className={styles.vercelLogo}
            fill={true}
            // width={100}
            // height={24}
            priority
          />
        </div>
      </main>
    </>
  );
}
