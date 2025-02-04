import * as Yup from "yup";

const contactValidationSchema = Yup.object({
  name: Yup.string()
  .min(3, "Name must be at least 3 characters")
  .max(70, "Name is too long")
  .matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/, "Only alphabets with single spaces allowed") 
  .required("Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  mobile: Yup.string()
  .matches(/^(0|91)?[6-9][0-9]{9}$/, "Invalid Mobile Number")
  .required("Mobile number is required"),
  message: Yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
});

export default contactValidationSchema;
