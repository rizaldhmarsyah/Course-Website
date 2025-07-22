import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import Testimonial from "./pages/Testimonial";
import FaqPage from "./pages/FaqPage";
import SyaratKetenPage from "./pages/SyaratKetenPage";

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={HomePage} />
        {/* menentukan tampilan utama website (HomePage) */}
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/testimonial" Component={Testimonial} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/syaratketentuan" Component={SyaratKetenPage} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
