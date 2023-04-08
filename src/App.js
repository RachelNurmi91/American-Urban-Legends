import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Navbar from './screens/Navbar';
import NortheastList from './screens/NortheastList';
import MidwestList from './screens/MidwestList';
import WestList from './screens/WestList';
import SouthwestList from './screens/SouthwestList';
import SoutheastList from './screens/SoutheastList';
import ReadSelectedStory from './screens/ReadSelectedStory';
import NotFound from './screens/NotFound'
import Footer from './screens/Footer';
import { Link } from 'react-router-dom';
import { LIST_STORIES } from './shared/ListStories';


function App() {

  const listOutAllRegionStories = () => {
    const fullStoryList = LIST_STORIES.map((story, i) => {
        return (
            <div className="col-4 text-center px-3 py-5" key={i}>
                <h6>{story.title}</h6>
                <p>{story.summary}</p>
                <Link to={story.id}>Read More</Link>
            </div>
        )
    })
    return fullStoryList;
  }

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/region/northeast">
          <Route index element={<NortheastList listOutAllRegionStories={listOutAllRegionStories} title={'Northeast'}/>} />
          <Route path='/region/northeast/:id' element={<ReadSelectedStory/>} />
        </Route>

        <Route path="/region/midwest">
          <Route index element={<MidwestList listOutAllRegionStories={listOutAllRegionStories} title={'Midwest'}/>} />
          <Route path='/region/midwest/:id' element={<ReadSelectedStory />} />
        </Route>

        <Route path="/region/west">
          <Route index element={<WestList listOutAllRegionStories={listOutAllRegionStories} title={'West'}/>} />
          <Route path='/region/west/:id' element={<ReadSelectedStory />} />
        </Route>

        <Route path="/region/southwest">
          <Route index element={<SouthwestList listOutAllRegionStories={listOutAllRegionStories} title={'Southwest'}/>} />
          <Route path='/region/southwest/:id' element={<ReadSelectedStory />} />
        </Route>

        <Route path="/region/southeast">
          <Route index element={<SoutheastList listOutAllRegionStories={listOutAllRegionStories} title={'Southeast'}/>} />
          <Route path='/region/southeast/:id' element={<ReadSelectedStory />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
