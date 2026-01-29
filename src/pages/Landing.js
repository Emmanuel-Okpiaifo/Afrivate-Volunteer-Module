import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../Assets/Vector (1).png';
import vector11 from '../Assets/Vector 11.png';
import vector12 from '../Assets/Vector 12.png';
import vector13 from '../Assets/Vector 13.png';
import airob from '../Assets/AI rob.png';
import airob1 from '../Assets/AI rob (1).png';
import star1 from '../Assets/Star 1.png';
import robb from '../Assets/image 11 (2).png';
import money from '../Assets/image 12.png';
import generate from '../Assets/Generated.png';
import vid from '../Assets/STQ6.png';
import how from '../Assets/How It Works.png';
import phone from '../Assets/Generated Image November 09, 2025 - 10_10PM 1 (1).png';
import work from '../Assets/grok-video-c21e1147-f3e2-4f09-8f81-a2f331dfa3e0 1.png';
import blob1 from '../Assets/Blob 1.png';
import blob2 from '../Assets/blob 2.png';
import hat from '../Assets/Group 338.png';
import ppl from '../Assets/Vector (5).png';
import tools from '../Assets/Group (1).png';
import world from '../Assets/Vector (6).png';
import badge from '../Assets/Group 341.png';
import vector from '../Assets/Vector (8).png';
import work2 from '../Assets/grok-video-8e5d6500-b97c-46c4-b804-b4a643565470 2.png';
import work3 from '../Assets/grok-video-90f255da-353b-4aad-a543-dbad3a8ca126 1.png';

import whatsappIcon from '../Assets/img/Group.png';
import instagramIcon from '../Assets/img/Group (1).png';

const Landing = () => {
  const [isOpen, setIsOpen] = useState(false);

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <span key={i}>⭐</span>
    ));
  };

  const jobs = [
    { title: "Product Designer", company: "Paystack", location: "Lagos, Nigeria", button: "View Details", image: work },
    { title: "AI/ML Engineer", company: "Apple", location: "Cape Town, SA", button: "View Details", image: work2 },
    { title: "Mobile Developer", company: "Dell", location: "Nairobi, Kenya", button: "View Details", image: work3 },
  ];

  const courses = [
    { title: "Creative Designing", school: "University of Bordeaux", rating: 4.5, button: "Get" },
    { title: "Video Editing", school: "University of Connecticut", rating: 4.5, button: "Get" },
    { title: "Web Development", school: "MIT", rating: 5, button: "Get" },
  ];

  return (
    <div className="bg-[#FAFAFA] relative min-h-screen text-white hero-bg overflow-x-hidden">
      <div className="inset-0 w-full h-full">
        <div className="absolute top-0 overflow-hidden bg-gradient-to-b from-[#290043] via-[#47116B] to-[#200035] absolute inset-0 w-full max-md:h-[340px] h-[660px] md:h-[700px] object-cover">
          <img src={vector13} alt='image1' className='absolute w-full max-md:object-cover max-md:object-top'/>
          <img src={vector12} alt='image2' className='absolute max-md:object-cover'/>
          <img src={vector11} alt='image3' className='absolute max-md:object-cover'/>
        </div>
      </div>

      <img src={star1} alt='image4' className='absolute max-md:hidden md:w-[4.5%] w-[9.5%] top-[435px] md:top-[410px] left-[8%]'/>
      <img src={star1} alt='image4' className='absolute max-md:hidden md:w-[3%] w-[8%] top-[550px] left-[15%]'/>
      <img src={star1} alt='image5' className='absolute max-md:hidden md:w-[2%] w-[7%]  top-[150px] left-[5%] md:left-[26%]'/>
      <img src={star1} alt='image6' className='absolute max-md:hidden md:w-[2%] w-[7%] top-[480px] right-[13%]'/>
      <img src={star1} alt='image7' className='absolute max-md:hidden md:w-[4.5%] w-[9.5%] top-[160px] right-[5%] md:right-[16%]'/>
      <img src={star1} alt='image8' className='absolute max-md:hidden md:w-[2%] w-[7%] top-[600px] left-[36%]'/>
      <img src={star1} alt='image9' className='absolute max-md:hidden md:w-[3%] w-[8%] top-[610px] right-[25%]'/>

      <nav className={`bg-black/25 backdrop-blur-xl border border-white/35 font-sans fixed top-2 left-[4%] z-20 px-3 md:px-8 h-[55px] md:h-[80px] py-1.5 md:py-5 flex flex-col md:flex-row gap-2 md:gap-0 w-[92%] max-lg:left-[4%] lg:left-1/2 lg:-translate-x-1/2 lg:w-full lg:max-w-5xl lg:px-8 transition-all duration-500 rounded-full shadow-lg shadow-black/20 `}>
        <div className="flex items-center flex-1 min-w-0">
          <i className="flex fa-solid fa-bars text-base pl-2 text-purple-100 hidden lg:block shrink-0" onClick={() => setIsOpen(true)}></i>
          <img src={logoImg} alt="Afrivate" className="h-6 sm:h-8 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] sm:pl-10 shrink-0" />
          <span className="ml-2 text-sm sm:text-xl font-poppins font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-purple-300 text-glow-white truncate">AFRIVATE</span>
          <i className="flex fa-solid fa-bars ml-auto text-base p-2 text-purple-100 lg:hidden shrink-0" onClick={() => setIsOpen(true)}></i>
        </div>
        <div className="hidden sm:hidden md:hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:min-w-0 shrink-0">
          <div className="flex flex-wrap justify-center lg:text-base font-semibold items-center gap-4 sm:gap-6 md:gap-10 lg:gap-8 xl:gap-12 pt-2">
            <Link to="/signup" className="transition-all whitespace-nowrap">Volunteering</Link>
            <Link to="/community" className="nav-link transition-all whitespace-nowrap">Contact us</Link>
            <Link to="/road" className="nav-link transition-all whitespace-nowrap">About us</Link>
          </div>
        </div>
      </nav>

      <div className={`fixed top-0 left-0 h-full w-[270px] rounded-tr-3xl rounded-br-3xl bg-[#6A00B1]/40 backdrop-blur-xl border border-white/40 shadow-2xl z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="mr-[5%]">
          <ul className="p-4 space-y-5 text-sm text-white font-medium font-montserrat">
            <Link to="/signup"><li className="bg-white/20 backdrop-blur-lg border border-white/30 w-[100%] py-2 pr-4 pl-1 rounded-xl hover:bg-gray-300 mt-5 block lg:hidden"><i className="fas fa-grip-horizontal pr-4 pl-2 m-2"></i>Volunteering</li></Link>
            <Link to="/signup"><li className="bg-white/20 backdrop-blur-lg border border-white/30 w-[100%] py-2 pr-4 pl-1 rounded-xl hover:bg-gray-300 mt-5"><i className="fa-solid fa-house pr-4 pl-2 m-2"></i>Dashboard</li></Link>
            <Link to="/community"><li className="bg-[#6A00B1]/30 backdrop-blur-xl border border-white/30 w-[100%] py-2 pr-4 pl-1 rounded-xl hover:bg-gray-300 mt-5 block lg:hidden"><i className="fa-solid fa-phone pr-4 pl-2 m-2"></i>Contact Us</li></Link>
            <Link to="/road"><li className="bg-[#6A00B1]/30 backdrop-blur-xl border border-white/30 w-[100%] py-2 pr-4 pl-1 rounded-xl hover:bg-gray-300 mt-5 block lg:hidden"><i className="fas fa-users pr-4 pl-2 m-2"></i>About Us</li></Link>
            <Link to="/signup"><li className="bg-white/20 backdrop-blur-lg border border-white/30 w-[100%] py-2 pr-4 pl-1 rounded-xl hover:bg-gray-300 mt-5"><i className="fa-solid fa-bookmark pr-4 pl-2 m-2"></i>Bookmarks</li></Link>
            <Link to="/signup"><li className="bg-white/20 backdrop-blur-lg border border-white/30 w-[100%] py-2 pr-4 pl-1 rounded-xl hover:bg-gray-300 mt-5"><i className="fa-solid fa-gear pr-4 pl-2 m-2"></i>Settings</li></Link>
          </ul>
        </div>
        <Link to="/login"><button className="w-[80%] bg-white/15 backdrop-blur border border-white/50 mt-[30px] mb-3 text-white text-sm md:text-lg py-2.5 md:py-4 rounded-xl px-4 mx-3 ml-[5%]">Sign up</button></Link>
      </div>

      {isOpen && <div className="fixed inset-0 bg-opacity-50 z-40" onClick={() => setIsOpen(false)} />}

      <main className="relative z-10 flex-1 md:flex items-center justify-center max-md:mt-[92px] mt-[90px] md:mt-[130px] max-md:px-3 px-4 sm:p-6 md:p-8 max-md:min-h-0">
        <div className="mx-auto w-full max-md:max-w-[100%] md:text-center max-md:mt-2 mt-8 md:mt-20 sm:mt-[-150px] lg:mt-0">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-montserrat text-center font-bold max-md:mb-2 max-md:leading-snug mb-3 sm:mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-purple-300 text-glow-white filter drop-shadow-[0_8px_16px_rgba(255,255,255,0.15)]">
            Volunteer Your Skills,<br className='hidden md:block'/> Build Your Future.
          </h1>
          <p className="md:text-lg text-[11px] text-center font-montserrat max-md:mb-3 max-md:max-w-[320px] max-md:mx-auto mb-4 sm:mb-10 text-gray-100/90 mx-auto px-1 tracking-wide font-medium">
            Volunteering on Afrivate helps Africans gain real experience, grow professionally, and<br className='hidden md:block'/> connect with organizations that value impact over borders.
          </p>
          <div className="w-full max-w-4xl mx-auto bg-white/10 backdrop-blur-xl border border-white/10 rounded-full px-2 max-md:py-1.5 py-2 md:px-3 md:py-3 flex items-center shadow-lg max-md:mb-3 mb-4 md:mb-10">
            <i className="fa-solid fa-magnifying-glass text-sm md:text-lg md:ml-[3%] max-md:text-xs"></i>
            <input type="text" className="ml-2 bg-transparent md:text-xl outline-none text-white placeholder-white w-full font-montserrat max-md:h-[24px] h-[28px] md:h-[30px] text-xs md:text-base md:ml-[2%]" placeholder='Search for an Opportunity' />
            <button className='md:w-[8%] w-[18%] max-md:h-[30px] h-[36px] md:h-[50px] rounded-full border border-white/30 bg-white/10 backdrop-blur-base shadow-[inset_0_0_6px_rgba(255,255,255,0.35)] hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300 flex items-center justify-center'><i className="fa-solid fa-arrow-right text-white max-md:text-sm text-base md:text-3xl"></i></button>
          </div>
          <div className="w-full max-w-4xl mx-auto max-md:block lg:flex lg:justify-center max-md:px-0">
            <Link to="/signup" className="max-md:w-[95%] max-md:mx-auto max-md:block"><button className="w-full max-md:block lg:block py-2.5 md:py-6 lg:py-3 lg:px-14 lg:w-auto lg:min-w-[320px] lg:max-w-[380px] lg:mx-auto font-montserrat text-sm md:text-lg rounded-full bg-[#9F4EFF] text-white font-bold md:font-extrabold shadow-md hover:bg-purple-700 transition">Sign Up</button></Link>
          </div>
        </div>
      </main>

      <div className="relative w-full overflow-hidden max-md:overflow-visible max-md:overflow-x-hidden px-4 md:px-0 md:py-16 py-4 mt-8 md:mt-[120px] font-montserrat md:pb-24 md:min-h-[832px] md:max-w-[1280px] md:mx-auto">
        <img className='w-full max-md:max-w-full md:w-[70%] md:ml-[15%]' alt='how it works' src={how}/>
        <img className='absolute left-[-30%] top-[80px] w-[120%] max-w-none max-md:relative max-md:top-0 max-md:left-0 max-md:block max-md:w-[85%] max-md:max-w-[280px] max-md:mx-auto max-md:mt-10 max-md:z-10 md:left-[14.5%] md:top-[52px] md:w-[71%] md:max-w-[909px] md:max-h-[909px] md:object-contain md:object-top' alt='Phone showing how it works' src={phone}/>
        <div className="relative flex items-start gap-2 rounded-[30px] px-4 py-3 md:px-9 md:py-6 bg-[#6A00B11A] max-md:w-full max-md:mx-0 w-[95%] md:w-[375px] md:min-h-[124px] md:absolute md:left-[8.2%] md:top-[30%] md:mt-0 mt-4 ml-[2.5%] md:ml-0">
          <div>
            <h4 className="font-montserrat font-extrabold text-black text-sm md:text-2xl md:leading-[29px]">1. Create Profile</h4>
            <p className="font-montserrat font-medium text-[#6A00B1] text-xs md:text-xl md:leading-6 mt-0.5 md:mt-1">Highlight your skills and aspirations.</p>
          </div>
        </div>
        <div className="relative flex items-start gap-2 rounded-[30px] px-4 py-3 md:px-9 md:py-6 bg-[#6A00B11A] max-md:w-full max-md:mx-0 md:w-[392px] md:min-h-[148px] md:absolute md:left-[62.7%] md:top-[45%] w-[95%] mt-3 ml-[2.5%] md:ml-0 md:mt-0">
          <div>
            <h4 className="font-montserrat font-extrabold text-black text-sm md:text-2xl md:leading-[29px]">2. Explore Volunteering Opportunities</h4>
            <p className="font-montserrat font-medium text-[#6A00B1] text-xs md:text-xl md:leading-6 mt-0.5 md:mt-1">Check out volunteering opportunities curated for you.</p>
          </div>
        </div>
        <div className="relative flex items-start gap-2 rounded-[30px] px-4 py-3 md:px-9 md:py-6 bg-[#6A00B11A] max-md:w-full max-md:mx-0 md:w-[380px] md:min-h-[130px] md:absolute md:left-[20.9%] md:top-[73%] w-[95%] md:mt-0 mt-3 ml-[2.5%] md:ml-0">
          <div>
            <h4 className="font-montserrat font-extrabold text-black text-sm md:text-2xl md:leading-[29px]">3. Apply & Grow</h4>
            <p className="font-montserrat font-medium text-[#6A00B1] text-xs md:text-xl md:leading-6 mt-0.5 md:mt-1">Take the next step in your career.</p>
          </div>
        </div>
      </div>

      <div className="w-full p-4 md:p-6 md:px-[30px] md:max-w-[1280px] md:mx-auto font-montserrat mt-8 md:mt-[130px]">
        <h2 className="text-[#6A00B1] font-extrabold text-lg md:text-[36px] md:leading-[44px] ml-[2%]">Featured <br className='block md:hidden'/>Opportunities</h2>
        <h2 className="text-[#6A00B1] text-xs md:text-xl md:leading-6 md:font-medium ml-[2%] mt-1">Explore top-rated volunteering roles available this week</h2>
        <div className='flex'><h2 className="flex text-[#6A00B1] text-[10px] md:text-xl md:leading-6 md:font-medium mb-4 md:mb-6 ml-auto mr-[5%] md:mr-[30px] items-center font-md">See more   <i className="fa-solid fa-arrow-right text-[#6A00B1] ml-1 text-[10px] md:text-base"></i></h2></div>
        <div className="flex gap-3 md:gap-4 overflow-x-auto whitespace-nowrap pb-4 md:pb-8 px-2 md:px-0 ml-[0%] thin-scrollbar">
          {jobs.map((job, index) => (
            <div key={index} className="inline-block min-w-[200px] md:min-w-[395px] md:w-[395px] md:h-[547px] md:flex md:flex-col bg-white rounded-xl md:rounded-[30px] md:border md:border-[#E9E9E9] shadow md:shadow-none p-3 md:pt-4 md:px-[33px] md:pb-6 thin-scrollbar">
              <div className="relative w-full h-[140px] md:h-[328px] md:rounded-[20px] rounded-xl md:rounded-[20px] overflow-hidden thin-scrollbar md:flex-shrink-0">
                <img src={job.image} alt={job.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-2 left-2 md:bottom-4 md:left-1/2 md:-translate-x-1/2 md:w-[242px] md:min-h-[49px] md:flex md:items-center md:justify-center md:px-2.5 md:py-2.5 bg-[white/10] backdrop-blur border border-white/40 md:border-0 text-white text-xs md:text-2xl md:leading-[29px] px-2 py-0.5 md:rounded-[10px] rounded md:rounded-lg font-bold">{job.title}</div>
              </div>
              <div className="mt-2 md:mt-1">
                <p className="text-[10px] md:text-base md:leading-5 md:text-[#797979] md:font-bold text-gray-500 font-bold">{job.company}</p>
                <div className="flex items-center gap-1 md:gap-2 mt-1 md:mt-1.5 text-gray-500 md:text-[#797979] text-[10px] md:text-xl md:leading-6 md:font-bold font-bold">
                  <i className="fa-solid fa-location-dot text-[10px] md:text-base"></i><span>{job.location}</span>
                </div>
              </div>
              <button className="w-[85%] ml-[7.5%] md:ml-0 md:w-[307px] md:h-[69px] md:mx-auto md:flex md:items-center md:justify-center bg-[#6A00B1] text-white py-1.5 md:py-5 md:px-20 rounded-lg md:rounded-[20px] mt-2 md:mt-auto mb-2 md:mb-0 text-xs md:text-2xl md:leading-[29px] font-semibold md:font-bold">{job.button}</button>
            </div>
          ))}
        </div>
      </div>

      <div className='relative md:h-[550px] h-auto w-full md:mt-10 mt-8 font-montserrat p-4 md:p-6'>
        <img alt='blob1' src={blob2} className='absolute right-0 top-0 md:w-auto w-[120%] max-w-none opacity-50'/>
        <img alt='blob1' src={blob1} className='absolute left-0 bottom-0 md:w-auto w-[140%] max-w-none opacity-50'/>
        <h2 className="relative text-[#6A00B1] font-montserrat font-extrabold md:text-3xl text-lg ml-[2%] mb-1">Why Volunteer?</h2>
        <h2 className="relative text-[#6A00B1] font-montserrat md:text-base text-xs ml-[2%] mb-4 md:mb-0">It's more than just helping. It's<br className='block md:hidden'/> about growth.</h2>
        <div className='md:flex gap-14 md:mt-[100px] mt-4 ml-[3%]'>
          <div className='md:w-[21%] w-[90%] md:ml-0 ml-[5%] md:h-[250px] h-auto rounded-xl md:rounded-2xl bg-[#6A00B11A] backdrop-blur-md border border-white/20 p-3 md:p-4 mb-3 md:mb-0'>
            <div className='flex rounded-full w-[12%] md:w-[15%] h-[30px] md:h-[40px] ml-[40%] mt-1 md:mt-2 bg-white/10 backdrop-blur-lg border border-white/10 flex items-center justify-center'><img className='p-0.5 md:p-1' src={hat} alt='' /></div>
            <p className='text-black font-sans font-bold md:text-2xl text-base ml-[15%] mt-1'>Gain Experience</p>
            <div className='text-black md:text-base text-xs font-sans'>
              <p className='mt-1 ml-[5%]'><i className="fa-solid fa-check text-white text-sm md:text-2xl"></i> Build your Resume</p>
              <p className='mt-1.5 md:mt-3 ml-[5%]'><i className="fa-solid fa-check text-white text-sm md:text-2xl"></i> Learn real-world skills</p>
              <p className='font-sans mt-1.5 md:mt-3 ml-[5%]'><i className="fa-solid fa-check text-white text-sm md:text-2xl"></i> Explore career paths</p>
            </div>
          </div>
          <div className='md:w-[21%] w-[90%] md:ml-0 ml-[5%] md:h-[250px] h-auto rounded-xl md:rounded-2xl bg-[#6A00B11A] backdrop-blur-md border border-white/20 md:mt-0 mt-3 p-3 md:p-4 mb-3 md:mb-0'>
            <div className='rounded-full w-[12%] md:w-[15%] h-[30px] md:h-[40px] ml-[40%] mt-1 md:mt-2 bg-white/5 backdrop-blur border border-white/10 flex items-center justify-center'><img className='p-0.5 md:p-1' src={ppl} alt='' /></div>
            <p className='text-black font-sans font-bold md:text-2xl text-base ml-[15%] mt-1'>Meet Friends</p>
            <div className='text-black md:text-base text-xs font-sans'>
              <p className='mt-1 ml-[5%]'><i className="fa-solid fa-check text-white text-sm md:text-2xl"></i> Connect with like Minds</p>
              <p className='mt-1.5 md:mt-3 ml-[5%]'><i className="fa-solid fa-check text-white text-sm md:text-2xl"></i> Expand your network</p>
              <p className='font-sans mt-1.5 md:mt-3 ml-[5%]'><i className="fa-solid fa-check text-white text-sm md:text-2xl"></i> Join a supportive community</p>
            </div>
          </div>
          <div className='md:w-[21%] w-[90%] md:ml-0 ml-[5%] md:h-[250px] h-auto rounded-xl md:rounded-2xl bg-[#6A00B11A] backdrop-blur-md border border-white/20 md:mt-0 mt-3 p-3 md:p-4 mb-3 md:mb-0'>
            <div className='rounded-full w-[12%] md:w-[15%] h-[30px] md:h-[40px] ml-[40%] mt-1 md:mt-2 bg-white/5 backdrop-blur border border-white/10 flex items-center justify-center'><img className='p-1 md:p-2' src={tools} alt='' /></div>
            <p className='text-black font-sans font-bold md:text-2xl text-base ml-[15%] mt-1'>Build Skills</p>
            <div className='text-black md:text-base text-xs font-sans'>
              <p className='mt-1 ml-[5%]'><i className="fa-solid fa-check text-white text-sm md:text-2xl"></i> Leadership Development</p>
              <p className='mt-1.5 md:mt-3 ml-[5%]'><i className="fa-solid fa-check text-white text-sm md:text-2xl"></i> Project Management</p>
              <p className='font-sans mt-1.5 md:mt-3 ml-[5%]'><i className="fa-solid fa-check text-white text-sm md:text-2xl"></i> Communication skills</p>
            </div>
          </div>
          <div className='md:w-[21%] w-[90%] md:ml-0 ml-[5%] md:h-[250px] h-auto rounded-xl md:rounded-2xl bg-[#6A00B11A] backdrop-blur-md border border-white/20 md:mt-0 mt-3 p-3 md:p-4 mb-3 md:mb-0'>
            <div className='rounded-full w-[12%] md:w-[15%] h-[30px] md:h-[40px] ml-[40%] mt-1 md:mt-2 bg-white/5 backdrop-blur border border-white/10 flex items-center justify-center'><img className='p-1 md:p-2' src={world} alt='' /></div>
            <p className='text-black font-sans font-bold md:text-2xl text-base ml-[15%] mt-1'>Help Locals</p>
            <div className='text-black md:text-base text-xs font-sans'>
              <p className='mt-1 ml-[5%]'><i className="fa-solid fa-check text-white text-sm md:text-2xl"></i> Improve your city</p>
              <p className='mt-1.5 md:mt-3 ml-[5%]'><i className="fa-solid fa-check text-white text-sm md:text-2xl"></i> Support Family and friends</p>
              <p className='font-sans mt-1.5 md:mt-3 ml-[5%]'><i className="fa-solid fa-check text-white text-sm md:text-2xl font-extrabold"></i> See direct impact</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-auto bg-gradient-to-br from-[#8500DE] via-[#1F0133] via-[#6A00B1] to-[#000000] rounded-2xl md:rounded-[40px] md:w-[64%] w-[95%] ml-[2.5%] md:ml-[18%] mt-8 md:mt-20 font-montserrat md:p-14 p-4 text-center">
        <p className='md:text-4xl text-lg font-extrabold text-white'>Ready to Start Your Journey?</p>
        <p className='md:text-xl text-[11px] font-base text-white md:mt-4 mt-2'>Join a Growing community of change-makers and<br className='hidden md:block'/> innovators across Africa. Your next opportunity is just a click<br className='hidden md:block'/>away.</p>
        <button className="md:px-[130px] px-6 md:mt-10 mt-3 py-2 md:py-3 font-montserrat rounded-xl md:rounded-2xl border-2 border-white text-[#6A00B1] text-sm md:text-2xl font-extrabold bg-white font-bold transition">Create Account</button>
      </div>
      <div className='flex bg-[#0A990033] items-center w-[95%] md:w-[55%] ml-[2.5%] md:ml-[22.5%] md:mt-[30px] mt-3 rounded-full h-[35px] md:h-[70px] px-2 md:px-10'>
        <img className='w-[5%] md:w-[6%]' src={badge} alt='badge' />
        <p className='md:text-lg text-[8px] font-extrabold font-sans text-[#0A9900] pl-0.5 md:pl-6'>Verified Organizations Only|</p>
        <p className='md:text-lg text-[8px] font-sans font-sm text-[#0A9900] pl-0.5 md:pl-1'>We verify every partner for your safety</p>
      </div>

      <div className='relative font-sans mt-8 md:mt-0'>
        <p className='text-base sm:text-xl md:text-4xl text-[#6A00B1] font-medium italic font-sans p-2 md:p-3 md:ml-[25%] md:mt-[250px] mt-8'>What Our People Have<br className='hidden md:block'/>To Say…</p>
        <div className="relative md:absolute md:top-[-100px] top-4 max-w-xl py-4 p-4 md:py-10 md:p-6 rounded-xl md:rounded-3xl text-[#6A00B1] font-semibold bg-white/20 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-gradient-to-br from-purple-100/70 via-purple-200/40 to-purple-100/80 md:ml-[53%] ml-[3%] m-2 md:m-0">
          <p className="text-[10px] md:text-base leading-relaxed">"Afrivate helped me land a remote marketing<br className='hidden md:block'/>job with a Canadian company. Life-changing<br className='hidden md:block'/>platform!" <span className="text-purple-600 font-semibold"> – Komolafe O</span></p>
        </div>
        <div className="relative md:absolute md:top-[140px] top-4 max-w-xl p-4 md:p-6 md:py-10 rounded-xl md:rounded-3xl text-[#6A00B1] font-semibold bg-white/20 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-gradient-to-br from-purple-100/70 via-purple-200/40 to-purple-100/80 md:ml-[20%] ml-[3%] m-2 md:m-0">
          <p className="text-[10px] md:text-base leading-relaxed">"Afrivate connected me to a U.S. startup as a<br/>Product designer. My career has grown<br/>globally." <span className="text-purple-600 font-semibold"> – Don K</span></p>
        </div>
      </div>
      <div className="w-full flex justify-center md:justify-end md:px-[300px] gap-8 md:gap-16 md:mt-[170px] mt-8 font-sans">
        <div className="text-center"><h2 className="text-base sm:text-xl md:text-2xl font-bold text-[#6A00B1]">10,000+</h2><p className="text-[#191919] md:text-base text-[10px]">Happy Clients</p></div>
        <div className="text-center"><h2 className="text-base sm:text-xl md:text-2xl font-bold text-[#6A00B1]">1200+</h2><p className="text-[#191919] md:text-base text-[10px]">Reviews</p></div>
      </div>

      <header className="w-full bg-[#f3f3f3] px-4 md:px-10 lg:px-[100px] py-4 md:py-6 mt-8 md:mt-16">
        <div className="flex items-center justify-between lg:flex-row flex-col gap-3 md:gap-6">
          <div className="flex items-center justify-start gap-2">
            <img src={vector} alt="Afrivate Logo" className="w-5 md:w-7 object-contain" />
            <span className="text-[#6A00B1] font-extrabold font-poppins text-sm md:text-xl">AFRIVATE</span>
          </div>
          <nav className="flex md:gap-8 gap-4 text-[#6A00B1] text-xs md:text-sm font-extrabold">
            <Link to="/" className="hover:underline whitespace-nowrap text-ellipsis"> <p>Home</p></Link>
            <Link to="/road" className="hover:underline whitespace-nowrap text-ellipsis"> <p>About Us</p></Link>
            <Link to="/community" className="hover:underline whitespace-nowrap text-ellipsis"> <p>Contact Us</p></Link>
          </nav>
        </div>
        <div className="flex items-center justify-between md:mt-20 mt-4 lg:flex-row flex-col gap-3 md:gap-6 text-center">
          <p className="text-[10px] md:text-xs text-[#6A00B1] font-montserrat whitespace-nowrap text-ellipsis">© Afrivate 2026 — Elevating Life in Africa</p>
          <div className="flex items-center gap-4 md:gap-7 text-[#6A00B1] text-base md:text-2xl">
            <i className="fa-brands fa-x-twitter"></i>
            <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Landing;
