import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";
import DirectoryLand from "./components/landing-page/directory/directorylanding.component";
import Footer from "./components/footer/footer.component";
import Wallet from "./components/pages/Wallet";
import AboutUs from "./components/pages/AboutUs";
import Download from "./components/pages/Download";
import Faq from "./components/pages/faq";
import Chart from "./components/pages/Chart";
import ScrollToTop from "./scroll";

import { QueryClientProvider, QueryClient } from "react-query";
import Explore from "./components/pages/Explore";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='overflow-hidden'>
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
            <Route path='chart/:id' element={<Chart />}></Route>
          </Routes>
        </ScrollToTop>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
