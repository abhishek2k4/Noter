import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CreateNote from "./pages/CreateNote";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-note" element={<CreateNote />} />
        </Routes>
      </main>

      {/* Footer  */}
      <Footer />
    </>
  );
}

export default App;
