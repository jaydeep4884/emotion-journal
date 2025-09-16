import { BsLinkedin, BsTelegram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router";
import PageContainer from "./PageContainer";
import DarkBrand from "../img/logo/brand.png";
import LightBrand from "../img/logo/lightBrand.png";

function Footer() {
  const navLinks = ["Home", "Insights", "Career", "About"];
  const socialIcons = [
    { icon: <BsTwitter className="w-5 h-5" />, href: "/" },
    { icon: <BsTelegram className="w-5 h-5" />, href: "/" },
    { icon: <BsLinkedin className="w-5 h-5" />, href: "/" },
  ];

  return (
    <PageContainer>
      <footer className="relative overflow-hidden">
        {/* Content */}
        <div className="relative z-1 px-6">
          <div className="py-6 md:py-12">
            <div className="flex flex-col md:flex-row justify-between gap-14">
              {/* Left Section */}
              <div>
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
                  Not just words, but emotions captured 🖌️
                </p>

                <div className="flex flex-wrap gap-6 pt-10">
                  {navLinks.map((link, i) =>
                    link === "About" ? (
                      <Link key={i} href="/about">
                        <span className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors cursor-pointer">
                          {link}
                        </span>
                      </Link>
                    ) : (
                      <span
                        key={i}
                        className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors cursor-pointer"
                      >
                        {link}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Right Section */}
              <div>
                <p className="text-lg font-semibold mb-3">Contact Us</p>
                <Link
                  href="mailto:contact@auraui.com"
                  className="text-gray-300 hover:text-white text-sm sm:text-base transition-colors"
                >
                  contact@auraui.com
                </Link>

                <div className="flex flex-row items-center gap-4 pt-8">
                  <p className="text-sm sm:text-base text-gray-400">
                    Follow us:
                  </p>
                  <div className="flex gap-3">
                    {socialIcons.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        target="_blank"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 bg-white/5 backdrop-blur-sm hover:bg-blue-500 hover:border-blue-500 hover:text-white text-gray-300 transition-all duration-300"
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
    </PageContainer>
  );
}

export default Footer;
