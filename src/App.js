import { Route, Routes } from "react-router-dom";
import Header from "./Pages/SharedPage/Header/Header";
import Home from "./Pages/Components/Home/Home";
import Quiz from "./Pages/Components/Home/QuizSection/Quiz";
import Login from "./Pages/Components/user/Login";
import Signup from "./Pages/Components/user/Signup";
import ContactUs from "./Pages/Contact/ContactUs"
import Footer from "./Pages/SharedPage/Footer/Footer";
import NotFound from "./Pages/SharedPage/NotFound/NotFound";
import Courses from "./Pages/Components/Courses/Courses";
import HtmlCourse from "./Pages/Components/Courses/HtmlCourse/HtmlCourse";
import JavascriptCourse from "./Pages/Components/Courses/JavascriptCourse/JavascriptCourse";
import Cpp from "./Pages/Components/Courses/CppCourse/Cpp";

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<Signup />}></Route>

        <Route path="/courses" element={<Courses />}>

          <Route index element={<HtmlCourse />}></Route>
          <Route path="/courses/javascriptcourse" element={<JavascriptCourse />}></Route>
          <Route path="/courses/c++" element={<Cpp />}></Route>
        </Route>
        <Route path="/contactUs" element={<ContactUs></ContactUs>}></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
