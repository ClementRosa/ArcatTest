import React, { useState,useContext, useEffect  } from "react";
import ChartFilter from "./ChartFilter";
import Daterange from "./Daterange";
import Card from "./Card";
import { chartConfig } from "../constants/config";
// import ThemeIcon from "./ThemeIcon";

const Menu = ({ name }) => {

  const [filter, setFilter] = useState("1Y");

  return (
    <Card>
      <div className="flex absolute top-1 left-2 z-40">
        <Daterange />
      </div>
      <div>
        <ul className="flex absolute top-1 right-2 z-40">
          {Object.keys(chartConfig).map((item) => (
            <li key={item}>
              <ChartFilter
                text={item}
                active={filter === item}
                onClick={() => {
                  setFilter(item);
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default Menu;
