import { HTMLAttributes, InputHTMLAttributes } from "react";
import { InputFormContainer } from "./style";

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement>{
  optional?: boolean;
  containerProps?: HTMLAttributes<HTMLDivElement>;
}

export function InputForm({ containerProps, ...props }: InputFormProps) {
  return (
    <InputFormContainer {...containerProps}>
      <input {...props} />
    </InputFormContainer>
  )
}