import Box from "@elements/layout/Box";
import { Paper, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
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
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <TextField
                defaultValue="jzd@dng.com"
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
              {/* include validation with required or other standard HTML validation rules */}
              <TextField {...register("firstname", { required: true })} />
              {/* errors will return when field validation fails  */}
              {errors.firstname && <span>This field is required</span>}
              <Button type="submit">Submit</Button>
            </form>
          </Box>
        </div>
      </main>
    </Paper>
  );
};

export default MailingListForm;
