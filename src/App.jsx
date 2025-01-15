// export default App;
import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SapBenefit from "./components/sapBenefit";
import AboutSection from "./components/AboutSection";
import RoadmapSap from "./components/RoadmapSap";
import CourseDetail from "./components/CourseDetail";
import UpcomingCourse from "./components/UpcomingCourse";
import ContactForm from "./components/ContactForm";
import ScrollTopBtn from "./components/ScrollTopBtn";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <AboutSection />
      <SapBenefit />
      <RoadmapSap />
      <CourseDetail />
      <UpcomingCourse />
      <ContactForm />
      <ScrollTopBtn />
      <Footer />
    </div>
  );
};

export default App;

// <div className="min-h-screen bg-green-900 text-white">
//   <header className="container mx-auto flex justify-between items-center py-6 px-4 lg:px-12">
//     <h1 className="text-yellow-300 text-2xl font-bold">Amelia Brown</h1>
//     <nav className="hidden md:flex space-x-6 text-white">
//       <a href="#about" className="hover:text-yellow-300">
//         About
//       </a>
//       <a href="#services" className="hover:text-yellow-300">
//         Services
//       </a>
//       <a href="#approach" className="hover:text-yellow-300">
//         Approach
//       </a>
//       <a href="#reviews" className="hover:text-yellow-300">
//         Reviews
//       </a>
//       <a href="#contact" className="hover:text-yellow-300">
//         Contact
//       </a>
//     </nav>
//     <a
//       href="#"
//       className="bg-yellow-300 text-green-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400"
//     >
//       Book a Free Call
//     </a>
//   </header>

//   <main className="container mx-auto px-4 lg:px-12 flex flex-col md:flex-row items-center justify-between">
//     <div className="text-center md:text-left max-w-lg">
//       <p className="text-xl text-yellow-300 font-bold">-Amelia Brown</p>
//       <h1 className="text-4xl md:text-5xl font-extrabold my-4">
//         A Business Coach <br />
//         <span className="underline decoration-yellow-300">
//           Who Delivers Results
//         </span>
//       </h1>
//       <p className="text-lg text-gray-200 mb-6">
//         Elevate your sales strategy and maximize your profits with the help
//         of business coaching. I can coach you and your business towards
//         profitability.
//       </p>
//       <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
//         <a
//           href="#"
//           className="bg-yellow-300 text-green-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400"
//         >
//           Book a Free Call
//         </a>
//         <a
//           href="#"
//           className="bg-transparent border border-yellow-300 text-yellow-300 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-green-900"
//         >
//           View Services
//         </a>
//       </div>
//     </div>
//     <div className="relative mt-12 md:mt-0">
//       <div className="bg-yellow-300 rounded-full w-72 h-72 absolute -z-10 transform translate-x-8"></div>
//       <img
//         src="https://via.placeholder.com/300x300" // Replace with the actual image URL
//         alt="Amelia Brown"
//         className="rounded-lg"
//       />
//     </div>
//   </main>
// </div>
