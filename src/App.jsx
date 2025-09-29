import { Route, Routes } from "react-router";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState, useMemo, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";

function App() {
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    const root = document.documentElement;
    if (mode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [mode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          index
          path="/"
          element={<Home setMode={setMode} mode={mode} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </ThemeProvider>
    // <>
    //   <ImageSlider />
    // </>
  );
}

export default App;
