const Yup = require("yup");

const formSchema = Yup.object({
    email: Yup.string()
        .required("Email required")
        .email("Invalid email format"),
    password: Yup.string()
        .required("Password required")
        .min(6, "Password too short"),
});

module.exports = { formSchema }