import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Navbar from './screens/Navbar';
import NortheastList from './screens/NortheastList';
import Northeast from './screens/Northeast';
import NotFound from './screens/NotFound'
import Footer from './screens/Footer';


function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/region/northeast">
          <Route index element={<NortheastList />} />
          <Route path='region/northeast/:id' element={<Northeast />} />
        </Route>
    
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
