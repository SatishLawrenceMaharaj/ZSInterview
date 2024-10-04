"use client"
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Dashboard/page';
import Login from './Login/page';
import SignUp from './SignUp/page';

const routes = (
  <Router>
    <Routes>
      <Route path="/Dashboard" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  </Router>
);

function Page() {
  return (
    <div>
      {routes}
    </div>
  );
}

export default Page;
