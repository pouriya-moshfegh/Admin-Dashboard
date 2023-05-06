import "./features.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import info from "./pageData";
import MainChart from "../Chart/MainChart";
import { Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Features() {
  const [mainChart, setMainChart] = useState({
    target: info.mainchart,
    name: "Traffic",
  });
  console.log(mainChart.target)
 
  // ============
  // line chart maker
  const reavanueLineChart = (information) => {
    return (
      <ResponsiveContainer>
        <LineChart width="100%" height={150} data={information}>
          <Line  dataKey="uv" stroke="#000000bd" />
        </LineChart>
      </ResponsiveContainer>
    );
  };
  // ===========
  // const titleChanger= (e)=>{

  // }
  return (
    <section className="flex flex-wrap gap-3 ">
      <Link
        onClick={() => {
          setMainChart({ target: info.reavanue, name: "Reavanue" });
        }}
        className="feature-box Reavanue"
      >
        <h3 className="font-medium text-xl">
          $6.200 ( 40.9% &nbsp;
          <KeyboardArrowUpIcon className="text-[rgba(157,228,148,0.93)] bg-[#000]/50 rounded-full" />
          &nbsp;)
        </h3>
        <h2 className="feature-box__title">Reavanue</h2>
       {reavanueLineChart(info.reavanue)}
     
      </Link>
      {/* ===================================== */}
      <Link
        onClick={() => {
          setMainChart({ target: info.sales, name: "sales" });
        }}
        className="feature-box sales"
      >
        <h3 className="font-medium text-xl">
          $1.200 ( 10.3% &nbsp;
          <KeyboardArrowDownIcon className="text-[rgb(255,55,55)]  bg-[#000]/50 rounded-full " />
          &nbsp;)
        </h3>
        <h2 className="feature-box__title ">Sales</h2>
        {reavanueLineChart(info.sales)}
      </Link>
      {/* ===================================== */}

      <Link
        onClick={() => {
          setMainChart({ target: info.costs, name: "Costs" });
        }}
        className="feature-box costs"
      >
        <h3 className="font-medium text-xl">
          $2.430 ( 7.4% &nbsp;
          <KeyboardArrowUpIcon className="text-[rgba(157,228,148,0.93)]  bg-[#000]/50 rounded-full" />
          &nbsp;)
        </h3>
        <h2 className="feature-box__title ">Costs</h2>
        {reavanueLineChart(info.costs)}
      </Link>
      {/* ===================================== */}

      <Link
        onClick={() => {
          setMainChart({ target: info.sessions, name: "sessions" });
        }}
        className="feature-box sessions"
      >
        <h3 className="font-medium text-xl">
          10k ( 23.6% &nbsp;
          <KeyboardArrowDownIcon className="text-[rgb(255,55,55)]  bg-[#000]/50 rounded-full" />
          &nbsp;)
        </h3>
        <h2 className="feature-box__title ">Sessions</h2>
        {reavanueLineChart(info.sessions)}
      </Link>
      {/* =============================== */}
      {/* Main chart */}
      <div className="  h-[500px] box-container">
        <div className="flex justify-between mb-4">
          <div>
            <h2 className="text-2xl">{mainChart.name} </h2>
            <span className="text-sm text-white/80">
              &nbsp;January - July 2023
            </span>
          </div>
          <div>
            <ButtonGroup
              variant="text"
              color="primary"
              aria-label="text button group"
            >
              <Button> Day</Button>
              <Button>Month</Button>
              <Button>Year</Button>
            </ButtonGroup>
          </div>
        </div>

        <MainChart infoData={mainChart.target}></MainChart>
      </div>
    </section>
  );
}
