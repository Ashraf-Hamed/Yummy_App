import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

export default function Contact() {
  let schema = Yup.object({
    name: Yup.string()
      .required("Name Cant be empty")
      .min(5, "name must be at least 5 Char")
      .max(25, "name must be at most 25 Char"),
    email: Yup.string()
      .required("Email is required")
      .email("Enter a valid Email "),
    age: Yup.number()
      .required("Age Cant be empty")
      .min(18, "you  must be at least 18 year")
      .max(50, "you  must be at least 50 year"),
    password: Yup.string()
      .matches(/^[A-Z]/)
      .required("password is required")
      .min(5, "password must be at least 5 Char")
      .max(15, "password must be at most 15 Char"),
    rePassword: Yup.string()
      .required("rePassword Cant be empty")
      .oneOf([Yup.ref("password")], "password and rePassword must match"),
    phone: Yup.string()
      .required("phone is required")
      .matches(/^01[0125][0-9]{8}$/, "please Enter a Vaild Phone Number"),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      age: "",
      password: "",
      rePassword: "",
      phone: "",
    },

    validationSchema: schema,
    onSubmit: logger,
  });

  console.log(formik);

  function logger() {
    console.log(formik.values);
  }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="row g-4 my-5 w-75 mx-auto ">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name ?<div className="alert alert-danger w-100 mt-2">
            <div className="d-flex justify-content-between align-items-center">
              {formik.errors.name}
            </div>
          </div> : null}
            
          </div>
          <div className="col-md-6">
            <input
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="emailInput"
              type="email"
              className="form-control "
              placeholder="Enter Your Email"
            />
            {formik.errors.email && formik.touched.email ?<div className="alert alert-danger w-100 mt-2 ">
            <div className="d-flex justify-content-between align-items-center">
              {formik.errors.email}
            </div>
          </div> : null}
          </div>
          <div className="col-md-6">
            <input
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            
              id="phoneInput"
              type="text"
              className="form-control "
              placeholder="Enter Your Phone"
            />
            {formik.errors.phone && formik.touched.phone ?<div className="alert alert-danger w-100 mt-2 ">
            <div className="d-flex justify-content-between align-items-center">
              {formik.errors.phone}
            </div>
          </div> : null}
          </div>
          <div className="col-md-6">
            <input
              name="age"
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="ageInput"
              type="number"
              className="form-control "
              placeholder="Enter Your Age"
            />
            {formik.errors.age && formik.touched.age ?<div className="alert alert-danger w-100 mt-2 ">
            <div className="d-flex justify-content-between align-items-center">
              {formik.errors.age}
            </div>
          </div> : null}
          </div>
          <div className="col-md-6">
            <input
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="passwordInput"
              type="password"
              className="form-control "
              placeholder="Enter Your Password"
            />
            {formik.errors.password && formik.touched.password ?<div className="alert alert-danger w-100 mt-2 ">
            <div className="d-flex justify-content-between align-items-center">
              {formik.errors.password}
            </div>
          </div> : null}
          </div>
          <div className="col-md-6">
            <input
              name="rePassword"
              value={formik.values.rePassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="repasswordInput"
              type="password"
              className="form-control "
              placeholder="Repassword"
            />
            {formik.errors.rePassword && formik.touched.rePassword ?<div className="alert alert-danger w-100 mt-2 ">
            <div className="d-flex justify-content-between align-items-center">
              {formik.errors.rePassword}
            </div>
          </div> : null}
          </div>
        </div>
        <button
           
          type="submit"
          className="btn btn-outline-success px-2 mt-3 mx-auto d-block"
          disabled = {formik.isValid && formik.dirty ? false : true}
        >
          Submit
        </button>
      </form>
    </>
  );
}
