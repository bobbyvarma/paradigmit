import React, { useState } from "react";
import { Carousel, Tabs } from "antd";
//import { Link, NavLink } from "react-router-dom";
//import { Dropdown, Space } from "antd";
import { ArrowRightOutlined, CaretDownOutlined } from "@ant-design/icons";
import Navbar from "./Navbar";
import Paragraph from "antd/es/skeleton/Paragraph";
import Footer from "./Footer";
import {
 
  MenuOutlined,
} from "@ant-design/icons";


export const images=[
  {
    src:"./images/CTS1.jpg",
    text:"Clinical Trail Services",
    Paragraph:" Clinical Data -  Statistical programming - Medical Writing",
   
  },
  {
    src:"./images/OIP.jpg",
    text:"Application Services  System Integration (ASSI)",
    Paragraph:" We halp you optimize and aligning all cross business functionalities"
    
  },
  {
    src:"./images/security.jpg",
    text:" Cyber Security"
  }
]

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

const ct="./images/CT.jpg"
const cts="./images/CTS.jpg"
const cts1="./images/CTS1.jpg"
const ts="./images/ts.jpg"
const bg="./images/bg.png"

const logo = "./images/logo.png";


//const ai = "./images/ai.png";
const si = "./images/SI.jpg";
const ai="./images/ai.png"
const medicine = "./images/medicine.jpg";
const Header = () => {
  const [selectedOption,setSelectedOption]=useState('')
  const handleOptionChange=(e)=>{
    setSelectedOption(e.target.value)
  }


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

          <div className="w-full justify-evenly flex  pt-3 items-center">
          <div>
              <img src={logo} alt="logo" className="w-[250px] "></img>
            </div>
            <div>
              <Navbar  />
            </div>
            
            <div className="">
              <button className="px-11 py-3  bg-[#1e73be] rounded border hover:text-blue-400 hover:border-blue-300 hover:bg-white text-white">
                ASK US
              </button>
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

                {
                  images.map((images,index)=>(
                    <div key={index} >
                      <div className="relative w-full">
                      <img src={images.src} alt={images.text} className="md:w-full "/>
                      <div className=" absolute top-10 text-white ">
                        <div>
                      <h3 className="text-white font-bold  mt-32 ml-10 text-7xl">{images.text}</h3>
                        </div>
                        <div>
                      <p  className="flex w-full text-3xl font-bold gap-5  mt-10 ml-10 text-white">{images.Paragraph}</p>
                        </div>
                        <div>
                      <button         type="button "
        className="px-8 py-4 bg-sky-400 hover:bg-blue-400 ml-10 mt-20 text-white font-semibold text-2xl border-collapse "
      >
Learn</button>
                        </div>
                      </div>
                      </div>

                    </div>
                  ))
                }
               
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
        <div className=" w-full mt-5 h-[1100px] bg-[#221F3C]" id="child 2">
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
          <div>

          </div>
        
         <div className="bottom-[-130px]">
            <div className="text-4xl font-medium flex  w-full pt-10 text-white justify-center">
              <h1>
            Facts

              </h1>

          </div>
  
         </div>
         
          
        <div className="grid grid-cols-2 my-10 mx-28 relative  ">
       
            <img src={ct} className="w-[90%]  h-[80%]"></img>

          
            <img src={cts} className="w-[90%] h-[80%]"></img>
            
            <img src={ts} className="w-[90%]  h-[90%]"></img>
            <img src={cts1} className="w-[90%] h-[90%]"></img>

         </div>
<footer>
  <div>
    <div className="px-16 ">
      <div className="">


      <div>
<img src={bg} className="w-full h-56 absolute"></img>

      </div>
    <div className="relative text-white">
      <div className="justify-center">
     <h1>
Thank You So Much For Visiting Us. Should You Have Any Queries,</h1>

      </div>
      <div className="flex  items-center">
<h1>Please feel free to reach us at ask@paradigmit.com</h1>
<button className="bg-sky-400 px-5 py-4 ">ASK ME</button>

      </div>
      </div>

    </div>

    </div>

  </div>
</footer>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
