import BasePage from "@layouts/page-layouts/base-page";
import MailingListSignUpForm from "@modules/forms/mailing-list/sign-up";
import { Paper } from "@mui/material";

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
        <Paper>
          <MailingListSignUpForm />
        </Paper>
      </main>
    </BasePage>
  );
}
