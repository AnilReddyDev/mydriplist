import watchSVG from "../assets/watch.svg";
const Card = () => {
  return (
    <div className="w-72 relative overflow-hidden h-56 cursor-pointer bg-transparent flex justify-center items-center gap-1 hover:bg-gray-500/5 border-[0.2px] border-solid border-gray-500/25 text-white font-medium rounded group">
      <img
        src={watchSVG}
        alt=""
        className="w-3/4 font-normal absolute top-6 left-28 h-4/4 rotate-45 transition-transform ease-in delay-150 	 group-hover:rotate-0 group-hover:scale-110"
      />
      <h1 className="font-semibold inter text-xl absolute top-8 left-8 transition-transform ease-in delay-150 group-hover:-translate-y-1 group-hover:scale-110">
        Watch List
      </h1>
    </div>
  );
};

export default Card;
