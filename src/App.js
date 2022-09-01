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
import HtmlStyleModify from "./Pages/Components/Courses/HtmlCourse/HtmlStyleModify";
import HtmlImageModify from "./Pages/Components/Courses/HtmlCourse/HtmlImageModify";
import HtmlCceModify from "./Pages/Components/Courses/HtmlCourse/HtmlCceModify";
import IntroModify from "./Pages/Components/Courses/HtmlCourse/IntroModify";
import JavascriptCourseModify from "./Pages/Components/Courses/JavascriptCourse/JavascriptCourseModify";
import JsConstModify from "./Pages/Components/Courses/JavascriptCourse/JsConstModify";
import JsLetModify from "./Pages/Components/Courses/JavascriptCourse/JsLetModify";
import JsSyntexModify from "./Pages/Components/Courses/JavascriptCourse/JsSyntexModify";
import JsVariablesModify from "./Pages/Components/Courses/JavascriptCourse/JsVariablesModify";

import AttributeModify2 from "./Pages/Components/Courses/HtmlCourse/AttributeModify2";
import AttributeModify3 from "./Pages/Components/Courses/HtmlCourse/AttributeModify3";
import AttributeModify4 from "./Pages/Components/Courses/HtmlCourse/AttributeModify4";
import AttributeModify5 from "./Pages/Components/Courses/HtmlCourse/AttributeModify5";
import AttributeModify6 from "./Pages/Components/Courses/HtmlCourse/AttributeModify6";
import AttributeModify7 from "./Pages/Components/Courses/HtmlCourse/AttributeModify7";
import AttributeModify8 from "./Pages/Components/Courses/HtmlCourse/AttributeModify8";
import AttributeModify9 from "./Pages/Components/Courses/HtmlCourse/AttributeModify9";
import AttributeModify10 from "./Pages/Components/Courses/HtmlCourse/AttributeModify10";
import AttributeModify11 from "./Pages/Components/Courses/HtmlCourse/AttributeModify11";
import AttributeModify12 from "./Pages/Components/Courses/HtmlCourse/AttributeModify12";
import AttributeModify13 from "./Pages/Components/Courses/HtmlCourse/AttributeModify13";
import AttributeModify14 from "./Pages/Components/Courses/HtmlCourse/AttributeModify14";
import AttributeModify15 from "./Pages/Components/Courses/HtmlCourse/AttributeModify15";
import AttributeModify16 from "./Pages/Components/Courses/HtmlCourse/AttributeModify16";


import RequireAuth from "./Pages/Components/user/RequireAuth";
import CssCourses from "./Pages/Components/Courses/CplusplusCourses";
import ProfileEditor from "./Pages/UserDashboard/ProfileEditor";
import OthersSaying from "./Pages/Components/Home/OthersSaying/OthersSaying";
import HtmlStyleModify1 from "./Pages/Components/Courses/HtmlCourse/HtmlStyleModify/HtmlStyleModify1";
import HtmlStyleModify2 from "./Pages/Components/Courses/HtmlCourse/HtmlStyleModify/HtmlStyleModify2";
import HtmlStyleModify3 from "./Pages/Components/Courses/HtmlCourse/HtmlStyleModify/HtmlStyleModify3";
import HtmlStyleModify4 from "./Pages/Components/Courses/HtmlCourse/HtmlStyleModify/HtmlStyleModify4";
import HtmlStyleModify5 from "./Pages/Components/Courses/HtmlCourse/HtmlStyleModify/HtmlStyleModify5";
import HtmlStyleModify6 from "./Pages/Components/Courses/HtmlCourse/HtmlStyleModify/HtmlStyleModify6";
import HtmlStyleModify7 from "./Pages/Components/Courses/HtmlCourse/HtmlStyleModify/HtmlStyleModify7";
import HtmlStyleModify8 from "./Pages/Components/Courses/HtmlCourse/HtmlStyleModify/HtmlStyleModify8";
import HtmlStyleModify9 from "./Pages/Components/Courses/HtmlCourse/HtmlStyleModify/HtmlStyleModify9";
import HtmlStyleModify10 from "./Pages/Components/Courses/HtmlCourse/HtmlStyleModify/HtmlStyleModify10";
import HtmlStyleModify11 from "./Pages/Components/Courses/HtmlCourse/HtmlStyleModify/HtmlStyleModify11";
import HtmlStyleModify12 from "./Pages/Components/Courses/HtmlCourse/HtmlStyleModify/HtmlStyleModify12";
import HtmlStyleModify13 from "./Pages/Components/Courses/HtmlCourse/HtmlStyleModify/HtmlStyleModify13";
import HtmlStyleModify14 from "./Pages/Components/Courses/HtmlCourse/HtmlStyleModify/HtmlStyleModify14";
import HtmlStyleModify15 from "./Pages/Components/Courses/HtmlCourse/HtmlStyleModify/HtmlStyleModify15";
import HtmlStyleModify16 from "./Pages/Components/Courses/HtmlCourse/HtmlStyleModify/HtmlStyleModify16";
import HtmlImageModify1 from "./Pages/Components/Courses/HtmlCourse/HtmlImageModify/HtmlImageModify1";
import HtmlImageModify2 from "./Pages/Components/Courses/HtmlCourse/HtmlImageModify/HtmlImageModify2";
import HtmlImageModify3 from "./Pages/Components/Courses/HtmlCourse/HtmlImageModify/HtmlImageModify3";
import HtmlImageModify4 from "./Pages/Components/Courses/HtmlCourse/HtmlImageModify/HtmlImageModify4";
import HtmlImageModify5 from "./Pages/Components/Courses/HtmlCourse/HtmlImageModify/HtmlImageModify5";
import HtmlImageModify6 from "./Pages/Components/Courses/HtmlCourse/HtmlImageModify/HtmlImageModify6";
import HtmlImageModify7 from "./Pages/Components/Courses/HtmlCourse/HtmlImageModify/HtmlImageModify7";
import HtmlImageModify8 from "./Pages/Components/Courses/HtmlCourse/HtmlImageModify/HtmlImageModify8";
import HtmlImageModify9 from "./Pages/Components/Courses/HtmlCourse/HtmlImageModify/HtmlImageModify9";
import HtmlImageModify10 from "./Pages/Components/Courses/HtmlCourse/HtmlImageModify/HtmlImageModify10";
import HtmlImageModify11 from "./Pages/Components/Courses/HtmlCourse/HtmlImageModify/HtmlImageModify11";
import HtmlImageModify12 from "./Pages/Components/Courses/HtmlCourse/HtmlImageModify/HtmlImageModify12";
import HtmlImageModify13 from "./Pages/Components/Courses/HtmlCourse/HtmlImageModify/HtmlImageModify13";
import HtmlImageModify14 from "./Pages/Components/Courses/HtmlCourse/HtmlImageModify/HtmlImageModify14";
import HtmlImageModify15 from "./Pages/Components/Courses/HtmlCourse/HtmlImageModify/HtmlImageModify15";
import HtmlImageModify16 from "./Pages/Components/Courses/HtmlCourse/HtmlImageModify/HtmlImageModify16";
import { useState } from "react";


function App() {

  const [activate, setActivate] = useState(false)
  return (
    <div className={`mx-auto  ${activate ? 'bg-gray-800' : 'bg-green-100'} `}>
      <Header activate={activate} setActivate={setActivate} />
      <Routes>
        <Route path="/" element={<Home activate={activate} setActivate={setActivate} />}></Route>
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
        <Route path="/OthersSaying" element={<OthersSaying />}></Route>
        {/* html course section */}

        <Route path="/introduction" element={<Introduction />}></Route>

        <Route path="/courses" element={<Courses activate={activate} />}>
          <Route index element={<Intro />}></Route>

          <Route path="/courses/intro" element={<Intro />} />

          <Route path="/courses/attribute" element={<Attributes />} />

          <Route path="/courses/htmlStyle" element={<HtmlStyle />} />

          <Route path="/courses/htmlImage" element={<HtmlImage />} />

          {/* modify section */}

          <Route
            path="/courses/dataIntro"
            element={<IntroModify />}
          />

          <Route
            path="/courses/attribute/topic1/:id"
            element={<AttributeModify />}
          />
          <Route
            path="/courses/attribute/title1/:id"
            element={<AttributeModify2 />}
          />

          <Route
            path="/courses/attribute/title2/:id"
            element={<AttributeModify3 />}
          />
          <Route
            path="/courses/attribute/title3/:id"
            element={<AttributeModify4 />}
          />
          <Route
            path="/courses/attribute/title4/:id"
            element={<AttributeModify5 />}
          />
          <Route
            path="/courses/attribute/title5/:id"
            element={<AttributeModify6 />}
          />
          <Route
            path="/courses/attribute/description1/:id"
            element={<AttributeModify7 />}
          />
          <Route
            path="/courses/attribute/description2/:id"
            element={<AttributeModify8 />}
          />
          <Route
            path="/courses/attribute/description3/:id"
            element={<AttributeModify9 />}
          />
          <Route
            path="/courses/attribute/description4/:id"
            element={<AttributeModify10 />}
          />
          <Route
            path="/courses/attribute/description5/:id"
            element={<AttributeModify11 />}
          />
          <Route
            path="/courses/attribute/example1/:id"
            element={<AttributeModify12 />}
          />
          <Route
            path="/courses/attribute/example2/:id"
            element={<AttributeModify13 />}
          />
          <Route
            path="/courses/attribute/example3/:id"
            element={<AttributeModify14 />}
          />
          <Route
            path="/courses/attribute/example4/:id"
            element={<AttributeModify15 />}
          />
          <Route
            path="/courses/attribute/example5/:id"
            element={<AttributeModify16 />}
          />

          {/* ----------------------------------------------------- */}

          <Route
            path="/courses/htmlStyleModify"
            element={<HtmlStyleModify />}
          />
          <Route
            path="/courses/htmlStyle/topic1/:id"
            element={<HtmlStyleModify1 />}
          />
          <Route
            path="/courses/htmlStyle/title1/:id"
            element={<HtmlStyleModify2 />}
          />
          <Route
            path="/courses/htmlStyle/title2/:id"
            element={<HtmlStyleModify3 />}
          />
          <Route
            path="/courses/htmlStyle/title3/:id"
            element={<HtmlStyleModify4 />}
          />
          <Route
            path="/courses/htmlStyle/title4/:id"
            element={<HtmlStyleModify5 />}
          />
          <Route
            path="/courses/htmlStyle/title5/:id"
            element={<HtmlStyleModify6 />}
          />
          <Route
            path="/courses/htmlStyle/description1/:id"
            element={<HtmlStyleModify7 />}
          />
          <Route
            path="/courses/htmlStyle/description2/:id"
            element={<HtmlStyleModify8 />}
          />
          <Route
            path="/courses/htmlStyle/description3/:id"
            element={<HtmlStyleModify9 />}
          />
          <Route
            path="/courses/htmlStyle/description4/:id"
            element={<HtmlStyleModify10 />}
          />
          <Route
            path="/courses/htmlStyle/description5/:id"
            element={<HtmlStyleModify11 />}
          />
          <Route
            path="/courses/htmlStyle/example1/:id"
            element={<HtmlStyleModify12 />}
          />
          <Route
            path="/courses/htmlStyle/example2/:id"
            element={<HtmlStyleModify13 />}
          />
          <Route
            path="/courses/htmlStyle/example3/:id"
            element={<HtmlStyleModify14 />}
          />
          <Route
            path="/courses/htmlStyle/example4/:id"
            element={<HtmlStyleModify15 />}
          />
          <Route
            path="/courses/htmlStyle/example5/:id"
            element={<HtmlStyleModify16 />}
          />
          {/* ---------------------------------------------------- */}
          <Route
            path="/courses/htmlImageModify"
            element={<HtmlImageModify />}
          />

          <Route
            path="/courses/htmlImage/topic1/:id"
            element={<HtmlImageModify1 />}
          />
          <Route
            path="/courses/htmlImage/title1/:id"
            element={<HtmlImageModify2 />}
          />
          <Route
            path="/courses/htmlImage/title2/:id"
            element={<HtmlImageModify3 />}
          />
          <Route
            path="/courses/htmlImage/title3/:id"
            element={<HtmlImageModify4 />}
          />
          <Route
            path="/courses/htmlImage/title4/:id"
            element={<HtmlImageModify5 />}
          />
          <Route
            path="/courses/htmlImage/title5/:id"
            element={<HtmlImageModify6 />}
          />
          <Route
            path="/courses/htmlImage/description1/:id"
            element={<HtmlImageModify7 />}
          />
          <Route
            path="/courses/htmlImage/description2/:id"
            element={<HtmlImageModify8 />}
          />
          <Route
            path="/courses/htmlImage/description3/:id"
            element={<HtmlImageModify9 />}
          />
          <Route
            path="/courses/htmlImage/description4/:id"
            element={<HtmlImageModify10 />}
          />
          <Route
            path="/courses/htmlImage/description5/:id"
            element={<HtmlImageModify11 />}
          />
          <Route
            path="/courses/htmlImage/example1/:id"
            element={<HtmlImageModify12 />}
          />
          <Route
            path="/courses/htmlImage/example2/:id"
            element={<HtmlImageModify13 />}
          />
          <Route
            path="/courses/htmlImage/example3/:id"
            element={<HtmlImageModify14 />}
          />
          <Route
            path="/courses/htmlImage/example4/:id"
            element={<HtmlImageModify15 />}
          />
          <Route
            path="/courses/htmlImage/example5/:id"
            element={<HtmlImageModify16 />}
          />
          <Route
            path="/courses/htmlCceModify"
            element={<HtmlCceModify />}
          />


          <Route path="/courses/htmlCce" element={<HtmlCce />} />
          <Route path="/courses/cpp" element={<Cpp />} />

        </Route>
        {/* Interview Preparation Section Routes */}

        <Route path="/interview-prep" element={<InterviewPrep />}>
          {/* <Route index element={<Intro />}></Route> */}

          <Route path="/interview-prep/javascript" element={<JavascriptQa />} />

          <Route path="/interview-prep/html" element={<HtmlQa />} />
        </Route>

        {/* Ends of Interview Preparation Section Routes */}
        <Route path="/jsCourses" element={<JsCourses></JsCourses>}>
          <Route index element={<JavascriptCourse />} />

          <Route path="/jsCourses/jsSyntex" element={<JsSyntex />} />

          <Route path="/jsCourses/jsVariables" element={<JsVariables />} />

          <Route path="/jsCourses/jsLet" element={<JsLet />} />

          <Route path="/jsCourses/jsConst" element={<JsConst />} />

          {/* js Modify section */}

          <Route
            path="/jsCourses/jsCourseModify"
            element={<JavascriptCourseModify />}
          />

          <Route
            path="/jsCourses/jsConstModify"
            element={<JsConstModify />}
          />

          <Route
            path="/jsCourses/jsLetModify"
            element={<JsLetModify />}
          />

          <Route
            path="/jsCourses/jsSyntexx"
            element={<JsSyntexModify />}
          />

          <Route
            path="/jsCourses/jsVariabless"
            element={<JsVariablesModify />}
          />


        </Route>

        <Route path="/CssCourses" element={<CssCourses />}>


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
        {/* User Profile route  */}
        <Route path="/dashboard" element={<RequireAuth><UserProfile /></RequireAuth>}>
          <Route index element={<Profile />}></Route>

          <Route path="/dashboard/profile_edit" element={<ProfileEditor />} />
          <Route path="/dashboard/my_course" element={<MyCourse />} />
          <Route path="/dashboard/add_review" element={<AddReview />} />

        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
