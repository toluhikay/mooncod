import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/navigation.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
      <div>
          <Routes>
            <Route path='/' element={<Navigation/>}>
        
            </Route>
          </Routes>
          <Footer/>
      </div>

  );
}

export default App;
