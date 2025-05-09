import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { PageLoader } from "./components/Body/PageLoader";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Experience } from "./pages/Experience/Experience";
import { Education } from "./pages/Education/Education";
import { Contact } from "./pages/Contact/Contact";


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <PageLoader />;

  return (
    <div className={styles.App}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;