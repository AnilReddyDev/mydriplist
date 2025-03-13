import { Link } from "react-router-dom";
import Button from "../components/Button";

const Landing = () => {
  return (
    <div className=" flex inter h-screen relative flex-col gap-1  pb-36  justify-center items-center">
            <div className="absolute z-0  bg-transparent w-[96vw] mx-auto top-0  border-x  min-h-screen border-dashed border-gray-500/55"></div>
      <h1 className="text-5xl pb-6 font-bold z-10">
        Build Your Drip List & Level Up
      </h1>
      <p className="text-lg font-normal  text-gray-300  z-10 ">
        Stop screenshotting and start saving. MyDripList is where you keep all
        the fire fits,
      </p>
      <p className="text-lg font-normal pb-6  text-gray-300  z-10 ">
        must-have tech, and everything else you're eyeing, for future purchases.
      </p>
      <Link to="/signin" className="z-10">
        <Button children="Get Started" />
      </Link>
    </div>
  );
};

export default Landing;
