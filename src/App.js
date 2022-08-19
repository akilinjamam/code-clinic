import { Route, Routes } from "react-router-dom";
import Header from "./Pages/SharedPage/Header/Header";
import Home from "./Pages/Components/Home/Home";
import Quiz from "./Pages/Components/Home/QuizSection/Quiz";
import Login from "./Pages/Components/user/Login";
import Signup from "./Pages/Components/user/Signup";
import ContactUs from "./Pages/Contact/ContactUs";
import Footer from "./Pages/SharedPage/Footer/Footer";
import NotFound from "./Pages/SharedPage/NotFound/NotFound";
import Courses from "./Pages/Components/Courses/Courses";
import JavascriptCourse from "./Pages/Components/Courses/JavascriptCourse/JavascriptCourse";
import Cpp from "./Pages/Components/Courses/CppCourse/Cpp";
import Introduction from "./Pages/Components/Courses/HtmlCourse/Introduction";
import EnrollMain from "./Pages/Components/Home/EnrollSection/EnrollMain";
import About from "./Pages/Components/About";
import Intro from "./Pages/Components/Courses/HtmlCourse/Intro";
import Attributes from "./Pages/Components/Courses/HtmlCourse/Attributes";
import HtmlStyle from "./Pages/Components/Courses/HtmlCourse/HtmlStyle";
import HtmlImage from "./Pages/Components/Courses/HtmlCourse/HtmlImage";
import HtmlCce from "./Pages/Components/Courses/HtmlCourse/HtmlCce";
import Editor from "./Pages/Components/Editor/Editor";
import InterviewPrep from "./Pages/Components/Home/CompilerHome/InterviewPrep/InterviewPrep";
import JsCourses from "./Pages/Components/Courses/JsCourses";
import JsSyntex from "./Pages/Components/Courses/JavascriptCourse/JsSyntex";
import JsVariables from "./Pages/Components/Courses/JavascriptCourse/JsVariables";
import JsLet from "./Pages/Components/Courses/JavascriptCourse/JsLet";
import JsConst from "./Pages/Components/Courses/JavascriptCourse/JsConst";
import CplusplusCourses from "./Pages/Components/Courses/CplusplusCourses";

import JavascriptQa from "./Pages/Components/Home/CompilerHome/InterviewPrep/JavascriptQa";
import HtmlQa from "./Pages/Components/Home/CompilerHome/InterviewPrep/HtmlQa";

import PythonCompiler from "./Pages/Components/Editor/PythonCompiler";
import AdminHome from "./Pages/Components/AdminPanel/AdminHome";
import AdminDashboard from "./Pages/Components/AdminPanel/AdminDashboard";

import UserProfile from "./Pages/UserDashboard/UserProfile";
import Profile from "./Pages/UserDashboard/Profile";
import MyCourse from "./Pages/UserDashboard/MyCourse";
import MailContact from "./Pages/Contact/MailContact/MailContact";

import HtmlCourseInput from "./Pages/Components/Courses/HtmlCourseInput/HtmlCourseInput";
import JavascriptCourseInput from "./Pages/Components/Courses/JavascriptCourseInput/JavascriptCourseInput";
import CssCourseInput from "./Pages/Components/Courses/CssCourseInput/CssCourseInput";
import CPlusPlusCourseInput from "./Pages/Components/Courses/CPlusPlusCourseInput/CPlusPlusCourseInput";
import AttributeModify from "./Pages/Components/Courses/HtmlCourse/AttributeModify";

import AddReview from "./Pages/UserDashboard/AddReview";


import Settings from "./Pages/Components/quizSection/Settings";
import Questions from "./Pages/Components/quizSection/Questions";
import FinalScreen from "./Pages/Components/quizSection/FinalScreen";

function App() {
  return (
    <div className="mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<Signup />}></Route>
        <Route path="/EnrollMain" element={<EnrollMain />}></Route>
        <Route path="/contactUs" element={<ContactUs />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Editor" element={<Editor />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/email_contact" element={<MailContact />}></Route>


      

        <Route path="/pythonCom" element={<PythonCompiler />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/questions" element={<Questions />}></Route>
        <Route path="/score" element={<FinalScreen />}></Route>
  {/* html course section */}

        <Route path="/introduction" element={<Introduction />}></Route>

        <Route path="/courses" element={<Courses />}>
          <Route index element={<Intro />}></Route>

          <Route path="/courses/intro" element={<Intro />} />

          <Route path="/courses/attribute" element={<Attributes />} />

          <Route path="/courses/htmlStyle" element={<HtmlStyle />} />

          <Route path="/courses/htmlImage" element={<HtmlImage />} />

          <Route
            path="/courses/htmlCce"
            element={<HtmlCce />}
          />
          <Route
            path="/courses/cpp"
            element={<Cpp />}
          />

          {/* modify section */}

          <Route
            path="/courses/attModify"
            element={<AttributeModify />}
          />


          <Route path="/courses/htmlCce" element={<HtmlCce />} />
          <Route path="/courses/cpp" element={<Cpp />} />

        </Route>
        {/* Interview Preparation Section Routes */}

        <Route path="/interview-prep" element={<InterviewPrep />}>
          {/* <Route index element={<Intro />}></Route> */}

          <Route path="/interview-prep/javascript" element={<JavascriptQa />} />

          <Route path="/interview-prep/javascript" element={<JavascriptQa />} />

          <Route path="/interview-prep/html" element={<HtmlQa />} />

          <Route path="/interview-prep/html" element={<HtmlQa />} />
        </Route>

        {/* Ends of Interview Preparation Section Routes */}
        <Route path="/jsCourses" element={<JsCourses></JsCourses>}>
          <Route index element={<JavascriptCourse />} />

          <Route path="/jsCourses/jsSyntex" element={<JsSyntex />} />

          <Route path="/jsCourses/jsVariables" element={<JsVariables />} />

          <Route path="/jsCourses/jsLet" element={<JsLet />} />

          <Route path="/jsCourses/jsConst" element={<JsConst />} />
        </Route>

        <Route path="/cplusPlusCourses" element={<CplusplusCourses />}>


        </Route>

      

          {/* Admin Section */}
           <Route path="/adminDashboard" element={<AdminDashboard />}>


          {/* html course data input section */}
          <Route path="/adminDashboard/htmlCourseInput" element={<HtmlCourseInput />}></Route>


          {/* js course data input section */}
          <Route path="/adminDashboard/jsCourseInput" element={<JavascriptCourseInput />}></Route>

          {/* css course data input section */}
          <Route path="/adminDashboard/cssCourseInput" element={<CssCourseInput />}></Route>

          {/* c++ course data input section */}
          <Route path="/adminDashboard/cplusCourseInput" element={<CPlusPlusCourseInput />}></Route>

          <Route path="/adminDashboard/adminHome" element={<AdminHome />} />
        </Route>




          <Route path="/cplusPlusCourses" element={<CppIntro />} />
        </Route>

        <Route path="*" element={<NotFound />} />


        {/* User Profile route  */}

        <Route path="/dashboard" element={<UserProfile />}>
          <Route index element={<Profile />}></Route>


          <Route path="/dashboard/my_course" element={<MyCourse />} />


          <Route
            path="/dashboard/my_course"
            element={<MyCourse />}
          />
          <Route
            path="/dashboard/add_review"
            element={<AddReview />}
          />

        </Route>




        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
