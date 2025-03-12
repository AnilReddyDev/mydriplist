import Button from "./Button";

const SetPassword = () => {
  return (
    <div className=" w-1/4 p-5 flex flex-col gap-2 min-h-2/4 border-[0.2px] border-solid rounded-md border-gray-500">
      <p className="text-gray-400 text-sm py-1"> Login or SignUp with google</p>
      <input
        type="password"
        placeholder="Enter new password"
        className="w-full p-2  border-[0.2px] bg-transparent outline-none border-solid border-gray-500 rounded-md"
      />
      <Button
        children="confirm"
        styleprop="my-4 bg-white hover:bg-slate-50 text-black font-medium w-full py-2 rounded"
      />
    </div>
  );
};

export default SetPassword;
