import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router";
import DarkBrand from "../img/logo/brand.png";
import LightBrand from "../img/logo/lightBrand.png";
import Container from "@mui/material/Container";

function Footer() {
  const navLinks = ["Journal", "Timelines", "Analytics", "Feedback"];
  const socialIcons = [
    { icon: <BsTwitter className="w-5 h-5" />, href: "/" },
    {
      icon: <BsGithub className="w-5 h-5" />,
      href: "https://github.com/jaydeep4884",
    },
    {
      icon: <BsLinkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/sagathiya-jaydeep/",
    },
  ];

  return (
    <Container maxWidth="lg">
      <footer className="relative border-t border-gray-300 dark:border-gray-800">
        {/* Content */}
        <div className="relative z-1">
          <div className="py-6 md:py-12">
            <div className="flex flex-col md:flex-row justify-between gap-14">
              {/* Left Section */}
              <div className="flex flex-col items-center sm:items-start ">
                <img
                  src={LightBrand}
                  alt="Logo"
                  className="block dark:hidden h-12 mb-4"
                />
                <img
                  src={DarkBrand}
                  alt="Logo"
                  className="hidden dark:block h-12 mb-4"
                />
                <p className="text-blue-400 font-medium">
                  Not just words, but emotions captured
                </p>

                <div className="flex flex-col sm:flex-row items-center  gap-6 pt-5">
                  {navLinks.map((link, i) => (
                    <p
                      key={i}
                      className="text-sm sm:text-base dark:text-gray-300 cursor-pointer"
                    >
                      {link}
                    </p>
                  ))}
                </div>
              </div>
              {/* Right Section */}
              <div className="flex flex-col items-center sm:items-start">
                <p className="text-lg font-semibold mb-3">Contact Us</p>
                <Link
                  href="mailto:sagathiyajaydeep66@gmail.com"
                  className="dark:text-gray-300 hover:text-gray-400 text-sm sm:text-base transition-colors"
                >
                  jaydeepcreatives2024@gmail.com
                </Link>

                <div className="flex flex-row items-center gap-4 pt-5">
                  <p className="text-sm sm:text-base dark:text-gray-400">
                    Follow us:
                  </p>
                  <div className="flex gap-3">
                    {socialIcons.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.href}
                        target="_blank"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 bg-white/5 backdrop-blur-sm hover:bg-blue-500 hover:border-blue-500 hover:text-white dark:text-gray-300 transition-all duration-300"
                      >
                        {item.icon}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 border-t border-gray-800/70 py-6 text-center text-xs text-gray-500">
          Design & Developed By Sagathiya Jaydeep 💖
        </div>
      </footer>
    </Container>
  );
}

export default Footer;
