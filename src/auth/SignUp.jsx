import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { InputAdornment, IconButton, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import { token } from "../contexts/context";
import { message } from "antd";
import ButtonUI from "../components/ui/ButtonUI";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const initialValues = { name: "", email: "", password: "" };
  const Token = useContext(token);
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const res = await axios.post(
        "https://myapigenerator.onrender.com/auth/signUp",
        values,
        {
          headers: {
            Authorization: Token,
          },
        }
      );
      if (res.data.Data.status === "Success") {
        navigate("/login");
        messageApi.open({
          type: "error",
          content: "User Register Successfully !!",
        });
      }
    } catch (error) {
      console.log(error);
      messageApi.open({
        type: "warning",
        content: "Something Went Wrong !!",
      });
    } finally {
      resetForm();
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      {contextHolder}
      <div className="w-full max-w-sm bg-transparent sm:border sm:border-gray-800 backdrop-blur-xl rounded-2xl p-6 sm:p-8">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold dark:text-white">
          Sign up to
          <br />
          <span className="text-fuchsia-300">Emotions Journal</span>
        </h2>
        <p className="mt-3 text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-fuchsia-200 hover:text-fuchsia-400 hover:underline"
          >
            Login
          </Link>
        </p>

        {/* Form */}
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className="mt-6 space-y-5">
            <Field
              as={TextField}
              label="First Name"
              variant="standard"
              name="name"
              fullWidth
            />
            <Field
              as={TextField}
              label="Email"
              type="email"
              variant="standard"
              name="email"
              required
              fullWidth
            />
            <Field
              as={TextField}
              label="Password"
              variant="standard"
              type={showPassword ? "text" : "password"}
              name="password"
              required
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <ButtonUI name="Register" />
          </Form>
        </Formik>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-gray-500">
          Design & Developed By Jaydeep Sagathiya 💖
        </p>
      </div>
    </section>
  );
};

export default SignUp;
