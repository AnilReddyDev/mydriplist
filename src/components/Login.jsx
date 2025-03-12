import { Link } from "react-router-dom";
import Button from "./Button";
const Login = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">Login</h1>
      <p className="text-gray-400 text-sm py-1"> Login or SignUp with google</p>
      <Button
        icon={true}
        children="Google"
        styleprop="bg-transparent flex justify-center items-center gap-1 hover:bg-slate-400/20 border-[0.2px] border-solid border-gray-500/25 text-white font-medium py-2 px-8 rounded"
      />
      <div className="flex box-border justify-center items-center">
        <hr className="h-[0.5px] border-none bg-gray-500/25 w-1/2" />
        <p className="text-gray-400 px-2">or</p>
        <hr className="h-[0.5px] border-none bg-gray-500/25  w-1/2" />
      </div>
      <p className="text-gray-400 mb-2 text-sm py-1">
        Enter your email & password below to login
      </p>
      <p className="py-1 text-base font-normal">Email</p>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full p-2  border-[0.2px] bg-transparent outline-none border-solid border-gray-500/25 rounded-md"
      />
      <p className="pt-2 text-base font-normal">Password</p>
      <input
        type="email"
        placeholder="xxxxx"
        className="w-full p-2  border-[0.2px] bg-transparent outline-none border-solid border-gray-500/25 rounded-md"
      />
      <Link to="/home">
        <Button
          children="Login"
          styleprop="my-4 bg-white hover:bg-slate-50 text-black font-medium w-full py-2 rounded"
        />
      </Link>
    </>
  );
};

export default Login;
