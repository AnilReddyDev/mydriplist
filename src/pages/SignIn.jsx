import Login from "../components/Login";
import SetPassword from "../components/SetPassword";
const SignIn = () => {
  return (
    <div className=" flex w-screen h-screen flex-col   justify-center items-center">
                  <div className="absolute z-0  bg-transparent w-[96vw] mx-auto top-0  border-x  min-h-screen border-dashed border-gray-500/55"></div>

      <div className=" w-1/4 p-5 flex flex-col gap-2 min-h-2/4 border-[0.2px] border-solid rounded-md border-gray-500/25 z-10   ">
        <Login />
      </div>
    </div>
  );
};

export default SignIn;
