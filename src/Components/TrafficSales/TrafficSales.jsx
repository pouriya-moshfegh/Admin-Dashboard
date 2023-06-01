import "./widget.css";
import FaceIcon from "@mui/icons-material/Face";
import Face4Icon from "@mui/icons-material/Face4";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { daysData } from "../../data/widgetData";
import ProgressBarComp from "../ProgressBar/Progressbar";

export default function TrafficSales() {
  let [blue, green, yellow, red] = ["#5299e0", "#519668", "#FFFF2E", "#DC2626"];

  return (
    <section className="box-container ">
      {/* title */}
      <h2 className="text-xl">Traffic & Sales </h2>
      <hr className="text-secondary/50 dark:text-secondary mt-2" />
      {/* _________ progressbar parts __________ */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4 border-b border-secondary/50 pb-2">
        {/* ________  left side(days of week)   _________ */}
        <div className="flex-side">
          {/* _______ title of info _______ */}
          <div className="flex-child">
            <div className="widget-title border-blue ">
              <h5>New Clients</h5>
              <p className="text-bold ">9.123</p>
            </div>

            <div className="widget-title border-red">
              <h5>Recuring Clients</h5>
              <p className="text-bold">22.657</p>
            </div>
          </div>
          {/* ________   Days of week charts   ________ */}
          {daysData.map((item) => {
            return (
              <div key={item.day} className="flex justify-between mt-1">
                <p>{item.day}</p>
                <div className="w-2/3 h-1 mt-2">
                  <ProgressBarComp completed={item.newClient} color={blue} />
                  <ProgressBarComp completed={item.recuingClient} color={red} />
                </div>
              </div>
            );
          })}
        </div>

        {/* __________ right side(social media)  __________ */}
        <div className="flex-side data-right">
          <div className="flex-child">
            <div className="widget-title border-yellow">
              <h5>Pageviews</h5>
              <p className="text-bold">8.239</p>
            </div>
            <div className="widget-title border-green">
              <h5>Organic</h5>
              <p className="text-bold">49.123</p>
            </div>
          </div>
          {/* _____ gender DATA ______ */}
          {/* male */}
          <div className="mt-1">
            <p>
              <FaceIcon className="relative bottom-[4px]" fontSize="small" />
              &nbsp; Male
            </p>
            <ProgressBarComp completed={43} color={yellow} />
          </div>
          {/* female */}
          <div className="mt-2">
            <p>
              <Face4Icon className="relative bottom-[4px]" fontSize="small" />
              &nbsp; Female
            </p>
            <ProgressBarComp completed={52} color={yellow} />
          </div>
          {/* _____ social media DATA ______ */}
          {/* Organic Search */}
          <div className="mt-6 ">
            <p>
              <GoogleIcon className="relative bottom-[4px]" fontSize="small" />
              &nbsp; Organic Search
            </p>
            <ProgressBarComp completed={56} color={green} />
          </div>
          {/* Twitter */}
          <div className="mt-1">
            <p>
              <TwitterIcon className="relative bottom-[4px]" fontSize="small" />
              &nbsp; Twitter
            </p>
            <ProgressBarComp completed={15} color={green} />
          </div>
          {/* LinkedIn */}
          <div className="mt-1">
            <p>
              <LinkedInIcon
                className="relative bottom-[4px]"
                fontSize="small"
              />
              &nbsp; LinkedIn
            </p>
            <ProgressBarComp completed={11} color={green} />
          </div>
        </div>
      </div>
    </section>
  );
}
