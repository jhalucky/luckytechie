import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./components/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Social from "./pages/Social";
import ThemeToggle from "./components/ThemeToggle";
import ThankYou from "./pages/Thankyou";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-neutral-900 text-black dark:text-white transition-all duration-300">
        <ScrollToTop />
        <Toaster position="top-center" reverseOrder={false} />
        <div className="flex justify-end p-4">
          <ThemeToggle />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/social" element={<Social />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;




