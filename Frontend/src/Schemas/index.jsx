import * as Yup from "yup"

export const signUpSchema = Yup.object({
    email: Yup.string().email().required("Please enter you email"),
    password: Yup.string().min(6).required("Please enter you password")
})