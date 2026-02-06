import * as Yup from "yup";

export const formSchema = Yup.object({
  email: Yup.string().required("Email required").email("Invalid email format"),
  password: Yup.string().required("Password required").min(6, "Password too short"),
});
