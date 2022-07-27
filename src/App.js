import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Header from './Pages/Components/Header/Header';
import Home from './Pages/Components/Home/Home';
import ContactUs from './Pages/ContactUs/ContactUs';

function App() {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact_us' element={<ContactUs/>}></Route>
      </Routes>
    </div>
  );
}

export default App;