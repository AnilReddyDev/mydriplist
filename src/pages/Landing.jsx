import { Link } from "react-router-dom";
import Button from "../components/Button";

const Landing = () => {
  return (
    <div className=" flex inter h-screen flex-col gap-1  pb-36  justify-center items-center">
      <h1 className="text-5xl pb-6 font-bold">
        Build Your Drip List & Level Up
      </h1>
      <p className="text-lg font-normal  text-gray-300  ">
        Stop screenshotting and start saving. MyDripList is where you keep all
        the fire fits,
      </p>
      <p className="text-lg font-normal pb-6  text-gray-300  ">
        must-have tech, and everything else you're eyeing, for future purchases.
      </p>
      <Link to="/signin">
        <Button children="Get Started" />
      </Link>
    </div>
  );
};

export default Landing;
