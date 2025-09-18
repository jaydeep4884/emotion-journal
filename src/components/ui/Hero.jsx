import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PlayArrow, Close } from "@mui/icons-material";
import PageContainer from "../layout/PageContainer";
import VideoThumb from "../img/thumb/videoThumb.png";

function Hero() {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const text = [
    "A Journal",
    "A Mood Tracker",
    "An AI Artist",
    "Memory Keeper",
    "Emotion Journal",
  ];

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((i) => (i + 1) % text.length),
      2000
    );
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  return (
    <PageContainer>
      <section className="pt-20 text-center">
        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold dark:text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Craft AI Generated Images <br />
          with{" "}
          <AnimatePresence mode="wait">
            <motion.span
              key={text[index]}
              className="bg-clip-text bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] text-transparent"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {text[index]}
            </motion.span>
          </AnimatePresence>
        </motion.h1>

        <motion.p
          className="mt-2 sm:mt-6 text-base sm:text-xl font-medium dark:text-purple-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          " Because Every Mood Deserves a Color "
        </motion.p>

        {/* Video Section */}
        <motion.div
          className="relative max-w-5xl mx-auto mt-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="overflow-hidden rounded-2xl aspect-video relative group">
            <img
              className="object-cover w-full h-full transition duration-300 group-hover:scale-105 group-hover:opacity-80"
              src={VideoThumb}
              alt="Video Thumbnail"
            />
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-2xl" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <button
                onClick={() => setIsOpen(true)}
                className="flex flex-col items-center group/play"
              >
                <span className="flex items-center justify-center w-16 h-16 text-white border-2 border-indigo-600 rounded-full transition group-hover/play:bg-white/10">
                  <PlayArrow />
                </span>
                <span className="mt-4 text-sm font-medium text-white">
                  Play overview
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
              >
                <Close />
              </button>

              {/* Video */}
              <iframe
                src="https://youtu.be/06uOmXBK38k?si=uu6ciFZ1elGQuZR3"
                title="Video overview"
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageContainer>
  );
}

export default Hero;
