import Login from "../components/Login";
import SetPassword from "../components/SetPassword";
const SignIn = () => {
  return (
    <div className=" flex w-screen h-screen flex-col   justify-center items-center">
      <div className=" w-1/4 p-5 flex flex-col gap-2 min-h-2/4 border-[0.2px] border-solid rounded-md border-gray-500/25">
        <Login />
      </div>
    </div>
  );
};

export default SignIn;
