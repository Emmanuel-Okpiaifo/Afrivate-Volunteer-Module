import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import bgVideo from '../Assets/bg-video.mp4';
import logoImg from '../Assets/Vector (1).png';
import bgImg from '../Assets/Subtract.png';
import vector from '../Assets/Vector.png';
import ManonSuit from '../Assets/assets/ManonSuit.png';
import africa from "../Assets/assets/aaaa.png";
import get from "../Assets/assets/Group 210.png";
import arrow from "../Assets/assets/Arrow 1.png";
import people from "../Assets/assets/people.png";
import main2 from "../Assets/assets/drr 1.png";
import apple from "../Assets/assets/Group 217.png";
import play from "../Assets/assets/Group 216.png";


import whatsappIcon from '../Assets/img/Group.png'
import instagramIcon from '../Assets/img/Group (1).png'






const testimonials = [
  {
    text: `"Afrivate connected me to a U.S. startup as a Product designer. My career has grown globally."`,
    author: "— Aisha K.",
  },
  {
    text: `"Through Afrivate, I secured a tech job in Kenya. The process was fast and smooth."`,
    author: "— David M.",
  },
  {
    text: `"Afrivate helped me land a remote marketing job with a Canadian company. Life-changing platform!"`,
    author: "— Chiamaka O.",
  },
];

const Landing = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const words = useMemo(() => ["Purpose", "Passion", "Impact", "Change"], []);
  const [displayedWord, setDisplayedWord] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  

  // Typing effect
  useEffect(() => {
    const currentWord = words[index];
    const speed = isDeleting ? 180 : 180; // slower, more natural typing

    const handleTyping = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedWord(currentWord.slice(0, displayedWord.length + 1));
        if (displayedWord === currentWord) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedWord(currentWord.slice(0, displayedWord.length - 1));
        if (displayedWord === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(handleTyping);
  }, [displayedWord, isDeleting, index, words]);

  // Cursor blinking
  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorBlink);
  }, []);



  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);





  return (
    <div className="relative min-h-screen text-white hero-bg overflow-x-hidden">
     
      {/* Background video (with image placeholder) */}
      <div className="absolute inset-0 w-full h-full">
        {/* Image placeholder (shows before video loads) */}
        <img
          src={bgImg} // 👈🏽 replace with your actual image path
          alt="Background placeholder"
          className="absolute inset-0 w-full h-[700px] object-cover"
        />

        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-[700px]  object-cover"
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>


      {/* Navigation */}
      <nav
  className={`bg-black font-sans fixed top-0 left-[4%] z-20 px-4 md:px-8 h-[75px] md:h-[80px] py-2 md:py-5 flex flex-col md:flex-row gap-6 md:gap-0 w-[92%] transition-all duration-500 rounded-full `}
>
        <div className="flex items-center">
          <img
            src={logoImg}
            alt="Afrivate"
            className="sm:h-8 h-8 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] sm:pl-10"
          />
          <span className="ml-3 text-lg sm:text-xl font-poppins font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-purple-300 text-glow-white">
            AFRIVATE
          </span>
          <Link to="/login">
          <button className="flex bg-white py-3 px-5 rounded-xl lg:text-sm font-bold font-montserrat   md:hidden block ml-10">
            Log in
          </button>
        </Link>
          <i
            className="flex fa-solid fa-bars ml-auto text-xl p-4 text-purple-100 md:hidden lg:hidden"
            onClick={() => setIsOpen(true)}
          ></i>
        </div>

        <div className="hidden sm:hidden md:block lg:block w-[70%]">
          <div className="flex flex-wrap justify-center lg:text-sm font-bold items-center gap-4 sm:gap-6 md:gap-8 lg:gap-16 mx-[15%] pt-2">
            <Link to="/signup" className="transition-all">
              Dashboard
            </Link>
            <Link to="/community" className="nav-link transition-all">
              Community
            </Link>
            <Link to="/road" className="nav-link transition-all">
              Learning
            </Link>
            <Link to="#" className="nav-link transition-all">
              Wallet
            </Link>
            <Link to="#" className="nav-link transition-all">
              Settings
            </Link>
          </div>
        </div>

        <Link to="/login">
          <button className="bg-[#9900FF33] py-3 px-5 rounded-xl lg:text-sm font-bold font-montserrat hidden sm:hidden md:block lg:block">
            Log in
          </button>
        </Link>
      </nav>

      <div
        className={`fixed top-0 left-0 h-full w-[270px] rounded-tr-3xl rounded-br-3xl bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="">
          <div className="flex px-3 py-5">
            <div className="flex w-[50px] h-[50px] bg-gray-300 rounded-full"></div>
            <p className="flex font-sans text-xl text-black mt-[13px] font-bold">
              Tech Innovators
            </p>
          </div>

          <div className="mr-[5%]">
            <ul className="p-4 space-y-5 text-sm text-black font-medium font-sans">
              <Link to="/signup">
                <li className="bg-white w-[100%] py-2 pr-4 pl-1 rounded-xl hover:bg-gray-300">
                  <i className="fas fa-grip-horizontal pr-4 pl-2 m-2"></i>
                  Dashboard
                </li>
              </Link>
              <Link to="/community">
                <li className="bg-white w-[100%] py-2 pr-4 pl-1 rounded-xl hover:bg-gray-300">
                  <i className="fas fa-users pr-4 pl-2 m-2"></i>
                  Community
                </li>
              </Link>
              <Link to="/road">
                <li className="bg-white w-[100%] py-2 pr-4 pl-1 rounded-xl hover:bg-gray-300">
                  <i className="fas fa-school pr-4 pl-2 m-2"></i>
                  Learning
                </li>
              </Link>
              <Link to="#">
                <li className="bg-white w-[100%] py-2 pr-4 pl-1 rounded-xl hover:bg-gray-300">
                  <i className="fas fa-wallet pr-4 pl-2 m-2"></i>
                  Wallet
                </li>
              </Link>
              <Link to="#">
                <li className="bg-white w-[100%] py-2 pr-4 pl-1 rounded-xl hover:bg-gray-300">
                  <i className="fas fa-wrench pr-4 pl-2 m-2"></i>
                  Settings
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <Link to="/login">
          <button className="w-[80%] bg-purple-900 mt-[150px] mb-3 text-white text-sm font-extrabold py-3 rounded-xl px-3 mx-3 ml-[10%]">
            Log in
          </button>
        </Link>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Hero Content */}
      <main className="relative z-10 flex-1 md:flex items-center justify-center mt-[170px] md:mt-[170px]  px-6 sm:p-6 md:p-8">
        <div className="max-w-4xl mx-auto md:text-center  mt-20 sm:mt-[-150px] lg:mt-0 ">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-bold mb-6 sm:mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-purple-300 text-glow-white filter drop-shadow-[0_8px_16px_rgba(255,255,255,0.15)]">
            Where Jobs Meet{" "}
            <span className="text-purple-200">
              {displayedWord}
              <span className="text-white">{cursorVisible ? "|" : " "}</span>
            </span>
          </h1>

          <p className="text-sm md:text-center font-montserrat  sm:text-lg md:text-xl lg:text-base mb-8 sm:mb-10 text-gray-100/90 mx-auto px-1  tracking-wide font-semibold ">
            Afrivate is a smart web platform that connects youths with businesses, NGOs, and organizations for jobs, volunteering and professional growth.
          </p>

          <Link to="/signup" >
            <button className="bg-[#9900FF80] w-full md:w-[40%] px-5 py-4 rounded-2xl btn btn-lg font-montserrat font-bold lg:mt-[-15px]">
              Find your next Opportunity
            </button>
          </Link>
        </div>
      </main>


       
    <div className="relative  w-full h-[300px]  md:px-[30%] mt-[160px]">
        <div className=" absolute bg-blue-900 aspect-square rounded-full  w-[60%] md:w-[30%] left-[10%] md:left-[30%]">
        </div>
        <div className=" absolute bg-blue-800 bg-opacity-10 backdrop-blur-lg aspect-square rounded-full   w-[45%] md:w-[22.5%] left-[30%] top-[130px] md:top-[210px] md:left-[40%]">
        </div>
        <div className=" absolute bg-blue-700 bg-opacity-10 backdrop-blur-lg aspect-square rounded-full   w-[45%] md:w-[22.5%] left-[45%] top-[20px] md:left-[46%]">
        </div>
        <img
          src={africa}
          alt="Hero"
          className="absolute w-[65%] md:w-[32.5%] left-[21%] top-[27px] md:left-[35%] "
        />
        <img
          src={ManonSuit}
          alt="Hero"
          className="absolute w-[70%] md:w-[35%] left-[32%] top-[30px] md:left-[42%] "
        />

        <div className="absolute  w-[40%] md:w-[23%] ml-[20%] mt-[75px] md:mt-[100px] md:left-[13%]">
        <p className=" text-3xl md:text-5xl text-white font-bold leading-[1.1]">
          AFRICAN <br />DREAM </p> <br /><p className=" text-sm font-montserrat text-none leading-[1.0] mt-[-18px] md:mt-[-10px] md:block hidden">
          Aspire is a web-based platform connecting youths
          and service providers (businesses, NGOs, and organizations)
          through a smart, structured system for job opportunities, 
          volunteering, and professional development. </p>
        
        </div>
       <Link to="/signup">
       <img
          src={get}
          alt="Hero"
          className="absolute w-[40%] md:w-[13%] left-[18%] md:left-[35%] md:top-[380px] top-[200px] "
        />
       </Link>
      </div>

      <div className="leading-[0.1] ml-[9%] mt-[50px] md:mt-[400px] ">
          <h1 className="text-blue-900 font-montserrat font-bold text-2xl sm:text-3xl">ASPIRE</h1>
          <br />
          <p className="text-xs text-blue-900">Offers a web platform with:</p>
        </div>
     {/* 👇🏽 Scroll animation section */}
     
     <div className='absolute'>
     <section id="aspire-section" className="relative w-[500px] h-[900px] overflow-hidden ">
        {/* Normal Aspire content */}
       

        {/* 👇🏽 The scroll-reveal background image */}
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] z-19 transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(${(-120 + scrollProgress * 90)}%)`,
            opacity: scrollProgress * 0.2,
          }}
        >
          <img
            src={vector} // 👈🏽 replace this later
            alt="Background"
            className="w-full h-full "
          />
        </div>
      </section>
     </div>

      


    <div className="bg-gradient-to-r from-blue-900 to-purple-400 w-[40%] md:w-[30%]  md:h-[86px] ml-[9%] rounded-md mt-[10px] flex items-center justify-center ">
      <p className="text-xs font-montserrat text-white leading-[1.3] p-4 md:py-5">
      Role-based dashboards for  companies, job seekers, and volunteers. 
      </p>
    </div>

    <img
          src={arrow}
          alt="Hero"
          className="relative w-[19%] md:w-[10%] ml-[39%] md:ml-[45%]"
        />

    <div className="bg-gradient-to-r from-blue-900 to-purple-400 w-[40%] md:w-[30%]  md:h-[86px] ml-[50%] md:ml-[59%] rounded-md mt-[10px] flex items-center justify-center">
    <p className="text-xs font-montserrat text-white leading-[1.3] p-4 md:py-5">
    Secure wallets for escrow-based <br />job payments.
    </p>
    </div>
    <img
          src={arrow}
          alt="Hero"
          className="relative w-[19%] md:w-[10%] ml-[39%] md:ml-[45%] transform scale-x-[-1]"
        />
        <div className="bg-gradient-to-r from-blue-900 to-purple-400 w-[40%] md:w-[30%]  md:h-[86px] ml-[9%] rounded-md mt-[10px] flex items-center justify-center ">
        <p className="text-xs font-montserrat text-white leading-[1.3] p-4 md:py-5">
        Verified user profiles with <br /> portfolio, credentials, and <br /> past work. 
    </p>
    </div>
    <img
          src={arrow}
          alt="Hero"
          className="relative w-[19%] md:w-[10%] ml-[39%] md:ml-[45%]"
        />
        <div className="bg-gradient-to-r from-blue-900 to-purple-400 w-[40%] md:w-[30%]  md:h-[86px] ml-[50%] md:ml-[59%] rounded-md mt-[10px] flex items-center justify-center">
        <p className="text-xs font-montserrat text-white leading-[1.3] p-4 md:py-5">
        
        E-certificates for bootcamp <br />and volunteer participation.
    </p>
    </div>

    <section className="py-16  text-center px-4 sm:px-8 lg:px-16 mt-12">
      {/* Header */}
      <h2 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#45005A] to-[#B678FF] bg-clip-text text-transparent font-montserrat  mb-10">
        Voices of Our Community
      </h2>

      {/* Testimonials */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto font-sams font-extrabold">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            style={{
              background:
                "linear-gradient(90deg, #45005A 0%, #B678FF 100%)",
              color: "white",
            }}
          >
            <p className="text-sm sm:text-base mb-4 leading-relaxed">{item.text}<span className=" font-extrabold opacity-95 text-[#B678FF]">{item.author}</span></p>
            
          </div>
        ))}
      </div>
    </section>

    <div className="relative">
    <img
          src={people}
          alt="Hero"
          className="relative w-[66%] md:w-[30%] md:ml-[35%] ml-[24%] mt-[40px]"
        />
        <div className="absolute  bg-blue-900 bg-opacity-10 backdrop-blur-sm rounded-md top-[34%] md:left-[32%] left-[10%]">
        <h1 className="Text-white font-montserrat p-4 font-bold">
          JOIN US <br /> TODAY
        </h1>
        </div>
        <div className="w-full flex items-center mt-[30px]">
        
        <img
          src={get}
          alt="Hero"
          className="relative w-[40%] md:w-[10%] ml-[30%] md:ml-[45%]"
        />
        
        </div>
    </div>

    <div className=" relative  w-full mt-[50px] md:mt-[100px] ">
    <img
          src={main2}
          alt="Hero"
          className="absolute w-[50%] md:w-[25%] left-[5%] md:left-[27%]"
        />
        <p className="absolute text-1xl md:text-2xl font-montserrat text-blue-900 text-right left-[56%]">
          Start a Growing <br />Career <br /> <span className="text-1xl font-montserrat text-blue-500 text-right font-bold">With Us!</span>
        </p>

        <img
          src={apple}
          alt="Hero"
          className="absolute w-[35%] md:w-[9%] left-[56%] md:left-[61%] top-[144px] md:top-[140px]"
        />
         <img
          src={play}
          alt="Hero"
          className="absolute w-[35%] md:w-[9%] left-[56%] md:left-[51%] top-[80px] md:top-[140px]"
        />
    </div>
    
    {/* Footer (built from S5 design) */}
    <footer className="bg-[#2a0240] text-white py-12 sm:py-14 md:py-16 mt-[300px] md:mt-[400px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          <ul className="space-y-3 sm:space-y-4 text-sm sm:text-sm font-semibold">
            <li><a href="/#" className="hover:text-purple-200 transition-colors">Find Freelancers</a></li>
            <li><a href="/#" className="hover:text-purple-200 transition-colors">Find a Job</a></li>
            <li><a href="/#" className="hover:text-purple-200 transition-colors">How it Works</a></li>
            <li><a href="/#" className="hover:text-purple-200 transition-colors">About Afrivate</a></li>
            <li><a href="/#" className="hover:text-purple-200 transition-colors">Pricing</a></li>
            <li><a href="/#" className="hover:text-purple-200 transition-colors">Why Afrivate</a></li>
          </ul>
          <ul className="space-y-3 sm:space-y-4 text-sm sm:text-sm font-semibold md:justify-self-end">
            <li><a href="/#" className="hover:text-purple-200 transition-colors">Blog</a></li>
            <li><a href="/#" className="hover:text-purple-200 transition-colors">Enterprise Solutions</a></li>
            <li><a href="/#" className="hover:text-purple-200 transition-colors">Agency Solutions</a></li>
            <li><a href="/#" className="hover:text-purple-200 transition-colors">Purchase Order Solutions</a></li>
            <li><a href="/#" className="hover:text-purple-200 transition-colors">Work Agreements</a></li>
            <li><a href="/#" className="hover:text-purple-200 transition-colors">DeepPay</a></li>
          </ul>
        </div>
        <div className="mt-12 sm:mt-14 md:mt-16 flex items-center gap-6 sm:gap-8">
          {/* X/Twitter */}
          <a href="/#" aria-label="X (Twitter)" className="hover:opacity-90 transition-opacity">
            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 fill-white" aria-hidden="true">
              <path d="M18.244 2H21l-6.54 7.48L22 22h-6.8l-4.74-6.2L4.9 22H2l7.06-8.08L2 2h6.9l4.28 5.72L18.244 2Zm-2.38 18h2.1L8.21 4H6.05l9.81 16Z"/>
            </svg>
          </a>
          {/* WhatsApp */}
          <a href="/#" aria-label="WhatsApp" className="hover:opacity-90 transition-opacity">
            <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8 sm:w-9 sm:h-9" />
          </a>
          {/* Instagram */}
          <a href="/#" aria-label="Instagram" className="hover:opacity-90 transition-opacity">
            <img src={instagramIcon} alt="Instagram" className="w-8 h-8 sm:w-9 sm:h-9" />
          </a>
        </div>
      </div>
    </footer>

    </div>
  );
};

export default Landing;
