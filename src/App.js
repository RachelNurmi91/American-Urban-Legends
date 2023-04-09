import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Navbar from './screens/Navbar';
import StoryList from './screens/StoryList';
import ReadSelectedStory from './screens/ReadSelectedStory';
import NotFound from './screens/NotFound'
import Footer from './screens/Footer';
import Banner from './screens/Banner';


function App() {

  return (
    <div id='home'>
    <Navbar />
    <Banner />
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path=":region">
          <Route index element={<StoryList/>} />
          <Route path=':id' element={<ReadSelectedStory/>} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
