import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Navbar from './screens/Navbar';
import StoryList from './screens/StoryList';
import ReadSelectedStory from './screens/ReadSelectedStory';
import NotFound from './screens/NotFound'
import Footer from './screens/Footer';


function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path=":region">
          <Route index element={<StoryList/>} />
          <Route path=':id' element={<ReadSelectedStory/>} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
