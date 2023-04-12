import Box from "@elements/layout/Box";
import { Paper, TextField as MUITextField } from "@mui/material";
import React, { useEffect } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import TextField from "@elements/inputs/TextField";

import SocialLinks from "@modules/SocialLinks";
import Button from "@elements/inputs/Button";

// https://react-hook-form.com/get-started/

// https://react-hook-form.com/get-started/

// title -
// left side
//

/**
 * title center
 * leftside
 *  - text
 *  - social
 *
 * right-side
 *  -actual form
 */

// note
// - I think the form level will need to be just the right side
// - I think react hook form is the way to go here

type Inputs = {
  email: string;
  firstname: string;
};
const MailingListForm = () => {
  const methods = useForm<Inputs>();
  const {
    formState: { errors },
    register,
  } = methods;

  const onSubmit: SubmitHandler<Inputs> = async data => {
    const createContactRoute = "/api/hello";

    const response = await fetch(createContactRoute, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      // mode: "cors", // no-cors, *cors, same-origin
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // redirect: "follow", // manual, *follow, error
      // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    const responseToJson = await response.json();
    console.log("@@response.json()", responseToJson);
    return responseToJson; // parses JSON response into native JavaScript objects
  };
  console.log("@@formState errors", errors);
  // console.log("@@email", watch("email")); // watch input value by passing the name of it
  // console.log("@@firstname", watch("firstname")); // watch input value by passing the name of it

  return (
    <Paper>
      <header> DeLorean Next Generation</header>
      <main>
        {/* left */}
        <div>
          <h2>Sign up for our mailing list</h2>
          <SocialLinks />
        </div>
        {/* right */}
        <div>
          <Box
            component="div"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
          >
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                {/* Form header */}
                <header>
                  <span>Form Title</span>
                </header>
                <main>
                  <TextField
                    label="Email"
                    options={{ required: true }}
                    fieldName="email"
                    errorMsg={errors.email && "This field is required"}
                  />

                  <TextField
                    label="First Name"
                    options={{ required: true }}
                    fieldName="firstname"
                    errorMsg={errors.firstname && "This field is required"}
                  />
                </main>
                <footer>
                  {/* Form footer */}
                  <Button type="submit">Submit</Button>
                </footer>
              </form>
            </FormProvider>
          </Box>
        </div>
      </main>
    </Paper>
  );
};

export default MailingListForm;
