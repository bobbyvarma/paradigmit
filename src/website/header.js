import React from "react";
import { Carousel, Tabs } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
const logo = "./images/logo.png";
const clinical = "./images/clinical.jpg";
const assi = "./images/assi.jpg";
const secure = "./images/secure.jpg";
const ai = "./images/ai.png";

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
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <React.Fragment>
      <div className="w-full h-full">
        <div id="header">
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
        <div>
          <section>
            <div>
              <Carousel autoplay>
                <div>
                  <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>4</h3>
                </div>
              </Carousel>
              {/* <Carousel className="w-full h-full ">
                <div className="w-full   relative">
                  <div className="absolute w-full">
                    <img src={clinical} className="w-full  "></img>
                  </div>
                  <div className="absolute">
                    <div>
                      <h1 className="text-white font-bold  mt-32 ml-10 text-7xl">
                        Clinical Trail Services
                      </h1>
                      <div className="flex w-full text-3xl font-bold gap-5  mt-10 ml-10 text-white">
                        <p>Clinical Data</p>
                        <p>Statistical programming</p>
                        <p>Medical Writing</p>
                      </div>
                      <div>
                        <button
                          type="button "
                          className="px-6 py-3 bg-sky-400 hover:bg-blue-400 ml-10 mt-20 text-white font-medium text-xl border-collapse "
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full relative">
                  <div className="absolute">
                    <img src={assi} className="w-full "></img>
                  </div>
                  <div className="absolute">
                    <h1 className="text-white font-bold text-justify mt-32 ml-10 text-7xl">
                      Application Services / <br />
                      System Integration (ASSI)
                    </h1>
                    <div className="absolute">
                      <div>
                        <p className="flex w-full text-3xl font-bold gap-5  mt-10 ml-10 text-white">
                          We halp you optimize and aligning all cross
                          <br />
                          business functionalities
                        </p>
                      </div>
                      <div>
                        <button
                          type="button "
                          className="px-6 py-3 bg-sky-400 hover:bg-blue-400 ml-10 mt-10 text-white font-medium text-xl border-collapse "
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel> */}
            </div>
          </section>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-2">
            <div className="relative p-10 ml-20 ">
              <h1 className="text-3xl font-semibold">
                ParadigmIT - Introduction
              </h1>
              <p className="text-justify w-[80%] mt-5  font-sans float-left">
                ParadigmIT Technology Services is a global technology solutions
                provider focused on delivering customer value through
                high-quality processes and cost-efficient solutions. Paradigm
                has been one of the trendsetters in global delivery practices
                with our Client-Centric Model for customer management and
                delivery. Established in 1998, Paradigm has global clientele in
                Fortune 500 and Government Sectors. Our teams provide the entire
                range of IT solutions from strategy consulting to implementation
                and maintenance across a range of sectors.
              </p>
            </div>
            <div>
              <img
                src={ai}
                className="float-right w-[80%] mr-32 mt-10 h-[100%]"
              ></img>
            </div>
          </div>
        </div>
        <div className="w-full items-center text-[#1e73be] pl-40   gap-2 justify-center flex">
          <div>
            <ArrowRightOutlined className="mb-2" />
          </div>
          <div>
            <p className="italic font-semibold hover:"> LEARN MORE</p>
          </div>
        </div>
        <div className=" w-full h-[400px] mt-5 bg-black" id="child 2">
          <div className="w-full  ">
            <h1 className="text-2xl font-medium flex  pt-5 text-white justify-center">
              Industry Experts
            </h1>
          </div>
          <div className="flex gap-5 px-5">
            <div className=" text-white border ">
              <h1>Clinical Trial Services</h1>
              <p>
                A deep experience in study build setup application development
                and executions.
              </p>
            </div>
            <div className=" text-white border ">
              <h1>Clinical Trial Services</h1>
              <p>
                A deep experience in study build setup application development
                and executions.
              </p>
            </div>
            <div className=" text-white border ">
              <h1>Clinical Trial Services</h1>
              <p>
                A deep experience in study build setup application development
                and executions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
