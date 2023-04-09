// https://legacydocs.hubspot.com/docs/methods/lists/add_contact_to_list

const DNG_MAILING_LIST_ID = "13";

import { NextApiRequest, NextApiResponse } from "next";
type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "Add Contact to List" });
}
