import { Route, Routes } from "react-router-dom";
import Header from "./Pages/Components/Header/Header";
import Home from "./Pages/Components/Home/Home";
import Quiz from "./Pages/Components/Home/QuizSection/Quiz";
import Footer from "./Pages/SharedPage/Footer/Footer";

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
