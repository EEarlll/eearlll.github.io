import React, { useRef } from "react";
import Reveal from "./Reveal";
import { Link } from "react-router-dom";

const Cards = ({ img_src, caption, num, project }) => {
  const boundingRef = useRef(null);

  return (
    <Link to={"project/" + project}>
      <div
        className="flex w-fit relative [perspective:200px]"
        onMouseEnter={(e) => {
          boundingRef.current = e.currentTarget.getBoundingClientRect();
        }}
        onMouseMove={(e) => {
          if (!boundingRef.current) return;
          const x = e.clientX - boundingRef.current.left;
          const y = e.clientY - boundingRef.current.top;
          const xPct = x / boundingRef.current.width;
          const yPct = y / boundingRef.current.height;
          const xRotation = (xPct - 0.5) * 20;
          const yRotation = (0.5 - yPct) * 20;

          e.currentTarget.style.setProperty("--x-rotation", `${yRotation}deg`);
          e.currentTarget.style.setProperty("--y-rotation", `${xRotation}deg`);
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.setProperty("--x-rotation", "0deg");
          e.currentTarget.style.setProperty("--y-rotation", "0deg");
          boundingRef.current = null;
        }}
      >
        <div className="overlay [transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.1)] transition-transform ease-out bg-transparent mb-14 pointer_event">
          <Reveal x={-500} once={true}>
            <img
              src={`/${img_src}`}
              alt=""
              className="rounded object-cover w-56 md:w-80"
            ></img>
          </Reveal>
        </div>

        <div className="left-[-80px] top-[-20px] md:top-20 md:left-[-42px] absolute  w-[150px]  bg-transparent [transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.1)]  transition-transform ease-out pointer_event">
          <span className="text-text font-bold text-xl drop-shadow-2xl pointer_event">
            {caption}
          </span>
          <div className=" bg-white h-1 my-2 rounded-full pointer_event"></div>
          <small className="text-secondarytext">{num}</small>
          <svg
            fill="#93899a"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25"
            className="w-4"
          >
            <path
              d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
              data-name="Right"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
