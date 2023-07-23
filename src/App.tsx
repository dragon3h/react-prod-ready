import { Suspense, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";

import "./styles/index.scss";
import { AboutPageAsync } from "./pages/AboutPage/AboutPageAsync";
import { MainPageAsync } from "./pages/MainPage/MainPageAsync";

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export const App = () => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
  const toggleTheme = () => {
    setTheme((prev) => (prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
  };

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <Link to={"/"}>Main Page</Link>
      <Link to={"/about"}>About Page</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
