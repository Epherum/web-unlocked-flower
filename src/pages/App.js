import { useRef, useState, useEffect } from "react";
import locomotiveScroll from "locomotive-scroll";

import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Featured from "../components/featured/Featured";
import About from "../components/about/About";
import Gallery from "../components/gallery/Gallery";
import Footer from "../components/footer/Footer";

import "../styles/app.scss";
import "../styles/reset.css";
import useLocoScroll from "../hooks/useLocoScroll";

function App() {
  const [preloader, setPreloader] = useState(false);
  // const [timer, setTimer] = useState(3);

  // const id = useRef(null);

  // const clear = () => {
  //   window.clearInterval(id.current);
  //   setPreloader(false);
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setPreloader(false);
  //   }, 2000);
  // }, []);

  // useEffect(() => {
  //   if (timer === 0) {
  //     clear();
  //   }
  // }, [timer]);
  useLocoScroll();
  // const scrollRef = useRef();

  // useEffect(() => {
  //   const scroll = new locomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //     multiplier: 1,
  //   });
  // });
  return (
    <>
      {/* {preloader ? (
        <div className="loader-wrapper absolute">
          <h1>Flirty Flowers</h1>
          <h2>Rio De Jenero</h2>
        </div>
      ) : ( */}
      <div className="main-container" id="main-container" data-scroll-container>
        <Navbar />
        <Header />
        <Featured />
        <About />
        {/* <Gallery />  */}
        {/* <Footer /> */}
      </div>
      ;
    </>
  );
}

export default App;
