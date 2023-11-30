

import React from 'react';
import './App.css';
import AppFooter from './Pages/AppFooter';
import Card from './Pages/Card';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Pages/SideMenu';
import Head from './Pages/Head';
import AppHeader from './Pages/Appheader';
import Page from './components/Page';
// import QRCodeGenerator from './components/Qrcode';
import Example from './components/Qrcode';

function App() {
  return (
    <div className="App">
      <div>
      {/* Your other components and routes */}
      {/* <Routes>
        <Route path="/card" element={<Card />} />
      </Routes> */}
      <Routes>
       <Route path="/" element={<AppFooter />} />
       <Route path="/card" element={<Card />} />
       <Route path="/side" element={<Sidebar />} />
       <Route path="/head" element={<Head />} />
       <Route path="/app" element={<AppHeader />} />
       <Route path="/page" element={<Page />} />
       <Route path="/qr" element={<Example />} />
       </Routes>
      {/* <AppFooter /> */}
      </div>
    </div>
  );
}

export default App;

