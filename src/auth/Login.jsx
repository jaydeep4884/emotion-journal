import { useState } from "react";
import { Link } from "react-router";
import { InputAdornment, IconButton, TextField, Button } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Field, Form, Formik } from "formik";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const initialValues = { email: "", password: "" };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-transparent sm:border sm:border-gray-800 backdrop-blur-xl rounded-2xl p-6 sm:p-8">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Login to
          <br />
          <span className="text-fuchsia-300">Emotions Journal</span>
        </h2>
        <p className="mt-3 text-sm text-gray-400">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-fuchsia-200 hover:text-fuchsia-400 hover:underline"
          >
            Register
          </Link>
        </p>

        {/* Form */}
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className="mt-6 space-y-5">
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
            <div className="!mt-3 text-sm text-right text-gray-400">
              <Link className="hover:underline hover:text-cyan-500">
                Forgot Password ?
              </Link>
            </div>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              className="!mt-6 !font-medium !capitalize"
            >
              Login
            </Button>
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

export default Login;
