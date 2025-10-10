import { object, ObjectSchema, string, type AnyObject } from "yup";

export interface emailInput {
  email: string;
}

export const emailValidationSchema: ObjectSchema<
  emailInput,
  AnyObject,
  object,
  ""
> = object().shape({
  email: string().required(),
});
