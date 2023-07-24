import React from 'react'
import SharedLayout from './SharedLayout';
import Home from './Home'
import About from './About'
import Projects from './CurrenProjects'
import Contact from './Contact';
import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'
const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence >
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes