import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Components/Header/Header';
import Home from './Pages/Components/Home/Home';
import Footer from './Pages/SharedPage/Footer/Footer';

function App() {
  return (
    <div className="md:container mx-auto">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;