import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Repo from './pages/Repo';
import Errorpage from './pages/Errorpage';


const App = () =>  {
  return <BrowserRouter>
    <main>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/404' element={<NotFound/>}  />
        <Route path='/repo/:id' element={<Repo/>}  />
        <Route path='/error' element={<Errorpage/>}  />
      </Routes>
      <Footer />
    </main>
    </BrowserRouter>;
}

export default App;