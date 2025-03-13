import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";
import AddCategory from '../components/AddCategory'
import { useState } from "react";
import { useContext } from "react";
import context from "../utils/context";
const Home = () => {
  const {addCategoryComp,setShowAddCategory} = useContext(context)

  return (
    <div className="relative inter w-screen min-h-screen flex flex-col  items-center ">
      <div className="absolute z-0  bg-transparent w-[96vw] mx-auto top-0  border-x  min-h-screen border-dashed border-gray-500/55"></div>
      <div className="pt-[50px]"></div>
      <div className={`w-full py-5 z-10 flex gap-2  justify-end items-center border-b border-dashed border-gray-500/55  ${addCategoryComp && "blur-sm"}`}>
        <Input />
        <button className="bg-white hover:bg-slate-50 text-black font-normal py-2 px-4 mr-10 rounded-md" onClick={()=> setShowAddCategory(true)}>Add a category</button>

      </div>
      <div className="w-[96vw] flex flex-wrap justify-center items-center  z-10 p-5 gap-10">
        <div className={`${addCategoryComp && "blur-sm"}`}>
        <Card />
        </div>
        <div className={`w-full h-screen absolute top-0 flex justify-center items-center ${addCategoryComp ? "block" : "hidden" }`}>
        <AddCategory />
        </div>
      </div>
    </div>
  );
};

export default Home;
