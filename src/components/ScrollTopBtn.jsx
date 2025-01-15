import { useState, useEffect } from "react";
import ScrollBtn from "../assets/ScrollBtn.png";
const ScrollTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 p-5 rounded-full bg-white border-2 border-green-800 text-green-800 shadow-md hover:bg-green-800 hover:text-white transition-all font-bold justify-center items-center flex animate-bounce"
      >
        <img
          src={ScrollBtn}
          alt="Scroll to Top"
          className=" h-auto rotate-180 max-w-4"
        />
      </button>
    )
  );
};

export default ScrollTopBtn;
