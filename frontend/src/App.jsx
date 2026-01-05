import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CreateNote from "./pages/CreateNote";

function App() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-900 text-white">
            {/* Navbar */}
            <Navbar />

            <center><p className="text-gray-400">This is a public notes board. Leave a note so I know you were here 🙂</p></center>

            {/* Main Content */}
            <main className="flex-1 container mx-auto p-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<CreateNote />} />
                </Routes>
            </main>

            {/* Footer  */}
            <Footer />
        </div>
    );
}

export default App;
