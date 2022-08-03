import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Header from './Pages/Components/Header/Header';
import Home from './Pages/Components/Home/Home';
import ContactUs from './Pages/ContactUs/ContactUs';
import Language from './Pages/LearnLanguage/Components/Language';
import Learn from './Pages/LearnLanguage/Learn';
import Footer from './Pages/SharedPage/Footer/Footer';

function App() {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact_us' element={<ContactUs/>}></Route>
        <Route path='/learn' element={<Learn/>}></Route>
        <Route path='/learn/:Language' element={<Language/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;