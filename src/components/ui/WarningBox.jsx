import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import { WarningOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const PopupMsg = () => {
  const [showPopup, setShowPopUp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopUp(true);
    }, 3000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {showPopup ? <PopupMsg /> : null}
      <Modal
        open={showPopup}
        onCancel={() => setShowPopUp(false)}
        footer={null}
        centered
        closeIcon={false}
        styles={{
          mask: { backdropFilter: "blur(8px)" },
          content: {
            borderRadius: "16px",
            margin: "2rem",
            padding: "32px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.2)",
          },
        }}
      >
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Animated Icon */}
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-yellow-500 text-6xl"
          >
            <WarningOutlined />
          </motion.div>

          {/* Title */}
          <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-500 bg-clip-text text-transparent">
            Under Construction
          </h2>

          {/* Message */}
          <p className="text-gray-600">
            We’re working hard to bring you something amazing. Please check back
            soon 🚀
          </p>

          {/* Close Button */}
          <Button
            type="primary"
            shape="round"
            size="large"
            onClick={() => setShowPopUp(false)}
          >
            Got it
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default PopupMsg;
