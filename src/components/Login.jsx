import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="text-2xl font-bold">Login</h1>
      <p className="text-gray-400 text-sm py-1"> Login or SignUp with google</p>
      <button className="bg-transparent flex justify-center items-center gap-1 hover:bg-slate-400/20 border-[0.2px] border-solid border-gray-500/25 text-white font-medium py-2 px-8 rounded">
        <img
          src="https://img.icons8.com/?size=100&id=60984&format=png&color=FFFFFF"
          alt="G"
          className="w-5 h-5"
        />
        Google
      </button>
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
        type="password"
        placeholder="xxxxx"
        className="w-full p-2  border-[0.2px] bg-transparent outline-none border-solid border-gray-500/25 rounded-md"
      />
      <button
        onClick={() => navigate("/home")}
        className="my-4 bg-white hover:bg-slate-50 text-black font-medium w-full py-2 rounded"
      >
        Login
      </button>
    </>
  );
};

export default Login;
