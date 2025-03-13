import { useContext } from "react";
import context from "../utils/context";
const AddCategory = () => {
    const {setShowAddCategory} = useContext(context)
  return (
    <div className=" w-1/4 p-5 flex inter flex-col gap- min-h-2/4 border-[0.2px] border-solid rounded-md border-gray-500/25   bg-black/85">
      <h1 className="text-xl font-semibold">Form</h1>
      <p className="text-gray-400 text-sm pb-2"> Add a new category</p>
      <div className="flex box-border justify-center items-center">
        <hr className="h-[0.5px] border-none bg-gray-500/25 w-full mb-4 " />
      </div>
      <div className="flex gap-2 flex-col">
        <select id="category" name="Category" className="w-full p-2  border-[0.2px] bg-transparent outline-none border-solid border-gray-500/25 rounded-md">
        <option defaultValue={"category"} className="bg-black outline-none">Category</option>
          <option value="Watch" className="bg-black outline-none py-5">Watch</option>
          <option value="Shoes" className="bg-black outline-none py-5">Shoes</option>
        </select>
      </div>
      <button className="py-1 rounded-sm my-2 bg-white text-black" onClick={()=>setShowAddCategory(false)}>Add</button>
    </div>
  );
};

export default AddCategory;
