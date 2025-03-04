// eslint-disable-next-line no-unused-vars
import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/homeFolder/Home';
import Header from './componets/headerFolder/Header';
import Login from './pages/auth/loginWala';
import Register from './pages/auth/registerWala';
import Verify from './pages/auth/verifyWala';
import Footer from './componets/footerFolder/Footer';
import About from "./pages/about/About";
import Account from "./pages/account/Account";
import { UserData } from './context/UserContext';
import Loading from './componets/loading/Loading';
import Courses from './pages/courses/Courses';
import CourseDescription from './pages/coursedescription/CourseDescription';


const App = () => {
  const {isAuth, user, loading} =UserData();
  return <>
    { loading? <Loading /> :
      <BrowserRouter>
      <Header isAuth={isAuth} />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/course' element={<Courses />} />
          <Route path='/account' element={isAuth?<Account user={user} />:<Login />} />
          <Route path='/login' element={isAuth? <Home />:<Login />} />
          <Route path='/register' element={isAuth? <Home />:<Register />} />
          <Route path='/verify' element={isAuth? <Home />:<Verify />} />
          <Route path='/course/:id' element={isAuth? <CourseDescription /> : <Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    }
  </>
}

export default App