import { useContext } from "react";
import context from "../utils/context";
const AddItemComp = () => {
  const { setShowAddItemComp } = useContext(context);
  return (
    <div className=" w-1/4 p-5 flex inter flex-col gap- min-h-2/4 border-[0.2px] border-solid rounded-md border-gray-500/25   bg-black/85">
      <h1 className="text-xl font-semibold">Form</h1>
      <p className="text-gray-400 text-sm pb-2"> Add a new watch</p>
      <div className="flex box-border justify-center items-center">
        <hr className="h-[0.5px] border-none bg-gray-500/25 w-full mb-4 " />
      </div>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Enter watch name"
          className="w-full p-2  border-[0.2px] text-sm bg-transparent outline-none border-solid border-gray-500/25 rounded-md"
        />
        <input
          type="text"
          placeholder="movement name"
          className="w-full p-2  border-[0.2px] text-sm bg-transparent outline-none border-solid border-gray-500/25 rounded-md"
        />
      </div>

      <button
        className="py-1 rounded-sm my-2 bg-white text-black"
        onClick={() => setShowAddItemComp(false)}
      >
        Add
      </button>
    </div>
  );
};

export default AddItemComp;
