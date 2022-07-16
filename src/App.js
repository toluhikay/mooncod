import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";
import DirectoryLand from "./components/landing-page/directory/directorylanding.component";
import Footer from "./components/footer/footer.component";
import Wallet from "./components/pages/Wallet";
import AboutUs from "./components/pages/AboutUs";
import Download from "./components/pages/Download";
import LegalPolicy from "./components/footer/footer pages/legalPolicy.footer";
import Faq from "./components/pages/faq";
import TermsConditions from "./components/footer/footer pages/termsCondition";
import ScrollToTop from "./scroll";

import { QueryClientProvider, QueryClient } from "react-query";
import Explore from "./components/pages/Explore";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <ScrollToTop>
          <Routes>
            {/* <Route path='/' element={<Navigation />}> */}
            <Route path='/' element={<Navigation />}></Route>
            <Route index element={<DirectoryLand />}></Route>
            <Route path='wallet' element={<Wallet />}></Route>
            <Route path='about' element={<AboutUs />}></Route>
            <Route path='faq' element={<Faq />}></Route>
            <Route path='download' element={<Download />}></Route>
            <Route path='explore' element={<Explore />}></Route>
            <Route path="legalPolicy" element={<LegalPolicy/>}></Route>
            <Route path="terms" element={<TermsConditions/>} ></Route>
          </Routes>
        </ScrollToTop>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
