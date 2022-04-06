import React, { Suspense, lazy } from "react";
import { Routes , Route } from "react-router-dom";
import "./assets/scss/preloader.scss";
// components imports
const Login = lazy(() => import("./components/Login"));
const Register = lazy(() => import("./components/Register"));

const Home = lazy(() => import("./pages/Home"));

const PageNotFound = lazy(() => import("./pages/PageNotFound"));

const Routess = () => {
  const laoding = (
    <div className="flone-preloader-wrapper">
      <div className="flone-preloader">
        <span></span>
        <span></span>
      </div>
    </div>
  );
  return (
    <Suspense fallback={laoding}>
      <Routes >
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/home" element={<Home />} />

        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/register" element={<Register />} />

   
        <Route path="*" element={<PageNotFound />} />
      </Routes >
    </Suspense>
  );
};

export default Routess;
