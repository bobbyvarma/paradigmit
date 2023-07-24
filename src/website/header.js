import React, { useState } from "react";
import { Card, Carousel, Col, Dropdown, Row } from "antd";
//import { Link, NavLink } from "react-router-dom";
//import { Dropdown, Space } from "antd";
import { ArrowRightOutlined, CaretDownOutlined } from "@ant-design/icons";
import Navbar from "./Navbar";
import Paragraph from "antd/es/skeleton/Paragraph";
import Footer from "./Footer";
import { MenuOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { intro } from "./NavBar.config";
import Aboutus from "./Aboutus";

export const images = [
  {
    src: "./images/CTS1.jpg",
    text: "Clinical Trail Services",
    Paragraph: " Clinical Data -  Statistical programming - Medical Writing",
  },
  {
    src: "./images/OIP.jpg",
    text: "Application Services  System Integration (ASSI)",
    Paragraph:
      " We halp you optimize and aligning all cross business functionalities",
  },
  {
    src: "./images/security.jpg",
    text: " Cyber Security",
  },
];
export const data = [
  {
    src: "./images/m-data.png",
    title: "Medidata Solutions",
    conent: "Marouane, Engagement Director",
    para: "I wanted to bring this to your attention. We recently went live with a custom Rave to IMPACT integration. You guys were critical players in this effort. It is no small accomplishment, I assure you. ",
  },
  {
    src: "./images/voxware.png",
    title: "Voxware,Inc.",
    conent: "Joan, Engagement Director",
    para: "I want you to know how much I appreciated the extra time and quality work that the team has put in getting the custom script developed, tested and released for execution. We are extremely satisfied with your work, responsiveness and assistance.					        ",
  },
  {
    src: "./images/perform.jpg",
    title: "PerformRx",
    conent: "Neb Demessie,Manager of Pharmacy",
    para: "I have received positive feedback from SMEs, and we are ready to transition to the next phase of the project. We look forward to Paradigm’s continued oversight and support as we embark on this rapid journey of growth and technological transformation.	 ",
  },
];

export const icons = [
  {
    src: "./images/deckers.png",
  },
  {
    src: "./images/Gallaudet.png",
  },
  {
    src: "./images/medideta.png",
  },
  {
    src: "./images/paradigm.png",
  },
  {
    src: "./images/PTC.png",
  },
];

//  export const facts=[
//   {
//     src:"./images/CT.jpg",
//     title:"43+",
//     haed:" Sponsors" ,
//   para:"Sponsors Pharma/CROs " },
//   {
//     src:"./images/CTS.jpg",
//     title:"43+",
//     haed:" Sponsors" ,
//   para:"Sponsors Pharma/CROs " },
//   {
//     src:"./images/CTS1.jpg",
//     title:"43+",
//     haed:" Sponsors" ,
//   para:"Sponsors Pharma/CROs " },

// ]

const ct = "./images/CT.jpg";
const cts = "./images/CTS.jpg";
const cts1 = "./images/CTS1.jpg";
const ts = "./images/ts.jpg";
const bg = "./images/bg.png";

const logo = "./images/logo.png";

//const ai = "./images/ai.png";
const si = "./images/SI.jpg";
const ai = "./images/ai.png";
const medicine = "./images/medicine.jpg";
const Header = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

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
      label: "// CLINICAL TRIAL",
      key: "1",
    },
    {
      label: "// APPLICATION SERVICES ? SYSTEM INTEGRATIONS(ASSI)",
      key: "2",
    },
    {
      label: " // BUSINESS PROCESS OUTSOURCING",
      key: "3",
    },
    {
      label: "// CYBER SECURITY",
      key: "4",
    },
  ];
  const [showNav, setShowNav] = useState(false);
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
        <div id="header " className="">
          <div className="md:block hidden">
            <div className=" justify-evenly flex  w-full pt-3 items-center">
              <div className="w-1/3  flex justify-center">
                <img src={logo} alt="logo" className="w-[250px]  "></img>
              </div>
              <div className="flex w-2/3  justify-evenly items-center">
                <div className=" font-semibold text-lg  ">
                  <ul className="flex gap-8 uppercase ">
                    <NavLink>
                      <li className="hover:text-sky-500">Home</li>
                    </NavLink>
                    <NavLink to="./Aboutus">
                      <li className="hover:text-sky-500">ABOUTS US</li>
                    </NavLink>
                    <NavLink>
                      <Dropdown
                        menu={{ items, onClick: handleMenuClick }}
                        onOpenChange={handleOpenChange}
                        open={open}
                      >
                        <li
                          onClick={(e) => e.preventDefault()}
                          className="hover:text-sky-500 flex gap-1 items-center"
                        >
                          SERVICES
                          <CaretDownOutlined />
                        </li>
                      </Dropdown>
                    </NavLink>
                    <NavLink to="./POSTS">
                      <li className="hover:text-sky-500">POSTS</li>
                    </NavLink>
                    <NavLink>
                      <li className="hover:text-sky-500">CAREERS</li>
                    </NavLink>
                  </ul>
                </div>

                <div className="">
                  <button className="px-11 py-3  bg-[#1e73be] rounded border hover:text-blue-400 hover:border-blue-300 hover:bg-white text-white">
                    ASK US
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block md:hidden w-full p-5  top-0 z-10 fixed bg-[#272B35]">
          <div className="w-full flex  items-center">
            <div className="w-7/12">
              <a href="/">
                <img src={logo}></img>
              </a>
            </div>
            <div className="w-5/12 flex justify-end">
              <MenuOutlined
                className="text-white cursor-pointer "
                onClick={() => setShowNav(!showNav)}
              />
            </div>
          </div>
          {showNav ? (
            <div className="w-full flex justify-end">
              <div
                className="md:w-1/2 w-10/12"
                style={{ height: window.innerHeight }}
              >
                <div className="text-white">
                  <Navbar />
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <div>
          <section>
            <div className="pt-5">
              <Carousel autoplay className="md:block hidden">
                {images.map((images, index) => (
                  <div key={index}>
                    <div className="relative w-full">
                      <img
                        src={images.src}
                        alt={images.text}
                        className="md:w-full "
                      />
                      <div className=" absolute top-10 text-white ">
                        <div>
                          <h3 className="text-white font-bold  mt-32 ml-10 text-7xl">
                            {images.text}
                          </h3>
                        </div>
                        <div>
                          <p className="flex w-full text-3xl font-bold gap-5  mt-10 ml-10 text-white">
                            {images.Paragraph}
                          </p>
                        </div>
                        <div>
                          <button
                            type="button "
                            className="px-8 py-4 bg-sky-400 hover:bg-blue-400 ml-10 mt-20 text-white font-semibold text-2xl border-collapse "
                          >
                            Learn
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </section>
        </div>
        <div className="w-full">
          <div className="grid md:grid-cols-2">
            <div className="relative p-10  md:ml-20 ">
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
                className="float-right w-[80%] md:mr-32 mt-10 h-[100%]"
              ></img>
            </div>
          </div>
        </div>
        <div className="w-full items-center text-[#1e73be] md:pl-40   gap-2 justify-center flex">
          <div>
            <ArrowRightOutlined className="mb-2" />
          </div>
          <div>
            <p className="italic font-semibold hover:"> LEARN MORE</p>
          </div>
        </div>
        <div
          className=" w-full mt-5  grid  grid-cols-3 px-10 gap-5  py-10 bg-[#221F3C]  "
          id="child 2"
        >
          {intro.map((e) => {
            return (
              <div>
                <Card className="bg-[#262051]   w-full">
                  <div className=" ">
                    <div className=" text-white w-full p-10 ">
                      <p className="w-full font-bold text-2xl">{e.title}</p>
                      <p className="font-semibold mt-10 text-lg">{e.para}</p>
                      <p className="text-[#504DFF] items-center flex gap-2 mt-5">
                        {e.icon}LEARN MORE
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
        <div className="">
          <div className="text-4xl font-medium flex  w-full pt-10 text-white justify-center">
            <h1>Facts</h1>
          </div>
        </div>

        <div className="grid grid-cols-2 my-10 mx-28 relative  ">
          <img src={ct} className="w-[90%]  h-[80%]"></img>

          <img src={cts} className="w-[90%] h-[80%]"></img>

          <img src={ts} className="w-[90%]  h-[90%]"></img>
          <img src={cts1} className="w-[90%] h-[90%]"></img>
        </div>
        <div className="">
          <div className="   ">
            <div>
              <img src={bg} className="w-full h-56 px-16 absolute"></img>
            </div>
            <div className="relative text-white ">
              <div className="justify-center py-16 mx-28">
                <h1 className="font-semibold  text-2xl">
                  Thank You So Much For Visiting Us. Should You Have Any
                  Queries,
                </h1>
                <div className="flex items-center justify-between  text-2xl">
                  <h1>Please feel free to reach us at ask@paradigmit.com</h1>
                  <button className="bg-sky-400 px-5 py-4 ">ASK ME</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-10 w-full mt-10 bg-stone-200"></div>

        <footer>
          <div className="w-full mt-16">
            <p className="text-[#1e73be] text-lg w-full flex justify-center">
              //OUR CLIENTS
            </p>
            <h1 className="text-[#0E0E52] text-4xl font-semibold flex justify-center text-center">
              We are Trusted Partners of <br />
              Leading IT Solution Providers World Wide
            </h1>
          </div>

          <div className=" w-full flex gap-24 mt-16 px-32">
            {icons.map((e) => {
              {
                return (
                  <div className="flex ">
                    <img
                      src={e.src}
                      className="w-36 gap-10  opacity-25 hover:opacity-100 "
                    ></img>
                  </div>
                );
              }
            })}
          </div>

          <div className="  ">
            <Carousel className=" ">
              <Card className=" ">
                {data.map((e) => {
                  return (
                    <div className=" ">
                      <img src={e.src} className="flex w-32"></img>
                    </div>
                  );
                })}
              </Card>
            </Carousel>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default Header;
