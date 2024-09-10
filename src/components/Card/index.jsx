import { button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function DefaultCard(props) {
  const { title, desc, link, buttonText } = props;

  return (
    <div className="relative w-[20rem] sm:w-[24rem] md:w-[28rem] lg:w-[32rem] h-[14rem] m-4 p-4 shadow-lg rounded-[12px] bg-black/20">
      <div className="overflow-hidden text-2xl font-bold text-yellow-400 text-ellipsis whitespace-nowrap">
        <Typography>{title}</Typography>
      </div>

      <div className="mt-2 overflow-hidden text-yellow-400 text-ellipsis line-clamp-3">
        <Typography>{desc}</Typography>
      </div>

      <button
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[80%] h-12 bg-yellow-400 text-black font-bold text-lg rounded-lg 
        shadow-lg overflow-hidden transition-all duration-300 
        group-hover:bg-yellow-500 group-hover:scale-105 
        active:bg-yellow-600 active:scale-95"
      >
        <Link to={link}>
          <Typography>{buttonText}</Typography>
        </Link>
      </button>
    </div>
  );
}
