import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";

const Home = () => {
  return (
    <div className="relative inter w-screen min-h-screen flex flex-col  items-center">
      <div className="absolute z-0  bg-transparent w-[96vw] mx-auto top-0  border-x  min-h-screen border-dashed border-gray-500/55"></div>
      <div className="pt-[60px]"></div>
      <div className="w-full py-5 z-10 flex gap-2  justify-end items-center border-y border-dashed border-gray-500/55">
        <Input />
        <Button
          children="Add a category"
          styleprop="bg-white hover:bg-slate-50 text-black font-medium py-2 px-4 mr-10 rounded-md"
        />
      </div>
      <div className="w-[96vw] flex flex-wrap justify-center  z-10 h-72  p-5 gap-10">
        <Card />
      </div>
    </div>
  );
};

export default Home;
