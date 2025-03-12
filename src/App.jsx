import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
const App = () => {
  return (
    <div className="w-screen inter text-white min-h-screen  bg-[#09090B] ">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);

export default appRouter;
