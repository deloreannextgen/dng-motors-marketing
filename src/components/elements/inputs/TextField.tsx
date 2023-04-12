import React from "react";
import {
  TextField as MUITextField,
  TextFieldProps as MUITextFieldProps,
} from "@mui/material";
import {
  FieldPath,
  FieldValues,
  RegisterOptions,
  useFormContext,
} from "react-hook-form";

type TextFieldProps<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues>
> = MUITextFieldProps & {
  fieldName: TFieldName;
  options?: RegisterOptions<TFieldValues, TFieldName>;
  errorMsg?: string;
};

const TextField = <
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues>
>(
  props: TextFieldProps<TFieldValues, TFieldName>
) => {
  const { errorMsg, fieldName, options, ...rest } = props;
  const { register } = useFormContext<TFieldValues>();
  return (
    <>
      <MUITextField {...register(fieldName, options)} {...rest} />
      {errorMsg && <span>{errorMsg}</span>}
    </>
  );
};

export default TextField;
