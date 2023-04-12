import Button from "@elements/inputs/Button";
import TextField from "@elements/inputs/TextField";
import BaseForm from "@modules/forms/base-form";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type MailingListSignUpFormInputs = {
  email: string;
  firstname: string;
};

const MailingListSignUpForm = () => {
  const methods = useForm<MailingListSignUpFormInputs>();
  const {
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<MailingListSignUpFormInputs> = async data => {
    const createContactRoute = "/api/hello";

    const response = await fetch(createContactRoute, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseToJson = await response.json();
    return responseToJson;
  };

  return (
    <BaseForm methods={methods} onSubmit={onSubmit}>
      <header>Sign up for the DNG newsletter</header>
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
      <footer>
        <Button type="submit">submit</Button>
      </footer>
    </BaseForm>
  );
};

export default MailingListSignUpForm;
