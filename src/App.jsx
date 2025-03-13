import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import context from "./utils/context";
import { useState } from "react";
import Category from "./pages/Category";
const App = () => {
  const [showAddCategory,setShowAddCategory] = useState(false);
  const [showAddItemComp,setShowAddItemComp] = useState(false)
  return (
    <context.Provider value={{
      addCategoryComp:showAddCategory,
      addItemComp:showAddItemComp,
      setShowAddCategory,
      setShowAddItemComp

    }}>
      <div className="w-screen inter text-white min-h-screen  bg-[#09090B] ">
        <Header />
        <Outlet />
      </div>
    </context.Provider>
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
      {
        path:'/Category',
        element:<Category/>
      }
    ],
  },
]);

export default appRouter;
