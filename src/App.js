import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Components/Header/Header';
import Home from './Pages/Components/Home/Home';


function App() {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;