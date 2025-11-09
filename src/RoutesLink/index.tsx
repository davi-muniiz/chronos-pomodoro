import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { AboutPomodoro } from "../pages/AboutPomodoro";
import { NotFound } from "../pages/NotFound";
import { Home } from "../pages/Home";
import { useEffect } from "react";
import { Config } from "../pages/Config";
import { Historico } from "../pages/Historico";

function ScrollToTop() {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, [pathname]);

  return null;
}
export function RoutesLink() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-pomodoro' element={<AboutPomodoro />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/config' element={<Config />} />
            <Route path="/historico" element={<Historico/>}/>
          </Routes>
          <ScrollToTop />
      </BrowserRouter>
    </>
  );
}