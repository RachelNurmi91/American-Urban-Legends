import { Route, Routes } from 'react-router-dom';
import Home from './Screens/Home';
import Navbar from './Screens/Navbar';
import StateList from './Screens/StateList';
import State from './Screens/State';
import NotFound from './Screens/NotFound'
import Footer from './Screens/Footer';


function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/states/">
          <Route index element={<StateList />} />
          <Route path='/states/:id' element={<State />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
