import React from "react";
import { IIcons } from "../../interfaces/interfaces";

export const DribbbleIcon = ({ width, className = "" }: IIcons) => {
  return (
    <svg
      width={width}
      height={width}
      className={className}
      strokeWidth="0.97"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#dbdbdb"
    >
      <path
        d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12zM16.673 20.843C15.5 14 12.5 8 8.5 2.63M2.067 10.84C6 11 15.283 10.5 19.142 5M21.968 12.81C15.344 10.84 7.5 14 5.23 19.361"
        stroke="#dbdbdb"
        strokeWidth="0.97"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};
