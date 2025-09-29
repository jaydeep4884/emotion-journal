import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input, ConfigProvider, theme, Tooltip } from "antd";
import PageContainer from "../layout/PageContainer";
import { IoSend } from "react-icons/io5";
import IconButton from "@mui/material/IconButton";
import { Field, Form, Formik } from "formik";
import ButtonUI from "./ButtonUI";
import { PageSkeleton } from "./PageSkeleton";
import ImageSlider from "./ImageSlider";

const JournalPage = () => {
  const { TextArea } = Input;
  const initialValues = { prompt: "" };
  const [generatedImage, setGeneratedImage] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    if (!values.prompt.trim()) return;
    setLoading(true);
    try {
      const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(
        values.prompt
      )}?t=${Date.now()}`;

      // preload image
      const img = new Image();
      img.src = url;
      img.onload = () => {
        setGeneratedImage(url);
        setLoading(false);
      };

      resetForm();
    } catch (err) {
      console.error("Error generating image:", err);
      setLoading(false);
    }
  };

  const handleSave = () => {
    console.log("Save Succesfully");
  };

  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <PageContainer>
        <div className="flex flex-col items-center text-center px-4 gap-5">
          {/* Heading */}
          <motion.p
            className="w-full mb-8 max-w-4xl text-base sm:text-lg md:text-xl font-medium dark:text-purple-100"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            Emotion Journal combines journaling and{" "}
            <span className="bg-clip-text bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] text-transparent">
              AI-Generated Art,
            </span>{" "}
            helping you express feelings through art and discover yourself in
            new ways. This tool converts your emotions into living art.
          </motion.p>

          {/* Prompt Area */}
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className="flex flex-col space-y-6 sm:space-y-12 w-full max-w-3xl mx-auto">
              {/* TextArea  */}
              <div className="flex items-center px-3 py-2 rounded-2xl border border-gray-600 transition-all dark:shadow-[0_0_20px_rgba(255,255,255,0.3)] shadow-[0_0_20px_rgba(0,0,0,0.6)] dark:hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]">
                <Field
                  as={TextArea}
                  size="large"
                  name="prompt"
                  placeholder="Write your thoughts..."
                  autoSize={{ minRows: 2, maxRows: 10 }}
                  className="flex-1 placeholder-slate-600 dark:placeholder-gray-400 bg-transparent text-black border-none focus:shadow-none focus:bg-transparent hover:bg-transparent dark:text-white resize-none"
                />

                {/* Send button */}
                <Tooltip title="Submit" color="purple">
                  <IconButton type="submit" size="medium">
                    <IoSend fontSize="inherit" />
                  </IconButton>
                </Tooltip>
              </div>

              {/* Image Card */}
              <div className="flex px-3 justify-center w-full">
                <div style={{ width: 400 }}>
                  {loading ? (
                    <PageSkeleton />
                  ) : generatedImage ? (
                    <div>
                      <motion.img
                        key={generatedImage}
                        draggable={false}
                        alt="AI Generated"
                        src={generatedImage}
                        className="!rounded-lg"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                      {/* Button Group */}
                      <div className="flex gap-5 sm:gap-20 mt-10 sm:mt-14 items-center justify-center">
                        <ButtonUI name="Save" onclick={handleSave} />
                        <ButtonUI name="Refresher" />
                        <ButtonUI name="Cancel" />
                      </div>
                    </div>
                  ) : (
                    <ImageSlider />
                  )}
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </PageContainer>
    </ConfigProvider>
  );
};

export default JournalPage;
