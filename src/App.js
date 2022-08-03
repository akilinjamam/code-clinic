import { Route, Routes } from "react-router-dom";
import Header from "./Pages/Components/Header/Header";
import Home from "./Pages/Components/Home/Home";
import Quiz from "./Pages/Components/Home/QuizSection/Quiz";
import auth from "./firebase.init";
import Login from "./Pages/Components/user/Login";
import Signup from "./Pages/Components/user/Signup";
import Footer from "./Pages/SharedPage/Footer/Footer";

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signUp" element={<Signup />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
