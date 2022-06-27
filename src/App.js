import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";
import DirectoryLand from "./components/landing-page/directory/directorylanding.component";
import Footer from "./components/footer/footer.component";
import Wallet from "./components/pages/Wallet";
import AboutUs from "./components/pages/AboutUs";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<DirectoryLand />}></Route>
        <Route path='/' element={<Navigation />}></Route>
        <Route path='wallet' element={<Wallet />}></Route>
        <Route path='about' element={<AboutUs />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
