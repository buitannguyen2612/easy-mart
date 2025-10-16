import type { EmailInput } from "@/models/home/interface";
import { object, ObjectSchema, string, type AnyObject } from "yup";

export const emailValidationSchema: ObjectSchema<
  EmailInput,
  AnyObject,
  object,
  ""
> = object().shape({
  email: string().required(),
});
