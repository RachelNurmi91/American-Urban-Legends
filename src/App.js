import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Navbar from './screens/Navbar';
import StoryList from './screens/StoryList';
import ReadSelectedStory from './screens/ReadSelectedStory';
import NotFound from './screens/NotFound'
import Footer from './screens/Footer';
import Banner from './screens/Banner';
import { BannerContext } from './screens/Contexts/BannerContext';

function App() {
  const [showFullBanner, setShowFullBanner] = useState(null);
  const [storyData, setStoryData] = useState({});

  return (
    <div id='home'>
      <BannerContext.Provider value={{showFullBanner, setShowFullBanner, storyData, setStoryData}}>

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

      </BannerContext.Provider>
    
    </div>
  );
}

export default App;
