import React from "react";
import ChartArea from "./ChartArea";
import ChartBar from "./ChartBar";
import Header from "./Header";
import Menu from "./Menu";

const Dashboard = ({ valueChartArea , valueChartBar}) => {




  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 grid-rows-9 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand bg-neutral-100">
      <div className="col-span-1 md:col-span-4 xl:col-span-4 row-span-1">
        <Header name="Projet" />
      </div>
      <div className="col-span-1 md:col-span-4 xl:col-span-4 row-span-1">
        <Menu />
      </div>
      <div className="xl:col-span-2 md:col-span-2 md:row-span-5 row-span-4">
        <ChartArea data={valueChartArea}/>
      </div>
      <div className="xl:col-span-2 md:col-span-2 md:row-span-5 row-span-4">
          <ChartBar data={valueChartBar}/>
      </div>
    </div>
  );
};

export default Dashboard;
