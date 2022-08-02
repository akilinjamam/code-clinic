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
import NotFound from "./Pages/SharedPage/NotFound/NotFound";
import Courses from "./Pages/Components/Courses/Courses";
import HtmlCourse from "./Pages/Components/Courses/HtmlCourse";
import JavascriptCourse from "./Pages/Components/Courses/JavascriptCourse";
import Cpp from "./Pages/Components/Courses/Cpp";

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

        <Route path="/courses" element={<Courses/>}>
          
        <Route index element={<HtmlCourse/>}></Route>
        <Route path="/courses/javascriptcourse" element={<JavascriptCourse/>}></Route>
        <Route path="/courses/c++" element={<Cpp/>}></Route>
        </Route>

        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
