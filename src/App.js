import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Header from './Pages/Components/Header/Header';
import Home from './Pages/Components/Home/Home';

function App() {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </div>
  );
}

export default App;