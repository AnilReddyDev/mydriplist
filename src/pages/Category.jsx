import Input from "../components/Input";
import { useContext } from "react";
import context from "../utils/context";
import AddItemComp from "../components/AddItemcomp";
import ItemCard from "../components/ItemCard"; 
const Category = () => {
    const {addItemComp, setShowAddItemComp} = useContext(context)

  return (
    <div className="relative inter w-screen min-h-screen flex flex-col  items-center ">
          <div className="absolute z-0  bg-transparent w-[96vw] mx-auto top-0  border-x  min-h-screen border-dashed border-gray-500/55"></div>
      <div className="pt-[50px]"></div>
      <div className={`w-full py-5 z-10 flex gap-2  justify-end items-center border-b border-dashed border-gray-500/55  ${addItemComp && "blur-sm"}`}>
        <Input />   
        <button className="bg-white text-sm font-normal hover:bg-slate-50 text-black py-2 px-5 mr-10 rounded-md" onClick={()=> setShowAddItemComp(true)}>Add Watch</button>
      </div>
      <div className="w-[96vw] flex flex-wrap justify-center items-center  z-10 p-5 gap-10">
        <div className={`${addItemComp && "blur-sm"}`}>
        <ItemCard/>
        </div>
        <div className={`w-full h-screen absolute top-0 flex justify-center items-center ${addItemComp ? "block" : "hidden" }`}>
        <AddItemComp />
        </div>
      </div>
    </div>
  );
};

export default Category;
