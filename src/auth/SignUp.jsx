import { useState } from "react";
import { Link } from "react-router";
import { InputAdornment, IconButton, TextField, Button } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <section className="relative">
      <div className="min-h-screen flex items-center justify-center relative">
        <div className="w-full max-w-lg border border-gray-800 backdrop-blur-xl rounded-2xl p-8 lg:p-10">
          {/* Heading  */}
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Sign up to{" "}
            <span className="text-fuchsia-300">Emotions Journal</span>
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Already have an account?{" "}
            <Link
              to="#"
              className="text-fuchsia-200 hover:text-fuchsia-400 transition-colors hover:underline"
            >
              Login
            </Link>
          </p>

          {/* Form */}
          <div className="my-5 space-y-6">
            <TextField
              label="FirstName"
              className="w-full"
              variant="standard"
              name="firstname"
            />
            <TextField
              label="Email"
              className="w-full"
              variant="standard"
              name="email"
              required
            />
            <TextField
              label="Password"
              className="w-full"
              variant="standard"
              type={showPassword ? "text" : "password"}
              name="password"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      edge="end"
                      aria-label="toggle password visibility"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              className="!w-full !font-medium !border-none !capitalize"
            >
              Register
            </Button>
          </div>

          {/* Footer Note */}
          <p className="mt-5 text-center text-xs text-gray-500 leading-relaxed">
            Design & Developed By Jaydeep Sagathiya 💖
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
