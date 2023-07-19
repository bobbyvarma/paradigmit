import React from "react";
import { Tabs } from "antd";
const logo = "./images/logo.png";

const Header = () => {
  const items = [
    {
      key: "1",
      label: "HOME",
    },
    {
      key: "2",
      label: "ABOUT US",
    },
    {
      key: "3",
      label: "SERVICES",
    },
    {
      key: "4",
      label: "POSTS",
    },
    {
      key: "5",
      label: "CAREERS",
    },
  ];
  return (
    <React.Fragment>
      <div className="w-full h-full">
        <div id="header">
          <div className="container fixed ">
            <div className="flex w-full justify-evenly pt-3 items-center">
              <div>
                <img src={logo} alt="logo" className="w-[250px] "></img>
              </div>
              <div>
                {" "}
                <Tabs
                  defaultActiveKey="1"
                  items={items}
                  className=" w-full  relative font-bold underline-offset-0"
                />
              </div>
              <div className="">
                <button className="px-11 py-3 bg-[#1e73be] rounded border hover:text-blue-400 hover:border-blue-300 hover:bg-white text-white">
                  ASK US
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="child">
          <div>
            <img src=""></img>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
