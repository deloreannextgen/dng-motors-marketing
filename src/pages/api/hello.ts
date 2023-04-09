// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//legacydocs.hubspot.com/docs/methods/forms/submit_form_v3_authentication#:~:text=As%20this%20API%20is%20authenticated%2C
import axios, { Axios } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};
const formId = process.env.HUBSPOT_FORM_ID;
const portalId = process.env.HUBSPOT_PORTAL_ID;
const accessToken = process.env.HUBSPOT_PRIVATE_APP_TOKEN;

//fetch here to get custom object id  https://developers.hubspot.com/docs/api/crm/crm-custom-objects#:~:text=Home,of%20the%20following%3A

// const hubspot = require("@hubspot/api-client");

// const hubspotClient = new hubspot.Client({ accessToken });

// const limit = 100;
// const after = undefined;
// const properties = ["interested_in"];
// const propertiesWithHistory = undefined;
// const associations = undefined;
// const archived = false;

// create contact
// do it thoguht form ? https://legacydocs.hubspot.com/docs/methods/forms/forms_overview
// is this what I am already doing

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  async function formv3() {
    const email = req.body.email;
    const firstname = req.body.firstname;
    console.log("@@email", email);
    console.log("@@firstname", firstname);
    // Create the new request
    var url = `https://api.hsforms.com/submissions/v3/integration/secure/submit/${portalId}/${formId}`;

    // Example request JSON:
    const now = new Date();
    var data = {
      submittedAt: now,
      fields: [
        {
          objectTypeId: "0-1",
          name: "email",
          value: email,
        },
        {
          objectTypeId: "0-1",
          name: "firstname",
          value: firstname,
        },
        // {
        //   objectTypeId: "1801",
        //   name: "interested_in",
        //   value: "DNG Motors",
        // },
      ],
      context: {
        // hutk: ":hutk", // include this parameter and set it to the hubspotutk cookie value to enable cookie tracking on your submission
        pageUri: "www.example.com/page",
        pageName: "Example page",
      },
      legalConsentOptions: {
        // Include this object when GDPR options are enabled
        consent: {
          consentToProcess: true,
          text: "I agree to allow Example Company to store and process my personal data.",
          communications: [
            {
              value: true,
              subscriptionTypeId: 999,
              text: "I agree to receive marketing communications from Example Company.",
            },
          ],
        },
      },
    };

    var final_data = JSON.stringify(data);

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    try {
      const response = await axios.post(url, final_data, config);
      // const response = await axios.get("/crm/v3/properties/contacts", config);
      // const resJSON = console.log("@@response", response);
      // return res.status(200).json({ name: "John Doe" });
    } catch (e) {
      console.log("@@errrr", e);
      return res.status(500).json({ e });
    }
  }
  formv3();

  return res.status(200).json({ name: "John Doe" });
}

///
//https://developers.hubspot.com/docs/api/crm/contacts
//get list of contacts with info
// try {
//   const apiResponse = await hubspotClient.crm.contacts.basicApi.getPage(
//     limit,
//     after,
//     properties,
//     propertiesWithHistory,
//     associations,
//     archived
//   );
//   console.log(JSON.stringify(apiResponse, null, 2));
// } catch (e) {
//   e.message === "HTTP request failed"
//     ? console.error(JSON.stringify(e.response, null, 2))
//     : console.error(e);
// }
