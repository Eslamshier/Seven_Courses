import React, { Fragment } from 'react';
import './App.scss';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navba from './nav/Navbar';
import Footer from './footer/Footer';
import Home from './componants/home/Home';
import About from './componants/about/About';
import Courses from './componants/courses/Courses';
import Instructors from './componants/instructors/Instructors';
import Blog from './componants/blog/Blog';
import Contact from './componants/contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Navba />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/instructors' element={<Instructors />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
