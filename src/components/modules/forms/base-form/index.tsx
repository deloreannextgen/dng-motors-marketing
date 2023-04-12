import React from "react";
import { FormProvider } from "react-hook-form";

interface IBassForm {
  methods: any;
  onSubmit: any;
  children?: React.ReactNode;
}

const BaseForm = ({ methods, onSubmit, children }: IBassForm) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={() => onSubmit}>{children}</form>
    </FormProvider>
  );
};

export default BaseForm;
