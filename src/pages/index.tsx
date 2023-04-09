import BasePage from "@layouts/base-page";
import MailingList from "@modules/forms/MailingList";
import Head from "next/head";

export default function Home() {
  return (
    <BasePage>
      <Head>
        <title>DeLorean Next Generation Motors</title>
        <meta
          name="description"
          content="DeLorean Next Generation Motors is a Detroit based automaker producing the next generation DeLorean, Model-JZD"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* hero */}
        {/* <div
          style={{
            width: "100%",
          }}
        > */}
        {/* make image component */}
        {/* review https://nextjs.org/docs/messages/no-img-element */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {/* <img
          src="/assets/images/jzd-the-dream-never-died.png"
          width="100%"
          alt="picture of jzd"
        /> */}
        <MailingList />
      </main>
    </BasePage>
  );
}
