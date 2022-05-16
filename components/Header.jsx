import React from "react";
import ThemeIcon from "./ThemeIcon";

const Header = ({ name }) => {
  return (
    <>
      <div className="xl:px-5">
        <h1 className="text-5xl">{name}</h1>
      </div>
      <ThemeIcon />
    </>
  );
};

export default Header;
