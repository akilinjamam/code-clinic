import { Route, Routes } from "react-router-dom";
import Header from "./Pages/SharedPage/Header/Header";
import Home from "./Pages/Components/Home/Home";
import Quiz from "./Pages/Components/Home/QuizSection/Quiz";
import Login from "./Pages/Components/user/Login";
import Signup from "./Pages/Components/user/Signup";
import Footer from "./Pages/SharedPage/Footer/Footer";
import About from "./Pages/Components/About";
import ContactUs from "./Pages/Contact/ContactUs";
import Learn from "./Pages/Learnlanguage/Learn";
import Language from "./Pages/Learnlanguage/Component/Language";

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact_us" element={<ContactUs />}></Route>
        <Route path="/learn" element={<Learn />}></Route>
        <Route path="/learn/:Language" element={<Language />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<Signup />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
