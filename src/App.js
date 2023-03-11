import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Navbar from './screens/Navbar';
import StateList from './screens/StateList';
import State from './screens/State';
import NotFound from './screens/NotFound'
import Footer from './screens/Footer';


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
