import React, { useState } from "react";
import { Carousel, Tabs } from "antd";
//import { Link, NavLink } from "react-router-dom";
import { Dropdown, Space } from "antd";
import { ArrowRightOutlined, CaretDownOutlined } from "@ant-design/icons";
import Navbar from "./Navbar";

const logo = "./images/logo.png";
const clinical = "./images/clinical.jpg";
const assi = "./images/assi.jpg";
const security = "./images/security.jpg";
const ai = "./images/ai.png";
const si = "./images/SI.jpg";
const medicine = "./images/medicine.jpg";
const Header = () => {
  const [open, setOpen] = useState(false);
  const handleMenuClick = (e) => {
    if (e.key === "4") {
      setOpen(false);
    }
  };
  const handleOpenChange = (flag) => {
    setOpen(flag);
  };
  const items = [
    {
      label: "CLINICAL TRIAL",
      key: "1",
    },
    {
      label: "APPLICATION SERVICES ? SYSTEM INTEGRATIONS(ASSI)",
      key: "2",
    },
    {
      label: "BUSINESS PROCESS OUTSOURCING",
      key: "3",
    },
    {
      label: "CYBER SECURITY",
      key: "4",
    },
  ];
  //  ?
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
              <Navbar />
            </div>
            {/* <div>
              {" "}
              <Tabs
                defaultActiveKey="1"
                items={items}
                className=" w-full  relative font-bold underline-offset-0"
              />
            </div> */}
            <div className="">
              <button className="px-11 py-3 bg-[#1e73be] rounded border hover:text-blue-400 hover:border-blue-300 hover:bg-white text-white">
                ASK US
              </button>
            </div>
          </div>
        </div>
        <div>
          <section>
            <div className="pt-5">
              <Carousel autoplay>
                <div className="w-full  ">
                  <div className=" relative w-full">
                    <img src={clinical} className="w-full   "></img>
                    <div className=" absolute top-10 text-white text-8xl">
                      <div>
                        <h1 className="text-white font-bold  mt-32 ml-10 text-7xl">
                          Clinical Trail Services
                        </h1>
                      </div>
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
                <div className="w-full  ">
                  <div className=" relative w-full">
                    <img src={assi} className="w-full   "></img>
                    <div className=" absolute top-10 text-white text-8xl">
                      <div>
                        <h1 className="text-white font-bold  mt-32 ml-10 text-7xl">
                          Application Services / <br />
                          System Integration (ASSI)
                        </h1>
                      </div>
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
                          className="px-6 py-3 bg-sky-400 hover:bg-blue-400 ml-10 mt-20 text-white font-medium text-xl border-collapse "
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full  ">
                  <div className=" relative w-full">
                    <img src={clinical} className="w-full   "></img>
                    <div className=" absolute top-10 text-white text-8xl">
                      <div>
                        <h1 className="text-white font-bold text-justify mt-32 ml-10 text-7xl">
                          Cyber Security
                        </h1>
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
              </Carousel>
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
        <div className=" w-full mt-5 bg-[#221F3C]" id="child 2">
          <div className="w-full  ">
            <h1 className="text-4xl font-medium flex  pt-5 text-white justify-center">
              Industry Experts
            </h1>
          </div>
          <div className=" w-full px-20 gap-6 grid grid-cols-6  mt-10 justify-between ">
            <div className=" text-white hover:bg-white col-start-1 col-end-3 hover:text-black bg-[#262051] px-11 pt-11   border ">
              <div>
                <h1 className="  text-xl">Clinical Trial Services</h1>
                <p className="mt-14 font-extralight">
                  A deep experience in study build setup application development
                  and executions.
                </p>
              </div>
              <div className="w-full  text-[#1e73be] mt-16  flex items-center gap-2 ">
                <div>
                  <ArrowRightOutlined className="mb-2" />
                </div>
                <div>
                  <p className="italic font-semibold hover:"> LEARN MORE</p>
                </div>
              </div>
            </div>
            <div className=" text-white border col-start-3 col-end-5  hover:bg-white hover:text-black bg-[#262051]  pb-10  px-11 pt-11 ">
              <div>
                <h1 className=" text-xl">
                  Application Services / Systems Integrations (ASSI)
                </h1>
                <p className="mt-8 font-light">
                  We help you optimize and aligning all cross business
                  functionalities
                </p>
              </div>
              <div className="w-full  text-[#1e73be]  mt-16  flex items-center gap-2 ">
                <div>
                  <ArrowRightOutlined className="mb-2" />
                </div>
                <div>
                  <p className="italic font-semibold hover:"> LEARN MORE</p>
                </div>
              </div>
            </div>
            <div className=" text-white col-start-5 col-end-7  hover:bg-white hover:text-black bg-[#262051] border px-11 pt-11 pb-10">
              <div>
                <h1 className=" text-xl">Cyber Security</h1>
                <p className="mt-8 font-light ">
                  CS Cyber Security Focuses on System Integration (SI) and
                  providing SOC managed services to various Government and
                  Enterprise sectors.
                </p>
              </div>
              <div className="w-full  text-[#1e73be] mt-12 flex items-center gap-2 ">
                <div>
                  <ArrowRightOutlined className="mb-2" />
                </div>
                <div>
                  <p className="italic font-semibold hover:"> LEARN MORE</p>
                </div>
              </div>
            </div>

            <div className=" text-white col-start-2 col-end-4   hover:bg-white hover:text-black bg-[#262051] border px-11 pt-11 pb-10">
              <div>
                <h1 className=" text-xl">T Agri-Tech</h1>
                <p className="mt-8 font-light ">
                  Leveraging the power of Technology and building Data and
                  involve the best practices into precision agriculture and farm
                  management for changing the livelihood of the farmers
                </p>
              </div>
              <div className="w-full  text-[#1e73be] mt-12 flex items-center gap-2 ">
                <div>
                  <ArrowRightOutlined className="mb-2" />
                </div>
                <div>
                  <p className="italic font-semibold hover:"> LEARN MORE</p>
                </div>
              </div>
            </div>
            <div className=" text-white col-start-4 col-end-6  hover:bg-white hover:text-black bg-[#262051] border px-11 pt-11 pb-10">
              <div>
                <h1 className=" text-xl">EG E-Governance</h1>
                <p className="mt-8 font-light ">
                  Implementation of various Government services linked with
                  citizens (G2C), businesses (G2B), employees (G2E) and within
                  the Government department, state/ central ministries (G2G).
                </p>
              </div>
              <div className="w-full  text-[#1e73be] mt-12 flex items-center gap-2 ">
                <div>
                  <ArrowRightOutlined className="mb-2" />
                </div>
                <div>
                  <p className="italic font-semibold hover:"> LEARN MORE</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-4xl font-medium flex  w-full pt-10 text-white justify-center">
            Facts
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
