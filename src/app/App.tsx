import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";

import "./styles/index.scss";
import { classNames } from "../shared/lib/classNames/className";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { useTheme } from "app/providers/ThemeProvider";

export const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div
      className={classNames("app", { hover: true, test: false, one: "dfsdf" }, [
        theme,
      ])}
    >
      <button onClick={toggleTheme}>Toggle Theme</button>

      <Link to={"/"}>Main Page</Link>
      <Link to={"/about"}>About Page</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/"} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
