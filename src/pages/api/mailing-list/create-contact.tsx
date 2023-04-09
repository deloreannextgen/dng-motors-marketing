import axios, { Axios } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// legacydocs.hubspot.com/docs/methods/forms/submit_form_v3_authentication#:~:text=As%20this%20API%20is%20authenticated%2C
// CORS - https://dev.to/steadylearner/how-to-use-cors-for-all-routes-with-next-js-and-browser-session-api-jmo

// create contacts with "interested in" values
// see https://developers.hubspot.com/docs/api/crm/contacts
// for how to fetch values in order to see how to set custom value

// make sure to switch to using hubspot's API client

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "create contact" });
}
