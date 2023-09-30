import { Link } from 'react-router-dom'
import location from "../assets/location.png"
import emailIcon1 from "../assets/emailIcon1.png"
import phone from "../assets/phoneIcon.png"
import { useState } from 'react'
import Modal from './Modal'
import Menu from './Menu'
import whatsapp from "../assets/WhatsApp.svg.webp"
import projectImages from '../assets/projectImages'
import back from "../assets/backButton.png"
import next from "../assets/next1.png"
import bosnia from '../assets/villaBosnia'
import res159 from '../assets/res159'
import mbed from '../assets/modernbed'
import dinning from '../assets/dining'
import bedInterior from '../assets/bedRoomInterior'
import corporateOffice from '../assets/corporateOffice'
import nafeesa from '../assets/nafeesa'
import hotelInterior from '../assets/hotelInterior'
import modernHouse from '../assets/modernHouse'
import image1 from "../assets/render.jpg"
import restaurant from '../assets/restaurant'
import livingRoom from '../assets/livingRoom'
import bedInterior1 from '../assets/bedInterior1'
import designBedroom  from '../assets/designBedroom'
import roomLiving from '../assets/roomLiving'
import modernLounge from '../assets/modernLounge'
import drawingroom from '../assets/drawingRoom'
import apartDesign from '../assets/apartDesign'
import gym from '../assets/gym'
import entrance from '../assets/entrance'
import wardrobe from '../assets/wardrobe'
import bedroomHotel from '../assets/bedroomHotel'
import modernBed from '../assets/modernBeds'
import benergy from '../assets/benergy'
import bathroom from '../assets/bathroom'
import apartment from '../assets/apartment'
import houseInterior from '../assets/houseInterior'
import luxuryApartment from '../assets/luxuryApartment'
import sahq from '../assets/sahq'
import executive from '../assets/executive'
import farmhouse from '../assets/farmhouse'
import farmDesign from '../assets/farmDesign'


export default function Projects() {
  const [state, setState] = useState("ALL")
  const [Bosnia, setState1] = useState(0)
  const [Res159, setState2] = useState(0)
  const [Mbed, setState3] = useState(0)
  const [Dinning, setState4] = useState(0)
  const [BedInterior,setState5] = useState(0)
  const [BedInterior1, setState6] = useState(0)
  const [Corporate, setState7] = useState(0)
  const [Nafeesa, setState8] = useState(0)
  const [HotelInterior, setState9] = useState(0)
  const [ModernHouse, setState10] = useState(0)
  const [Restaurant, setState11] = useState(0)
  const [LivingRoom, setState12] = useState(0)
  const [BedInteriors, setState13] = useState(0)
  const [DesignBedroom, setState14] = useState(0)
  const [RoomLiving, setState15] = useState(0)
  const [ModernLounge, setState16] = useState(0)
  const [DrawingRoom, setState17] = useState(0)
  const [ApartDesign, setState18] = useState(0)
  const [Gym, setState19] = useState(0)
  const [Entrance, setState20] = useState(0)
  const [Wardrobe, setState21] = useState(0)
  const [BedroomHotel, setState22] = useState(0)
  const [ModernBed, setState23] = useState(0)
  const [Benergy, setState24] = useState(0)
  const [Bathroom, setState25] = useState(0)
  const [Apartment, setState26] = useState(0)
  const [HouseInterior, setState27] = useState(0)
  const [Luxury, setState28] = useState(0)
  const [SAHQ, setState29] = useState(0)
  const [Executive, setState30] = useState(0)
  const [Farmhouse, setState31] = useState(0)
  const[FarmDesign, setState32] = useState(0)




  window.addEventListener("scroll", () => {
    const topBorder = document.getElementById('navbar-container').getBoundingClientRect().top;
    topBorder >= 0
      ? document.getElementById("navbar").classList.remove("fixed")
      : document.getElementById("navbar").classList.add("fixed");
    
    
  })

  
  window.scrollTo(0, 0);
 
  
  const handleNavLinkClick = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    document.body.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const handleNavigation = () => {
    var select = document.getElementById('serviceSelector').value
    if (select == 'architecture') {
      window.location.href = "/services/architecture"
    }
    else if (select == 'interior') {
      window.location.href = "/services/interiors"

    }
    else if (select == 'landscape') {
      window.location.href = "/services/landscape"

    }
    else if (select == 'urban') {
      window.location.href = "/services/urban"

    }
    else if (select == 'commercial') {
      window.location.href = "/services/commercial"

    }
    else if (select == 'facade') {
      window.location.href = "/services/facade-design"

    }
    else if (select == 'visual') {
      window.location.href = "/services/visualization"

    }
    else if (select == 'hos') {
      window.location.href = "/services/hospitality"

    }
    else if (select == 'edu') {
      window.location.href = "/services/workplace"

    }
    else if (select == 'res') {
      window.location.href = "/services/res"

    }
    else if (select == 'con') {
      window.location.href = "/services/construction"

    } else {
      window.location.href = "/services"
    }
  }
  return (
    <>
      <header id='navbar-container'>
        <nav id="navbar">
          <div className="logo">
            <h1><Link to="/">A / 75</Link></h1>
          </div>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li >
              <Link to="/services"

                onMouseOver={() => {
                  setTimeout(() => {
                    document.getElementById('menuLinks').classList.add('show')
                  }, 600)



                }}

              >
                EXPERTISE

              </Link>



            </li>
            <li><Link to="/projects">PROJECTS</Link></li>



            <li><Link to="/contact">CONTACT</Link></li>
            <li><Modal /></li>
            <li onClick={() => {
              if (document.getElementById('sideBarContainer').style.display == "none") {
                setTimeout(() => {
                  document.getElementById('sideBarContainer').classList.add('show')
                  document.getElementById('sideBarContainer').style.display = "block"
                }, 300)

              }
              else {
                document.getElementById('sideBarContainer').style.display = "none"
                document.getElementById('sideMenu').style.display = "block"


              }

            }} id='sideMenu'>
              <Menu />
            </li>

            <li onClick={() => {
              if (document.getElementById('navLinks').style.display === "none" || document.getElementById('navLinks').style.display === "") {
                document.getElementById('navLinks').style.display = "block"
              } else {
                document.getElementById('navLinks').style.display = "none"
              }

            }}>
              <div></div>
              <div></div>
              <div></div>
              <li id="navLinks">
                <Link to="/" onClick={handleNavLinkClick}>HOME</Link>
                <Link to="/about" onClick={handleNavLinkClick}>ABOUT</Link>
                
                <Link to="/services" onClick={handleNavLinkClick}>EXPERTISE</Link>
                <select name="" id="serviceSelector" onClick={(event) => {
                  event.stopPropagation()
                }} onChange={handleNavigation}>
                  <optgroup>
                    <option value="" id=''></option>
                    <option value="architecture" id='ARCHITECTURE'>ARCHITECTURE</option>
                    <option value="interior" id='INTERIORS'>INTERIORS</option>
                    <option value="landscape" id='LANDSCAPEDESIGN'>LANDSCAPE DESIGN</option>
                    <option value="urban" id='URBANDESIGNPLANNING'>URBAN DESIGN + PLANNING</option>
                    <option value="commercial" id='COMMERCIALINTERIORS'>COMMERCIAL INTERIORS</option>
                    <option value="facade" id='FACADEDESIGN'>FACADE DESIGN</option>
                    <option value="visual" id='VISUALIZATION'>VISUALIZATION</option>
                    <option value="hos" id='HOSPITALITY'>HOSPITALITY</option>
                    <option value="edu" id='EDUCATION'>WORKPLACE</option>
                    <option value="res" id='RESIDENTIAL'>RESIDENTIAL</option>
                    <option value="con" id='CONSTRUCTION'>CONSTRUCTION</option>
                  </optgroup>
                </select>
                <Link to="/projects">PROJECTS</Link>
                <Link to="/contact" onClick={handleNavLinkClick}>CONTACT</Link>
              </li>

            </li>

          </ul>
        </nav>

      </header>

      <ul id='menuLinks'>
        <li><Link to="/services/architecture">ARCHITECTURE</Link></li>
        <li><Link to="/services/interiors">INTERIORS</Link></li>
        <li><Link to="/services/landscape">LANDSCAPE DESIGN</Link></li>
        <li><Link to="/services/urban">URBAN DESIGN + PLANNING</Link></li>
        <li><Link to="/services/commercial">COMMERCIAL</Link></li>
        <li><Link to="/services/facade-design">FACADE DESIGN</Link></li>
        <li><Link to="/services/visualization">VISUALIZATION</Link></li>
        <li><Link to="/services/hospitality">HOSPITALITY</Link></li>
        <li><Link to="/services/workplace">WORKPLACE</Link></li>
        <li><Link to="/services/res">RESIDENTIAL</Link></li>
        <li><Link to="/services/construction">CONSTRUCTION</Link></li>
      </ul>

      <div id="sideBarContainer">
        <span id='closeSideMenu' onClick={() => {
          document.getElementById('sideBarContainer').style.display = "none"
        }}>X</span>
        <div className="sideBarLogo">
          <h1>A  / <span>75</span></h1>
        </div>
        <div className="sideBarSocialLinks">
          <a href="https://www.facebook.com/profile.php?id=61551238487509" target='_blank' id='facebook'>

            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z" fill="#000000" />
            </svg>
          </a>
          <a href="https://www.instagram.com/atelier75.co/?igshid=MjEwN2IyYWYwYw%3D%3D" target='_blank' id='insta'>
            <svg width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">

              <g fill="none" fillRule="evenodd">

                <path d="m0 0h32v32h-32z" />

                <path d="m23.6190476.13999994.2518496.00400082c4.4330352.13698982 7.9850489 3.77162206 7.9891029 8.23707871v15.23796813l-.0040009.2518496c-.1369898 4.4330352-3.771622 7.9850489-8.2370787 7.9891029h-15.23796812l-.25184954-.0040009c-4.43303524-.1369898-7.98504891-3.771622-7.9891029-8.2370787v-15.23796812l.00400082-.25184954c.13698982-4.43303524 3.77162206-7.98504891 8.23707871-7.9891029zm0 2.00571434h-15.23809522l-.2285857.00411224c-3.33773425.12028135-6.0066524 2.86402399-6.0066524 6.23112586v15.23809522l.00411224.2285857c.12028135 3.3377343 2.86402399 6.0066524 6.23112586 6.0066524h15.23809522l.2285857-.0041122c3.3377343-.1202814 6.0066524-2.864024 6.0066524-6.2311259v-15.23809522l-.0041122-.2285857c-.1202814-3.33773425-2.864024-6.0066524-6.2311259-6.0066524zm-7.6191758 4.85142851.2653486.00407526c4.8475552.14463612 8.7331682 4.11734025 8.7376368 8.99891015 0 4.9720125-4.0307165 9.002729-9.0028572 9.002729s-9.00285716-4.0307165-9.00285716-9.0028572c0-4.8833525 3.88804756-8.8586028 8.73741066-8.99901883zm.0001282 2.00571437c-3.8644153 0-6.99714284 3.13272754-6.99714284 6.99714284s3.13272754 6.9971428 6.99714284 6.9971428 6.9971428-3.1327275 6.9971428-6.9971428-3.1327275-6.99714284-6.9971428-6.99714284zm8.7619048-3.91047622c.7642569 0 1.3838095.61955263 1.3838095 1.38380953s-.6195526 1.38380953-1.3838095 1.38380953c-.764257 0-1.3838096-.61955263-1.3838096-1.38380953s.6195526-1.38380953 1.3838096-1.38380953z" fill="#000000" fillRule="nonzero" />

              </g>

            </svg>
          </a>

          <a href="https://www.linkedin.com/in/saad-bashir-28b3ba116/" target='_blank' id='linkedin'>
            <svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
              viewBox="-143 145 512 512" xmlSpace="preserve">
              <path d="M-143,145v512h512V145H-143z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7
c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6
c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1
c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z"/>
            </svg>
          </a>
        </div>
        <h4>CONTACT US</h4>
        <div className="sideBarLocation">
          <div>
            <img src={location} alt="" />
          </div>
          <div>
            <p>602-D Eden Towers, Main Boulevard Gulberg |||</p>
            <p> Lahore, Pakistan</p>
          </div>

        </div>

        <div className="sideBarEmail">
          <div>
            <img src={emailIcon1} alt="" />
          </div>
          <dir>
            <p>info@atelier75.co</p>
          </dir>
        </div>
        <div className="sideBarPhone">
          <div>
            <img src={phone} alt="" />
          </div>
          <dir>
            <p>+92 321 2556912</p>
          </dir>
        </div>
      </div>







      <div className="portfolio" id='pro' onMouseOver={() => {
        document.getElementById('menuLinks').classList.remove('show')
      }}>
        <div>
          <h1>Projects</h1>
        </div>
        <div>
          <p>A few selected designs by Atelier 75 have been displayed below. Use the menu to switch between Architecture, Interior Design, 3D Visualization.</p>
        </div>

      </div>
      <div className="projects" onMouseOver={() => {
        document.getElementById('menuLinks').classList.remove('show')
      }}>
        <div className="select"
          onMouseLeave={() => {
            document.getElementById('all').style.display = "none"
            document.getElementById('architecture').style.display = "none"
            document.getElementById('interior').style.display = "none"
            document.getElementById('threed').style.display = "none"
          }}
          onClick={() => {
            let a = document.getElementById('all').style.display
            let b = document.getElementById('architecture').style.display
            let c = document.getElementById('interior').style.display
            let d = document.getElementById('threed').style.display
            if (a == "none" && b == "none" && c == "none" && d == "none") {
              document.getElementById('all').style.display = "block"
              document.getElementById('architecture').style.display = "block"
              document.getElementById('interior').style.display = "block"
              document.getElementById('threed').style.display = "block"
            } else {
              document.getElementById('all').style.display = "none"
              document.getElementById('architecture').style.display = "none"
              document.getElementById('interior').style.display = "none"
              document.getElementById('threed').style.display = "none"
            }

          }}
        >
          <div id='change' onMouseEnter={() => {
            setTimeout(() => {
              document.getElementById('all').style.display = "block"
              document.getElementById('architecture').style.display = "block"
              document.getElementById('interior').style.display = "block"
              document.getElementById('threed').style.display = "block"
            }, 400);

          }}
          >ALL</div>
          <div id='all' onClick={() => {
            document.getElementById('change').innerHTML = "ALL"
            setState(document.getElementById('change').innerHTML)
          }}
          >ALL</div>
          <div id='architecture' onClick={() => {
            document.getElementById('change').innerHTML = "ARCHITECTURE"
            setState(document.getElementById('change').innerHTML)
          }}
          >ARCHITECTURE</div>
          <div id='interior' onClick={() => {
            document.getElementById('change').innerHTML = "INTERIORS"
            setState(document.getElementById('change').innerHTML)
          }}
          >INTERIORS</div>
          <div id='threed' onClick={() => {
            document.getElementById('change').innerHTML = "3D VISUALIZATION"
            setState(document.getElementById('change').innerHTML)
          }}
          >VISUALIZATION</div>

        </div>


      </div>


      <div className="pics" onMouseOver={() => {
        document.getElementById('menuLinks').classList.remove('show')
      }}>
        {
          projectImages.map(images => {
            let text = images.text
            if (state === "ALL") {
              return (
                
                <div>
                  <img src={images.src}  alt="" onMouseOver={() => {
                    if (images.text === text) {
                      document.getElementById(images.id).style.display = "block"
                    }
                  }} onMouseLeave={() => {
                    document.getElementById(images.id).style.display = "none"
                  }}
                    onClick={() => {
                      if (images.text === "VILLA IN BOSNIA") {
                        document.getElementById('projectDetails').style.display = "block"
                        document.getElementById('navbar').style.display = "none"
                        document.getElementById('wapp').style.display = "none"
                      } else if (images.text === "RESIDENCE 159-H") {
                        document.getElementById('projectDetails1').style.display = "block"
                        document.getElementById('navbar').style.display = "none"
                        document.getElementById('wapp').style.display = "none"
                      }else if(images.text === "MODERN BEDROOM"){
                        document.getElementById('projectDetails2').style.display = "block"
                        document.getElementById('navbar').style.display = "none"
                        document.getElementById('wapp').style.display = "none"
                      }else if(images.text === "LOUNGE AND DINING SPACE"){
                        document.getElementById('projectDetails3').style.display = "block"
                        document.getElementById('navbar').style.display = "none"
                        document.getElementById('wapp').style.display = "none"
                      }else if(images.text === "CORPORATE OFFICE INTERIOR"){
                        document.getElementById('projectDetails4').style.display = "block"
                        document.getElementById('navbar').style.display = "none"
                        document.getElementById('wapp').style.display = "none"
                      }else if(images.text === "TEXTILE OFFICE DESIGN"){
                        document.getElementById('projectDetails5').style.display = "block"
                        document.getElementById('navbar').style.display = "none"
                        document.getElementById('wapp').style.display = "none"
                      }else if(images.text === "BEDROOM INTERIOR"){
                        document.getElementById('projectDetails6').style.display = "block"
                        document.getElementById('navbar').style.display = "none"
                        document.getElementById('wapp').style.display = "none"
                      }else if(images.text === "HOTEL INTERIOR"){
                        document.getElementById('projectDetails7').style.display = "block"
                        document.getElementById('navbar').style.display = "none"
                        document.getElementById('wapp').style.display = "none"
                      }else if(images.text === "MODERN HOUSE"){
                        document.getElementById('projectDetails8').style.display = "block"
                        document.getElementById('navbar').style.display = "none"
                        document.getElementById('wapp').style.display = "none"
                      }else if(images.text === "MODERN VILLA"){
                        document.getElementById('projectDetails9').style.display = "block"
                        document.getElementById('navbar').style.display = "none"
                        document.getElementById('wapp').style.display = "none"
                      }else if(images.text === "RESTAURANT INTERIOR"){
                        document.getElementById('projectDetails10').style.display = "block"
                        document.getElementById('navbar').style.display = "none"
                        document.getElementById('wapp').style.display = "none"
                      }else if(images.text === "LIVING ROOM"){
                        document.getElementById('projectDetails11').style.display = "block"
                        document.getElementById('navbar').style.display = "none"
                        document.getElementById('wapp').style.display = "none"
                        document.getElementById('wapp').style.display = "none"
                      }else if(images.text === "BEDROOM INTERIOR DESIGN"){
                        document.getElementById('projectDetails12').style.display = "block"
                        document.getElementById('navbar').style.display = "none"
                        document.getElementById('wapp').style.display = "none"
                      }else if(images.text === "BEDROOM DESIGN"){
                        document.getElementById('projectDetails13').style.display = "block"
                        document.getElementById('navbar').style.display = "none"
                        document.getElementById('wapp').style.display = "none"
                      }else if(images.text === "MODERN LIVING ROOM"){
                        document.getElementById('projectDetails14').style.display = "block"
                        document.getElementById('navbar').style.display = "none"
                        document.getElementById('wapp').style.display = "none"
                      }else if(images.text === "MODERN LOUNGE INTERIOR"){
                        document.getElementById('projectDetails15').style.display = "block"
                        document.getElementById('navbar').style.display = "none"
                        document.getElementById('wapp').style.display = "none"
                      }else if(images.text === "DRAWING ROOM"){
                        document.getElementById('projectDetails16').style.display = "block"
                        document.getElementById('navbar').style.display = "none"
                        document.getElementById('wapp').style.display = "none"
                      }else if(images.text === "APARTMENT DESIGN"){
                        document.getElementById('projectDetails17').style.display = "block"
                        document.getElementById('navbar').style.display = "none"
                        document.getElementById('wapp').style.display = "none"
                      }else if(images.text === "GYM INTERIOR"){
                        document.getElementById('projectDetails18').style.display = "block"
                        document.getElementById('navbar').style.display = "none"
                        document.getElementById('wapp').style.display = "none"
                      }else if(images.text === "ENTRANCE LOBBY"){
                        document.getElementById('projectDetails19').style.display = "block"
                        document.getElementById('navbar').style.display = "none"
                        document.getElementById('wapp').style.display = "none"
                      }else if(images.text === "WALK-IN WARDROBE"){
                        document.getElementById('projectDetails20').style.display = "block"
                        document.getElementById('navbar').style.display = "none"
                        document.getElementById('wapp').style.display = "none"
                      }else if(images.text === "HOTEL BEDROOM"){
                        document.getElementById('projectDetails21').style.display = "block"
                        document.getElementById('navbar').style.display = "none"
                        document.getElementById('wapp').style.display = "none"
                      }else  if(images.text === "A MODERN BEDROOM INTERIOR"){
                        document.getElementById('projectDetails22').style.display = "block"
                        document.getElementById('navbar').style.display = "none"
                        document.getElementById('wapp').style.display = "none"
                      }else if(images.text === "OFFICE INTERIOR"){
                        document.getElementById('projectDetails23').style.display = "block"
                        document.getElementById('navbar').style.display = "none"
                        document.getElementById('wapp').style.display = "none"
                      }else if(images.text === "MASTER BATHROOM DESIGN"){
                        document.getElementById('projectDetails24').style.display = "block"
                        document.getElementById('navbar').style.display = "none"
                        document.getElementById('wapp').style.display = "none"
                      }else if(images.text === "LUXURY APARTMENT DESIGN"){
                        document.getElementById('projectDetails25').style.display = "block"
                        document.getElementById('navbar').style.display = "none"
                        document.getElementById('wapp').style.display = "none"
                      }else if(images.text === "MODERN HOUSE INTERIOR"){
                        document.getElementById('projectDetails26').style.display = "block"
                        document.getElementById('navbar').style.display = "none"
                        document.getElementById('wapp').style.display = "none"
                      }else if (images.text === "LUXURY APARTMENT INTERIOR"){
                        document.getElementById('projectDetails27').style.display = "block"
                        document.getElementById('navbar').style.display = "none"
                        document.getElementById('wapp').style.display = "none"
                      }else if(images.text === "SA HEADQUARTERS"){
                        document.getElementById('projectDetails28').style.display = "block"
                        document.getElementById('navbar').style.display = "none"
                        document.getElementById('wapp').style.display = "none"
                      }else if(images.text === "EXECUTIVE OFFICE INTERIOR"){
                        document.getElementById('projectDetails29').style.display = "block"
                        document.getElementById('navbar').style.display = "none"
                        document.getElementById('wapp').style.display = "none"
                      }else if(images.text === "FARMHOUSE INTERIOR"){
                        document.getElementById('projectDetails30').style.display = "block"
                        document.getElementById('navbar').style.display = "none"
                        document.getElementById('wapp').style.display = "none"
                      }else{
                        document.getElementById('projectDetails31').style.display = "block"
                        document.getElementById('navbar').style.display = "none"
                        document.getElementById('wapp').style.display = "none"
                      }
                    }}
                    onTouchStart={() => {
                      if (images.text === "VILLA IN BOSNIA"){
                        document.getElementById(images.id).style.display = "block"
                      }else if(images.text === "RESIDENCE 159-H"){
                        document.getElementById(images.id).style.display = "block"
                      }
                      else if(images.text === "MODERN BEDROOM"){
                        document.getElementById(images.id).style.display = "block"
                      }
                      else if(images.text === "MODERN BEDROOM"){
                        document.getElementById(images.id).style.display = "block"
                      }
                      else if(images.text === "LOUNGE AND DINING SPACE"){
                        document.getElementById(images.id).style.display = "block"
                      }
                      else if(images.text === "CORPORATE OFFICE INTERIOR"){
                        document.getElementById(images.id).style.display = "block"
                      }
                      else if(images.text === "TEXTILE OFFICE DESIGN"){
                        document.getElementById(images.id).style.display = "block"
                      }
                      else if(images.text === "BEDROOM INTERIOR"){
                        document.getElementById(images.id).style.display = "block"
                      }
                      else if(images.text === "HOTEL INTERIOR"){
                        document.getElementById(images.id).style.display = "block"
                      }
                      else if(images.text === "MODERN HOUSE"){
                        document.getElementById(images.id).style.display = "block"
                      }
                      else if(images.text === "MODERN VILLA"){
                        document.getElementById(images.id).style.display = "block"
                      }
                      else if(images.text === "RESTAURANT INTERIOR"){
                        document.getElementById(images.id).style.display = "block"
                      }
                      else if(images.text === "LIVING ROOM"){
                        document.getElementById(images.id).style.display = "block"
                      }
                      else if(images.text === "BEDROOM INTERIOR DESIGN"){
                        document.getElementById(images.id).style.display = "block"
                      }
                      else if(images.text === "BEDROOM DESIGN"){
                        document.getElementById(images.id).style.display = "block"
                      }
                      else if(images.text === "MODERN LIVING ROOM"){
                        document.getElementById(images.id).style.display = "block"
                      }
                      else if(images.text === "MODERN LOUNGE INTERIOR"){
                        document.getElementById(images.id).style.display = "block"
                      }
                      else if(images.text === "DRAWING ROOM"){
                        document.getElementById(images.id).style.display = "block"
                      }
                      else if(images.text === "APARTMENT DESIGN"){
                        document.getElementById(images.id).style.display = "block"
                      }
                      else if(images.text === "GYM INTERIOR"){
                        document.getElementById(images.id).style.display = "block"
                      }
                      else if(images.text === "ENTRANCE LOBBY"){
                        document.getElementById(images.id).style.display = "block"
                      }
                      else if(images.text === "WALK-IN WARDROBE"){
                        document.getElementById(images.id).style.display = "block"
                      }
                      else if(images.text === "HOTEL BEDROOM"){
                        document.getElementById(images.id).style.display = "block"
                      }
                      else if(images.text === "A MODERN BEDROOM INTERIOR"){
                        document.getElementById(images.id).style.display = "block"
                      }
                      else if(images.text === "OFFICE INTERIOR"){
                        document.getElementById(images.id).style.display = "block"
                      }
                      else if(images.text === "MASTER BATHROOM DESIGN"){
                        document.getElementById(images.id).style.display = "block"
                      }
                      else if(images.text === "LUXURY APARTMENT DESIGN"){
                        document.getElementById(images.id).style.display = "block"
                      }
                      else if(images.text === "MODERN HOUSE INTERIOR"){
                        document.getElementById(images.id).style.display = "block"
                      }
                      else if(images.text === "LUXURY APARTMENT INTERIOR"){
                        document.getElementById(images.id).style.display = "block"
                      }
                      else if(images.text === "SA HEADQUARTERS"){
                        document.getElementById(images.id).style.display = "block"
                      }
                      else if(images.text === "EXECUTIVE OFFICE INTERIOR"){
                        document.getElementById(images.id).style.display = "block"
                      }else if(images.text === "FARMHOUSE INTERIOR"){
                        document.getElementById(images.id).style.display = "block"
                      }else{
                        document.getElementById(images.id).style.display = "block"
                      }
                    }}
                    onTouchEnd={() => {
                      if (images.text === "VILLA IN BOSNIA"){
                        document.getElementById(images.id).style.display = "none"
                      }else if(images.text === "RESIDENCE 159-H"){
                        document.getElementById(images.id).style.display = "none"
                      }
                      else if(images.text === "MODERN BEDROOM"){
                        document.getElementById(images.id).style.display = "none"
                      }
                      else if(images.text === "MODERN BEDROOM"){
                        document.getElementById(images.id).style.display = "none"
                      }
                      else if(images.text === "LOUNGE AND DINING SPACE"){
                        document.getElementById(images.id).style.display = "none"
                      }
                      else if(images.text === "CORPORATE OFFICE INTERIOR"){
                        document.getElementById(images.id).style.display = "none"
                      }
                      else if(images.text === "TEXTILE OFFICE DESIGN"){
                        document.getElementById(images.id).style.display = "none"
                      }
                      else if(images.text === "BEDROOM INTERIOR"){
                        document.getElementById(images.id).style.display = "none"
                      }
                      else if(images.text === "HOTEL INTERIOR"){
                        document.getElementById(images.id).style.display = "none"
                      }
                      else if(images.text === "MODERN HOUSE"){
                        document.getElementById(images.id).style.display = "none"
                      }
                      else if(images.text === "MODERN VILLA"){
                        document.getElementById(images.id).style.display = "none"
                      }
                      else if(images.text === "RESTAURANT INTERIOR"){
                        document.getElementById(images.id).style.display = "none"
                      }
                      else if(images.text === "LIVING ROOM"){
                        document.getElementById(images.id).style.display = "none"
                      }
                      else if(images.text === "BEDROOM INTERIOR DESIGN"){
                        document.getElementById(images.id).style.display = "block"
                      }
                      else if(images.text === "BEDROOM DESIGN"){
                        document.getElementById(images.id).style.display = "none"
                      }
                      else if(images.text === "MODERN LIVING ROOM"){
                        document.getElementById(images.id).style.display = "none"
                      }
                      else if(images.text === "MODERN LOUNGE INTERIOR"){
                        document.getElementById(images.id).style.display = "none"
                      }
                      else if(images.text === "DRAWING ROOM"){
                        document.getElementById(images.id).style.display = "none"
                      }
                      else if(images.text === "APARTMENT DESIGN"){
                        document.getElementById(images.id).style.display = "none"
                      }
                      else if(images.text === "GYM INTERIOR"){
                        document.getElementById(images.id).style.display = "none"
                      }
                      else if(images.text === "ENTRANCE LOBBY"){
                        document.getElementById(images.id).style.display = "none"
                      }
                      else if(images.text === "WALK-IN WARDROBE"){
                        document.getElementById(images.id).style.display = "none"
                      }
                      else if(images.text === "HOTEL BEDROOM"){
                        document.getElementById(images.id).style.display = "none"
                      }
                      else if(images.text === "A MODERN BEDROOM INTERIOR"){
                        document.getElementById(images.id).style.display = "none"
                      }
                      else if(images.text === "OFFICE INTERIOR"){
                        document.getElementById(images.id).style.display = "none"
                      }
                      else if(images.text === "MASTER BATHROOM DESIGN"){
                        document.getElementById(images.id).style.display = "none"
                      }
                      else if(images.text === "LUXURY APARTMENT DESIGN"){
                        document.getElementById(images.id).style.display = "none"
                      }
                      else if(images.text === "MODERN HOUSE INTERIOR"){
                        document.getElementById(images.id).style.display = "none"
                      }
                      else if(images.text === "LUXURY APARTMENT INTERIOR"){
                        document.getElementById(images.id).style.display = "none"
                      }
                      else if(images.text === "SA HEADQUARTERS"){
                        document.getElementById(images.id).style.display = "none"
                      }
                      else if(images.text === "EXECUTIVE OFFICE INTERIOR"){
                        document.getElementById(images.id).style.display = "none"
                      }else if(images.text === "FARMHOUSE INTERIOR"){
                        document.getElementById(images.id).style.display = "none"
                      }else{
                        document.getElementById(images.id).style.display = "none"
                      }
                    }}
                  />
                   
                  <div id={images.id} className='text'>
                    <h1>{images.text}</h1>
                  </div>

                </div>
              )
            } else if (state === "ARCHITECTURE" && images.type === "architecture") {
              return (
                <>
                <div>
                <img src={images.src} alt=""  onMouseOver={() => {
                    if (images.text === text) {
                      document.getElementById(images.id).style.display = "block"
                    }
                  }} onMouseLeave={() => {
                    document.getElementById(images.id).style.display = "none"
                  }}
                  onClick={() => {
                    if (images.text === "VILLA IN BOSNIA") {
                      document.getElementById('projectDetails').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    } else if (images.text === "RESIDENCE 159-H") {
                      document.getElementById('projectDetails1').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "MODERN BEDROOM"){
                      document.getElementById('projectDetails2').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "LOUNGE AND DINING SPACE"){
                      document.getElementById('projectDetails3').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "CORPORATE OFFICE INTERIOR"){
                      document.getElementById('projectDetails4').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "TEXTILE OFFICE DESIGN"){
                      document.getElementById('projectDetails5').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "BEDROOM INTERIOR"){
                      document.getElementById('projectDetails6').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "HOTEL INTERIOR"){
                      document.getElementById('projectDetails7').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "MODERN HOUSE"){
                      document.getElementById('projectDetails8').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "MODERN VILLA"){
                      document.getElementById('projectDetails9').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "RESTAURANT INTERIOR"){
                      document.getElementById('projectDetails10').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "LIVING ROOM"){
                      document.getElementById('projectDetails11').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "BEDROOM INTERIOR DESIGN"){
                      document.getElementById('projectDetails12').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "BEDROOM DESIGN"){
                      document.getElementById('projectDetails13').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "MODERN LIVING ROOM"){
                      document.getElementById('projectDetails14').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "MODERN LOUNGE INTERIOR"){
                      document.getElementById('projectDetails15').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "DRAWING ROOM"){
                      document.getElementById('projectDetails16').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "APARTMENT DESIGN"){
                      document.getElementById('projectDetails17').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "GYM INTERIOR"){
                      document.getElementById('projectDetails18').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "ENTRANCE LOBBY"){
                      document.getElementById('projectDetails19').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "WALK-IN WARDROBE"){
                      document.getElementById('projectDetails20').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "HOTEL BEDROOM"){
                      document.getElementById('projectDetails21').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else  if(images.text === "A MODERN BEDROOM INTERIOR"){
                      document.getElementById('projectDetails22').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "OFFICE INTERIOR"){
                      document.getElementById('projectDetails23').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "MASTER BATHROOM DESIGN"){
                      document.getElementById('projectDetails24').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "LUXURY APARTMENT DESIGN"){
                      document.getElementById('projectDetails25').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "MODERN HOUSE INTERIOR"){
                      document.getElementById('projectDetails26').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if (images.text === "LUXURY APARTMENT INTERIOR"){
                      document.getElementById('projectDetails27').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "SA HEADQUARTERS"){
                      document.getElementById('projectDetails28').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "EXECUTIVE OFFICE INTERIOR"){
                      document.getElementById('projectDetails29').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "FARMHOUSE INTERIOR"){
                      document.getElementById('projectDetails30').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else{
                      document.getElementById('projectDetails31').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }
                  }}
                  
                  onTouchStart={() => {
                    if (images.text === "VILLA IN BOSNIA"){
                      document.getElementById(images.id).style.display = "block"
                    }else if(images.text === "RESIDENCE 159-H"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "MODERN BEDROOM"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "MODERN BEDROOM"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "LOUNGE AND DINING SPACE"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "CORPORATE OFFICE INTERIOR"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "TEXTILE OFFICE DESIGN"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "BEDROOM INTERIOR"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "HOTEL INTERIOR"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "MODERN HOUSE"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "MODERN VILLA"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "RESTAURANT INTERIOR"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "LIVING ROOM"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "BEDROOM INTERIOR DESIGN"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "BEDROOM DESIGN"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "MODERN LIVING ROOM"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "MODERN LOUNGE INTERIOR"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "DRAWING ROOM"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "APARTMENT DESIGN"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "GYM INTERIOR"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "ENTRANCE LOBBY"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "WALK-IN WARDROBE"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "HOTEL BEDROOM"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "A MODERN BEDROOM INTERIOR"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "OFFICE INTERIOR"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "MASTER BATHROOM DESIGN"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "LUXURY APARTMENT DESIGN"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "MODERN HOUSE INTERIOR"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "LUXURY APARTMENT INTERIOR"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "SA HEADQUARTERS"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "EXECUTIVE OFFICE INTERIOR"){
                      document.getElementById(images.id).style.display = "block"
                    }else if(images.text === "FARMHOUSE INTERIOR"){
                      document.getElementById(images.id).style.display = "block"
                    }else{
                      document.getElementById(images.id).style.display = "block"
                    }
                  }}
                  onTouchEnd={() => {
                    if (images.text === "VILLA IN BOSNIA"){
                      document.getElementById(images.id).style.display = "none"
                    }else if(images.text === "RESIDENCE 159-H"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "MODERN BEDROOM"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "MODERN BEDROOM"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "LOUNGE AND DINING SPACE"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "CORPORATE OFFICE INTERIOR"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "TEXTILE OFFICE DESIGN"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "BEDROOM INTERIOR"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "HOTEL INTERIOR"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "MODERN HOUSE"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "MODERN VILLA"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "RESTAURANT INTERIOR"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "LIVING ROOM"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "BEDROOM INTERIOR DESIGN"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "BEDROOM DESIGN"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "MODERN LIVING ROOM"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "MODERN LOUNGE INTERIOR"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "DRAWING ROOM"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "APARTMENT DESIGN"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "GYM INTERIOR"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "ENTRANCE LOBBY"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "WALK-IN WARDROBE"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "HOTEL BEDROOM"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "A MODERN BEDROOM INTERIOR"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "OFFICE INTERIOR"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "MASTER BATHROOM DESIGN"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "LUXURY APARTMENT DESIGN"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "MODERN HOUSE INTERIOR"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "LUXURY APARTMENT INTERIOR"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "SA HEADQUARTERS"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "EXECUTIVE OFFICE INTERIOR"){
                      document.getElementById(images.id).style.display = "none"
                    }else if(images.text === "FARMHOUSE INTERIOR"){
                      document.getElementById(images.id).style.display = "none"
                    }else{
                      document.getElementById(images.id).style.display = "none"
                    }
                  }}
                  
                  />
                   <div id={images.id}>
                    <h1>{images.text}</h1>
                  </div>
                </div>
                  
                </>
              )
            }
            else if (state === "INTERIORS" && images.type === "interior") {
              return (
                <>
                <div>
                <img src={images.src}  alt=""  onMouseOver={() => {
                    if (images.text === text) {
                      document.getElementById(images.id).style.display = "block"
                    }
                  }} onMouseLeave={() => {
                    document.getElementById(images.id).style.display = "none"
                  }}
                  onClick={() => {
                    if (images.text === "VILLA IN BOSNIA") {
                      document.getElementById('projectDetails').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    } else if (images.text === "RESIDENCE 159-H") {
                      document.getElementById('projectDetails1').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "MODERN BEDROOM"){
                      document.getElementById('projectDetails2').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "LOUNGE AND DINING SPACE"){
                      document.getElementById('projectDetails3').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "CORPORATE OFFICE INTERIOR"){
                      document.getElementById('projectDetails4').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "TEXTILE OFFICE DESIGN"){
                      document.getElementById('projectDetails5').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "BEDROOM INTERIOR"){
                      document.getElementById('projectDetails6').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "HOTEL INTERIOR"){
                      document.getElementById('projectDetails7').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "MODERN HOUSE"){
                      document.getElementById('projectDetails8').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "MODERN VILLA"){
                      document.getElementById('projectDetails9').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "RESTAURANT INTERIOR"){
                      document.getElementById('projectDetails10').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "LIVING ROOM"){
                      document.getElementById('projectDetails11').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "BEDROOM INTERIOR DESIGN"){
                      document.getElementById('projectDetails12').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "BEDROOM DESIGN"){
                      document.getElementById('projectDetails13').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "MODERN LIVING ROOM"){
                      document.getElementById('projectDetails14').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "MODERN LOUNGE INTERIOR"){
                      document.getElementById('projectDetails15').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "DRAWING ROOM"){
                      document.getElementById('projectDetails16').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "APARTMENT DESIGN"){
                      document.getElementById('projectDetails17').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "GYM INTERIOR"){
                      document.getElementById('projectDetails18').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "ENTRANCE LOBBY"){
                      document.getElementById('projectDetails19').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "WALK-IN WARDROBE"){
                      document.getElementById('projectDetails20').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "HOTEL BEDROOM"){
                      document.getElementById('projectDetails21').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else  if(images.text === "A MODERN BEDROOM INTERIOR"){
                      document.getElementById('projectDetails22').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "OFFICE INTERIOR"){
                      document.getElementById('projectDetails23').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "MASTER BATHROOM DESIGN"){
                      document.getElementById('projectDetails24').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "LUXURY APARTMENT DESIGN"){
                      document.getElementById('projectDetails25').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "MODERN HOUSE INTERIOR"){
                      document.getElementById('projectDetails26').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if (images.text === "LUXURY APARTMENT INTERIOR"){
                      document.getElementById('projectDetails27').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "SA HEADQUARTERS"){
                      document.getElementById('projectDetails28').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "EXECUTIVE OFFICE INTERIOR"){
                      document.getElementById('projectDetails29').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "FARMHOUSE INTERIOR"){
                      document.getElementById('projectDetails30').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else{
                      document.getElementById('projectDetails31').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }
                  }}
                  onTouchStart={() => {
                    if (images.text === "VILLA IN BOSNIA"){
                      document.getElementById(images.id).style.display = "block"
                    }else if(images.text === "RESIDENCE 159-H"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "MODERN BEDROOM"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "MODERN BEDROOM"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "LOUNGE AND DINING SPACE"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "CORPORATE OFFICE INTERIOR"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "TEXTILE OFFICE DESIGN"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "BEDROOM INTERIOR"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "HOTEL INTERIOR"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "MODERN HOUSE"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "MODERN VILLA"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "RESTAURANT INTERIOR"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "LIVING ROOM"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "BEDROOM INTERIOR DESIGN"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "BEDROOM DESIGN"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "MODERN LIVING ROOM"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "MODERN LOUNGE INTERIOR"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "DRAWING ROOM"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "APARTMENT DESIGN"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "GYM INTERIOR"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "ENTRANCE LOBBY"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "WALK-IN WARDROBE"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "HOTEL BEDROOM"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "A MODERN BEDROOM INTERIOR"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "OFFICE INTERIOR"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "MASTER BATHROOM DESIGN"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "LUXURY APARTMENT DESIGN"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "MODERN HOUSE INTERIOR"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "LUXURY APARTMENT INTERIOR"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "SA HEADQUARTERS"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "EXECUTIVE OFFICE INTERIOR"){
                      document.getElementById(images.id).style.display = "block"
                    }else if(images.text === "FARMHOUSE INTERIOR"){
                      document.getElementById(images.id).style.display = "block"
                    }else{
                      document.getElementById(images.id).style.display = "block"
                    }
                  }}
                  onTouchEnd={() => {
                    if (images.text === "VILLA IN BOSNIA"){
                      document.getElementById(images.id).style.display = "none"
                    }else if(images.text === "RESIDENCE 159-H"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "MODERN BEDROOM"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "MODERN BEDROOM"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "LOUNGE AND DINING SPACE"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "CORPORATE OFFICE INTERIOR"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "TEXTILE OFFICE DESIGN"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "BEDROOM INTERIOR"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "HOTEL INTERIOR"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "MODERN HOUSE"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "MODERN VILLA"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "RESTAURANT INTERIOR"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "LIVING ROOM"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "BEDROOM INTERIOR DESIGN"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "BEDROOM DESIGN"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "MODERN LIVING ROOM"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "MODERN LOUNGE INTERIOR"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "DRAWING ROOM"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "APARTMENT DESIGN"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "GYM INTERIOR"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "ENTRANCE LOBBY"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "WALK-IN WARDROBE"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "HOTEL BEDROOM"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "A MODERN BEDROOM INTERIOR"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "OFFICE INTERIOR"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "MASTER BATHROOM DESIGN"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "LUXURY APARTMENT DESIGN"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "MODERN HOUSE INTERIOR"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "LUXURY APARTMENT INTERIOR"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "SA HEADQUARTERS"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "EXECUTIVE OFFICE INTERIOR"){
                      document.getElementById(images.id).style.display = "none"
                    }else if(images.text === "FARMHOUSE INTERIOR"){
                      document.getElementById(images.id).style.display = "none"
                    }else{
                      document.getElementById(images.id).style.display = "none"
                    }
                  }}
                  
                  />



                   <div id={images.id}>
                    <h1>{images.text}</h1>
                  </div>
                </div>
                  
                </>
              )
            }
            else if (state === "3D VISUALIZATION") {
              return (
                <>
                <div>
                <img src={images.src} alt=""  onMouseOver={() => {
                    if (images.text === text) {
                      document.getElementById(images.id).style.display = "block"
                    }
                  }} onMouseLeave={() => {
                    document.getElementById(images.id).style.display = "none"
                  }}
                  onClick={() => {
                    if (images.text === "VILLA IN BOSNIA") {
                      document.getElementById('projectDetails').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    } else if (images.text === "RESIDENCE 159-H") {
                      document.getElementById('projectDetails1').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "MODERN BEDROOM"){
                      document.getElementById('projectDetails2').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "LOUNGE AND DINING SPACE"){
                      document.getElementById('projectDetails3').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "CORPORATE OFFICE INTERIOR"){
                      document.getElementById('projectDetails4').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "TEXTILE OFFICE DESIGN"){
                      document.getElementById('projectDetails5').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "BEDROOM INTERIOR"){
                      document.getElementById('projectDetails6').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "HOTEL INTERIOR"){
                      document.getElementById('projectDetails7').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "MODERN HOUSE"){
                      document.getElementById('projectDetails8').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "MODERN VILLA"){
                      document.getElementById('projectDetails9').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "RESTAURANT INTERIOR"){
                      document.getElementById('projectDetails10').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "LIVING ROOM"){
                      document.getElementById('projectDetails11').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "BEDROOM INTERIOR DESIGN"){
                      document.getElementById('projectDetails12').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "BEDROOM DESIGN"){
                      document.getElementById('projectDetails13').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "MODERN LIVING ROOM"){
                      document.getElementById('projectDetails14').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "MODERN LOUNGE INTERIOR"){
                      document.getElementById('projectDetails15').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "DRAWING ROOM"){
                      document.getElementById('projectDetails16').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "APARTMENT DESIGN"){
                      document.getElementById('projectDetails17').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "GYM INTERIOR"){
                      document.getElementById('projectDetails18').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "ENTRANCE LOBBY"){
                      document.getElementById('projectDetails19').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "WALK-IN WARDROBE"){
                      document.getElementById('projectDetails20').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "HOTEL BEDROOM"){
                      document.getElementById('projectDetails21').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else  if(images.text === "A MODERN BEDROOM INTERIOR"){
                      document.getElementById('projectDetails22').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "OFFICE INTERIOR"){
                      document.getElementById('projectDetails23').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "MASTER BATHROOM DESIGN"){
                      document.getElementById('projectDetails24').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "LUXURY APARTMENT DESIGN"){
                      document.getElementById('projectDetails25').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "MODERN HOUSE INTERIOR"){
                      document.getElementById('projectDetails26').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if (images.text === "LUXURY APARTMENT INTERIOR"){
                      document.getElementById('projectDetails27').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "SA HEADQUARTERS"){
                      document.getElementById('projectDetails28').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "EXECUTIVE OFFICE INTERIOR"){
                      document.getElementById('projectDetails29').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else if(images.text === "FARMHOUSE INTERIOR"){
                      document.getElementById('projectDetails30').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }else{
                      document.getElementById('projectDetails31').style.display = "block"
                      document.getElementById('navbar').style.display = "none"
                      document.getElementById('wapp').style.display = "none"
                    }
                  }}
                  onTouchStart={() => {
                    if (images.text === "VILLA IN BOSNIA"){
                      document.getElementById(images.id).style.display = "block"
                    }else if(images.text === "RESIDENCE 159-H"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "MODERN BEDROOM"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "MODERN BEDROOM"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "LOUNGE AND DINING SPACE"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "CORPORATE OFFICE INTERIOR"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "TEXTILE OFFICE DESIGN"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "BEDROOM INTERIOR"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "HOTEL INTERIOR"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "MODERN HOUSE"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "MODERN VILLA"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "RESTAURANT INTERIOR"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "LIVING ROOM"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "BEDROOM INTERIOR DESIGN"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "BEDROOM DESIGN"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "MODERN LIVING ROOM"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "MODERN LOUNGE INTERIOR"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "DRAWING ROOM"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "APARTMENT DESIGN"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "GYM INTERIOR"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "ENTRANCE LOBBY"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "WALK-IN WARDROBE"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "HOTEL BEDROOM"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "A MODERN BEDROOM INTERIOR"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "OFFICE INTERIOR"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "MASTER BATHROOM DESIGN"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "LUXURY APARTMENT DESIGN"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "MODERN HOUSE INTERIOR"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "LUXURY APARTMENT INTERIOR"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "SA HEADQUARTERS"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "EXECUTIVE OFFICE INTERIOR"){
                      document.getElementById(images.id).style.display = "block"
                    }else if(images.text === "FARMHOUSE INTERIOR"){
                      document.getElementById(images.id).style.display = "block"
                    }else{
                      document.getElementById(images.id).style.display = "block"
                    }
                  }}
                  onTouchEnd={() => {
                    if (images.text === "VILLA IN BOSNIA"){
                      document.getElementById(images.id).style.display = "none"
                    }else if(images.text === "RESIDENCE 159-H"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "MODERN BEDROOM"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "MODERN BEDROOM"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "LOUNGE AND DINING SPACE"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "CORPORATE OFFICE INTERIOR"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "TEXTILE OFFICE DESIGN"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "BEDROOM INTERIOR"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "HOTEL INTERIOR"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "MODERN HOUSE"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "MODERN VILLA"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "RESTAURANT INTERIOR"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "LIVING ROOM"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "BEDROOM INTERIOR DESIGN"){
                      document.getElementById(images.id).style.display = "block"
                    }
                    else if(images.text === "BEDROOM DESIGN"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "MODERN LIVING ROOM"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "MODERN LOUNGE INTERIOR"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "DRAWING ROOM"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "APARTMENT DESIGN"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "GYM INTERIOR"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "ENTRANCE LOBBY"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "WALK-IN WARDROBE"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "HOTEL BEDROOM"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "A MODERN BEDROOM INTERIOR"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "OFFICE INTERIOR"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "MASTER BATHROOM DESIGN"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "LUXURY APARTMENT DESIGN"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "MODERN HOUSE INTERIOR"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "LUXURY APARTMENT INTERIOR"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "SA HEADQUARTERS"){
                      document.getElementById(images.id).style.display = "none"
                    }
                    else if(images.text === "EXECUTIVE OFFICE INTERIOR"){
                      document.getElementById(images.id).style.display = "none"
                    }else if(images.text === "FARMHOUSE INTERIOR"){
                      document.getElementById(images.id).style.display = "none"
                    }else{
                      document.getElementById(images.id).style.display = "none"
                    }
                  }}
                  
                  />
                   <div id={images.id}>
                    <h1>{images.text}</h1>
                  </div>
                </div>
                  
                </>
              )
            } else {

            }
          })




        }

      </div>

      <div id="projectDetails" onClick={() => {
      }}>
        <div onClick={() => {
          window.location.href = "../Projects"

        }}>X</div>


        <div onClick={() => {
          setState1(Bosnia - 1)
          if (Bosnia == 1) {
            document.getElementById("back").style.display = "none"

          } else if (Bosnia == 2) {
            document.getElementById("next").style.display = "block"
          }
        }}>
          <img src={back} alt="" id="back" />
        </div>


        <div>
          <img src={bosnia[Bosnia].src} alt="" />
        </div>


        <div onClick={() => {
          setState1(Bosnia + 1)
          if (Bosnia == 0) {
            document.getElementById("back").style.display = "block"

          } else if (Bosnia == 1) {
            document.getElementById("next").style.display = "none"
          }
        }}>
          <img src={next} alt="" id="next" />
        </div>


      </div>


      <div id="projectDetails1" onClick={() => {
      }}>
        <div onClick={() => {
          window.location.href = "../Projects"

        }}>X</div>


        <div onClick={() => {
          if(Res159 > 0){
            document.getElementById('next1').style.display = "block"
            setState2(Res159 - 1)
            if(Res159 == 1){
              document.getElementById('back1').style.display = "none"
              
            }
            
          }
        }}>
          <img src={back} alt="" id="back1" />
        </div>


        <div>
          <img src={res159[Res159].src} alt="" />
        </div>


        <div onClick={() => {
          if(Res159 < 6){
            document.getElementById('back1').style.display = "block"
            setState2(Res159 + 1)
            if(Res159 == 2){
              document.getElementById('next1').style.display = "none"
            }
          }
        }}>
          <img src={next} alt="" id="next1" />
        </div>


      </div>








      <div id="projectDetails2" onClick={() => {
      }}>
        <div onClick={() => {
          window.location.href = "../Projects"

        }}>X</div>


        <div onClick={() => {
          setState3(Mbed - 1)
          if(Mbed == 1){
            document.getElementById('next2').style.display = "block"
            document.getElementById('back2').style.display = "none"
            
          }
        }}>
          <img src={back} alt="" id="back2" />
        </div>


        <div>
          <img src={mbed[Mbed].src} alt="" />
        </div>


        <div onClick={() => {
          setState3(Mbed + 1)
          if(Mbed == 0){
            document.getElementById('back2').style.display = "block"
            document.getElementById('next2').style.display = "none"
          }
        }}>
          <img src={next} alt="" id="next2" />
        </div>


      </div>



      <div id="projectDetails3" onClick={() => {
      }}>
        <div onClick={() => {
          window.location.href = "../Projects"

        }}>X</div>


        <div onClick={() => {
          setState4(Dinning - 1)
          if(Dinning == 1){
            
            document.getElementById('back3').style.display = "none"
            
          } else if(Dinning == 3){
            document.getElementById('next3').style.display = "block"
          }
        }}>
          <img src={back} alt="" id="back3" />
        </div>


        <div>
          <img src={dinning[Dinning].src} alt="" />
        </div>


        <div onClick={() => {
          setState4(Dinning + 1)
          if(Dinning == 0 || Dinning > 0){
            document.getElementById('back3').style.display = "block"
            document.getElementById('next3').style.display = "block"
            if(Dinning == 2){
              document.getElementById('next3').style.display = "none"
            }
          }
        }}>
          <img src={next} alt="" id="next3" />
        </div>


      </div>




      <div id="projectDetails4" onClick={() => {
      }}>
        <div onClick={() => {
          window.location.href = "../Projects"

        }}>X</div>


        <div onClick={() => {
            setState7(Corporate - 1)
            if(Corporate == 8){
              document.getElementById('next4').style.display = "block"
            }else if(Corporate == 1){
              document.getElementById('back4').style.display = "none"
            }
        }}>
          <img src={back} alt="" id="back4" />
        </div>


        <div>
          <img src={corporateOffice[Corporate].src} alt="" />
        </div>


        <div onClick={() => {
           setState7(Corporate + 1)
           if(Corporate == 0){
            document.getElementById('back4').style.display = "block"
           }else if(Corporate == 7){
            document.getElementById('next4').style.display = "none"
           }
        }}>
          <img src={next} alt="" id="next4" />
        </div>


      </div>


      <div id="projectDetails5" onClick={() => {
      }}>
        <div onClick={() => {
          window.location.href = "../Projects"

        }}>X</div>


        <div onClick={() => {
           alert(Nafeesa)
           setState8(Nafeesa - 1)
           if(Nafeesa == 1){
            document.getElementById('back5').style.display = "none"
           }else if(Nafeesa == 4){
            document.getElementById('next5').style.display = "block"
           }
        }}>
          <img src={back} alt="" id="back5" />
        </div>


        <div>
          <img src={nafeesa[Nafeesa].src} alt="" />
        </div>


        <div onClick={() => {
           setState8(Nafeesa + 1)
           if(Nafeesa == 0){
            document.getElementById('back5').style.display = "block"
           }else if(Nafeesa == 3){
            document.getElementById('next5').style.display = "none"
           }
        }}>
          <img src={next} alt="" id="next5" />
        </div>


      </div>






      <div id="projectDetails6" onClick={() => {
      }}>
        <div onClick={() => {
          window.location.href = "../Projects"

        }}>X</div>


        <div onClick={() => {
          setState6(BedInterior1 - 1);
          if(BedInterior1 == 2){
            document.getElementById('next6').style.display = "block"
          }else if(BedInterior1 == 1){
            document.getElementById('video').style.display = "block";
            document.getElementById('interiorbed').style.display = "none"
            document.getElementById('back6').style.display = "none"
          }
        }}>
          <img src={back} alt="" id="back6" />
        </div>


        <div id="video">
        <video controls autoPlay muted loop>
          <source src={bedInterior[BedInterior].src} type='video/mp4' />
        </video>
        </div>


        <div id='interiorbed'>
          <img src={bedInterior[BedInterior1].src} alt="" />
        </div>


        <div onClick={() => {
          setState6(BedInterior1 + 1)
          document.getElementById('video').style.display = "none";
          document.getElementById('interiorbed').style.display = "block"
          if(BedInterior1 == 0){
            document.getElementById('back6').style.display = "block"
          }else if(BedInterior1 == 1){
            document.getElementById('next6').style.display = "none"
          }
        }}>
          <img src={next} alt="" id="next6" onClick={() => {
            
          }} />
        </div>


      </div>




      <div id="projectDetails7" onClick={() => {
      }}>
        <div onClick={() => {
          window.location.href = "../Projects"

        }}>X</div>


        <div onClick={() => {
           setState9(HotelInterior - 1)
           if(HotelInterior == 7){
             document.getElementById('next7').style.display = "block";
           }else if(HotelInterior == 1){
            document.getElementById('back7').style.display = "none";
           }
        }}>
          <img src={back} alt="" id="back7" />
        </div>


        <div>
          <img src={hotelInterior[HotelInterior].src} alt="" />
        </div>


        <div onClick={() => {
           setState9(HotelInterior + 1)
           if(HotelInterior == 0){
            document.getElementById('back7').style.display = "block"
           }else if(HotelInterior == 6){
            document.getElementById('next7').style.display = "none"
           }
        }}>
          <img src={next} alt="" id="next7" />
        </div>


      </div>



      <div id="projectDetails8" onClick={() => {
      }}>
        <div onClick={() => {
          window.location.href = "../Projects"

        }}>X</div>


        <div>
        </div>


        <div>
          <img src={image1} alt="" />
        </div>


        <div>
        </div>


      </div>



      <div id="projectDetails9" onClick={() => {
      }}>
        <div onClick={() => {
          window.location.href = "../Projects"

        }}>X</div>


        <div onClick={() => {
           setState10(ModernHouse - 1)
           if(ModernHouse == 3){
            document.getElementById('next9').style.display = "block"
           }else if(ModernHouse == 1){
            document.getElementById('back9').style.display = "none"
           }
        }}>
          <img src={back} alt="" id="back9" />
        </div>


        <div>
          <img src={modernHouse[ModernHouse].src} alt="" />
        </div>


        <div onClick={() => {
           setState10(ModernHouse + 1)
           if(ModernHouse == 0){
              document.getElementById('back9').style.display = "block"
           }else if(ModernHouse == 2){
              document.getElementById('next9').style.display = "none"
           }
          
        }}>
          <img src={next} alt="" id="next9" />
        </div>


      </div>




      <div id="projectDetails10" onClick={() => {
      }}>
        <div onClick={() => {
          window.location.href = "../Projects"

        }}>X</div>


        <div onClick={() => {
          setState11(Restaurant - 1)
          if(Restaurant == 1){
            document.getElementById('next10').style.display = "block"
            document.getElementById('back10').style.display = "none"
          }
        }}>
          <img src={back} alt="" id="back10" />
        </div>


        <div>
          <img src={restaurant[Restaurant].src} alt="" />
        </div>


        <div onClick={() => {
          setState11(Restaurant + 1)
          if(Restaurant == 0){
            document.getElementById('next10').style.display = "none"
            document.getElementById('back10').style.display = "block"
          }
        }}>
          <img src={next} alt="" id="next10" />
        </div>


      </div>


      <div id="projectDetails11" onClick={() => {
      }}>
        <div onClick={() => {
          window.location.href = "../Projects"

        }}>X</div>


        <div onClick={() => {
          setState12(LivingRoom - 1)
          if(LivingRoom == 1){
            document.getElementById('next11').style.display = "block"
            document.getElementById('back11').style.display = "none"
          }
        }}>
          <img src={back} alt="" id="back11" />
        </div>


        <div>
          <img src={livingRoom[LivingRoom].src} alt="" />
        </div>


        <div onClick={() => {
          setState12(LivingRoom + 1)
          if(LivingRoom == 0){
            document.getElementById('next11').style.display = "none"
            document.getElementById('back11').style.display = "block"
          }
        }}>
          <img src={next} alt="" id="next11" />
        </div>


      </div>

      <div id="projectDetails12" onClick={() => {
      }}>
        <div onClick={() => {
          window.location.href = "../Projects"

        }}>X</div>


        <div onClick={() => {
            setState13(BedInteriors - 1)
            if(BedInteriors == 1){
              document.getElementById('next12').style.display = "block"
              document.getElementById('back12').style.display = "none"
            }
        }}>
          <img src={back} alt="" id="back12" />
        </div>


        <div>
          <img src={bedInterior1[BedInteriors].src} alt="" />
        </div>


        <div onClick={() => {
          setState13(BedInteriors + 1)
          if(BedInteriors == 0){
            document.getElementById('next12').style.display = "none"
            document.getElementById('back12').style.display = "block"
          }
        }}>
          <img src={next} alt="" id="next12" />
        </div>


      </div>



      <div id="projectDetails13" onClick={() => {
      }}>
        <div onClick={() => {
          window.location.href = "../Projects"

        }}>X</div>


        <div onClick={() => {
            setState14(DesignBedroom - 1)
            if(DesignBedroom == 1){
              document.getElementById('next13').style.display = "block"
              document.getElementById('back13').style.display = "none"
            }
        }}>
          <img src={back} alt="" id="back13" />
        </div>


        <div>
          <img src={designBedroom[DesignBedroom].src} alt="" />
        </div>


        <div onClick={() => {
          setState14(DesignBedroom + 1)
          if(DesignBedroom == 0){
            document.getElementById('next13').style.display = "none"
            document.getElementById('back13').style.display = "block"
          }
        }}>
          <img src={next} alt="" id="next13" />
        </div>


      </div>




      <div id="projectDetails14" onClick={() => {
      }}>
        <div onClick={() => {
          window.location.href = "../Projects"

        }}>X</div>


        <div onClick={() => {
           setState15(RoomLiving - 1)
           if(RoomLiving == 3){
            document.getElementById('next14').style.display = "block"
           }else if(RoomLiving == 1){
            document.getElementById('back14').style.display = "none"
           }
        }}>
          <img src={back} alt="" id="back14" />
        </div>


        <div>
          <img src={roomLiving[RoomLiving].src} alt="" />
        </div>


        <div onClick={() => {
          setState15(RoomLiving + 1)
          if(RoomLiving == 0){
             document.getElementById('back14').style.display = "block"
          }else if(RoomLiving == 2){
            document.getElementById('next14').style.display = "none"
          }
        }}>
          <img src={next} alt="" id="next14" />
        </div>


      </div>



      <div id="projectDetails15" onClick={() => {
      }}>
        <div onClick={() => {
          window.location.href = "../Projects"

        }}>X</div>


        <div onClick={() => {
           setState16(ModernLounge - 1)
           if(ModernLounge == 2){
            document.getElementById("next15").style.display = "block"
           }else if(ModernLounge == 1){
            document.getElementById("back15").style.display = "none"
           }
        }}>
          <img src={back} alt="" id="back15" />
        </div>


        <div>
          <img src={modernLounge[ModernLounge].src} alt="" />
        </div>


        <div onClick={() => {
          setState16(ModernLounge + 1)
          if(ModernLounge == 0){
            document.getElementById('back15').style.display = "block"
          }else if(ModernLounge == 1){
            document.getElementById("next15").style.display = "none"
          }
        }}>
          <img src={next} alt="" id="next15" />
        </div>


      </div>



      <div id="projectDetails16" onClick={() => {
      }}>
        <div onClick={() => {
          window.location.href = "../Projects"

        }}>X</div>


        <div onClick={() => {
           setState17(DrawingRoom - 1)
           if(DrawingRoom == 1){
            document.getElementById('back16').style.display = "none"
            document.getElementById('next16').style.display = "block"
           }
        }}>
          <img src={back} alt="" id="back16" />
        </div>


        <div>
          <img src={drawingroom[DrawingRoom].src} alt="" />
        </div>


        <div onClick={() => {
          setState17(DrawingRoom + 1)
          if(DrawingRoom == 0){
            document.getElementById('back16').style.display = "block"
            document.getElementById('next16').style.display = "none"
          }
          
        }}>
          <img src={next} alt="" id="next16" />
        </div>


      </div>


      <div id="projectDetails17" onClick={() => {
      }}>
        <div onClick={() => {
          window.location.href = "../Projects"

        }}>X</div>


        <div onClick={() => {
          setState18(ApartDesign - 1)
          if(ApartDesign == 3){
            document.getElementById('next17').style.display = "block"
          }else if(ApartDesign == 1){
            document.getElementById('back17').style.display = "none"
          }
        }}>
          <img src={back} alt="" id="back17" />
        </div>


        <div>
          <img src={apartDesign[ApartDesign].src} alt="" />
        </div>


        <div onClick={() => {
           setState18(ApartDesign + 1)
           if(ApartDesign == 0){
            document.getElementById('back17').style.display = "block"
           }else if(ApartDesign == 2){
            document.getElementById('next17').style.display = "none"
           }
        }}>
          <img src={next} alt="" id="next17" />
        </div>


      </div>



      <div id="projectDetails18" onClick={() => {
      }}>
        <div onClick={() => {
          window.location.href = "../Projects"

        }}>X</div>


        <div onClick={() => {
            setState19(Gym - 1)
            if(Gym == 1){
             document.getElementById('next18').style.display = "block"
             document.getElementById('back18').style.display = "none"
            }
        }}>
          <img src={back} alt="" id="back18" />
        </div>


        <div>
          <img src={gym[Gym].src} alt="" />
        </div>


        <div onClick={() => {
           setState19(Gym + 1)
           if(Gym == 0){
            document.getElementById('next18').style.display = "none"
            document.getElementById('back18').style.display = "block"
           }
        }}>
          <img src={next} alt="" id="next18" />
        </div>


      </div>



      <div id="projectDetails19" onClick={() => {
      }}>
        <div onClick={() => {
          window.location.href = "../Projects"

        }}>X</div>


        <div onClick={() => {
            setState20(Entrance - 1)
            if(Entrance == 1){
             document.getElementById('next19').style.display = "block"
             document.getElementById('back19').style.display = "none"
            }
        }}>
          <img src={back} alt="" id="back19" />
        </div>


        <div>
          <img src={entrance[Entrance].src} alt="" />
        </div>


        <div onClick={() => {
           setState20(Entrance + 1)
           if(Entrance == 0){
            document.getElementById('next19').style.display = "none"
            document.getElementById('back19').style.display = "block"
           }
        }}>
          <img src={next} alt="" id="next19" />
        </div>


      </div>


      <div id="projectDetails20" onClick={() => {
      }}>
        <div onClick={() => {
          window.location.href = "../Projects"

        }}>X</div>


        <div onClick={() => {
            setState21(Wardrobe - 1)
            if(Wardrobe == 1){
             document.getElementById('next20').style.display = "block"
             document.getElementById('back20').style.display = "none"
            }
        }}>
          <img src={back} alt="" id="back20" />
        </div>


        <div>
          <img src={wardrobe[Wardrobe].src} alt="" />
        </div>


        <div onClick={() => {
           setState21(Wardrobe + 1)
           if(Entrance == 0){
            document.getElementById('next20').style.display = "none"
            document.getElementById('back20').style.display = "block"
           }
        }}>
          <img src={next} alt="" id="next20" />
        </div>


      </div>


      <div id="projectDetails21" onClick={() => {
      }}>
        <div onClick={() => {
          window.location.href = "../Projects"

        }}>X</div>


        <div onClick={() => {
           setState22(BedroomHotel - 1)
           if(BedroomHotel == 7){
            document.getElementById('next21').style.display = "block"
           }else if(BedroomHotel == 1){
            document.getElementById('back21').style.display = "none"
           }
        }}>
          <img src={back} alt="" id="back21" />
        </div>


        <div>
          <img src={bedroomHotel[BedroomHotel].src} alt="" />
        </div>


        <div onClick={() => {
          setState22(BedroomHotel + 1)
          if(BedroomHotel == 0){
              document.getElementById('back21').style.display = "block"
          }else if(BedroomHotel == 6){
            document.getElementById('next21').style.display = "none"
          }
        }}>
          <img src={next} alt="" id="next21" />
        </div>


      </div>

      <div id="projectDetails22" onClick={() => {
      }}>
        <div onClick={() => {
          window.location.href = "../Projects"

        }}>X</div>


        <div onClick={() => {
           setState23(ModernBed - 1)
           if(ModernBed == 5){
            document.getElementById('next22').style.display = "block"
           }else if(ModernBed == 1){
            document.getElementById('back22').style.display = "none"
           }
        }}>
          <img src={back} alt="" id="back22" />
        </div>


        <div>
          <img src={modernBed[ModernBed].src} alt="" />
        </div>


        <div onClick={() => {
          setState23(ModernBed + 1)
          if(ModernBed == 0){
              document.getElementById('back22').style.display = "block"
          }else if(ModernBed == 4){
            document.getElementById('next22').style.display = "none"
          }
        }}>
          <img src={next} alt="" id="next22" />
        </div>


      </div>



      <div id="projectDetails23" onClick={() => {
      }}>
        <div onClick={() => {
          window.location.href = "../Projects"

        }}>X</div>


        <div onClick={() => {
           setState24(Benergy - 1)
           if(Benergy == 8){
            document.getElementById('next23').style.display = "block"
           }else if(Benergy == 1){
            document.getElementById('back23').style.display = "none"
           }
        }}>
          <img src={back} alt="" id="back23" />
        </div>


        <div>
          <img src={benergy[Benergy].src} alt="" />
        </div>


        <div onClick={() => {
          setState24(Benergy + 1)
          if(Benergy == 0){
              document.getElementById('back23').style.display = "block"
          }else if(Benergy == 7){
            document.getElementById('next23').style.display = "none"
          }
        }}>
          <img src={next} alt="" id="next23" />
        </div>


      </div>


      <div id="projectDetails24" onClick={() => {
      }}>
        <div onClick={() => {
          window.location.href = "../Projects"

        }}>X</div>


        <div onClick={() => {
           setState25(Bathroom - 1)
           if(Bathroom == 2){
            document.getElementById('next24').style.display = "block"
           }else if(Bathroom == 1){
            document.getElementById('back24').style.display = "none"
           }
        }}>
          <img src={back} alt="" id="back24" />
        </div>


        <div>
          <img src={bathroom[Bathroom].src} alt="" />
        </div>


        <div onClick={() => {
          setState25(Bathroom + 1)
          if(Bathroom == 0){
              document.getElementById('back24').style.display = "block"
          }else if(Bathroom == 1){
            document.getElementById('next24').style.display = "none"
          }
        }}>
          <img src={next} alt="" id="next24" />
        </div>


      </div>



      <div id="projectDetails25" onClick={() => {
      }}>
        <div onClick={() => {
          window.location.href = "../Projects"

        }}>X</div>


        <div onClick={() => {
           setState26(Apartment - 1)
           if(Apartment == 4){
            document.getElementById('next25').style.display = "block"
           }else if(Apartment == 1){
            document.getElementById('back25').style.display = "none"
           }
        }}>
          <img src={back} alt="" id="back25" />
        </div>


        <div>
          <img src={apartment[Apartment].src} alt="" />
        </div>


        <div onClick={() => {
          setState26(Apartment + 1)
          if(Apartment == 0){
              document.getElementById('back25').style.display = "block"
          }else if(Apartment == 3){
            document.getElementById('next25').style.display = "none"
          }
        }}>
          <img src={next} alt="" id="next25" />
        </div>


      </div>


      <div id="projectDetails26" onClick={() => {
      }}>
        <div onClick={() => {
          window.location.href = "../Projects"

        }}>X</div>


        <div onClick={() => {
           setState27(HouseInterior - 1)
           if(HouseInterior == 1){
           
            document.getElementById('back26').style.display = "none"
           }else if(HouseInterior == 5){
            document.getElementById('next26').style.display = "block"
           }
        }}>
          <img src={back} alt="" id="back26" />
        </div>


        <div>
          <img src={houseInterior[HouseInterior].src} alt="" />
        </div>


        <div onClick={() => {
          setState27(HouseInterior + 1)
          if(HouseInterior == 0){
              document.getElementById('back26').style.display = "block"
             
          }else if(HouseInterior == 4){
            document.getElementById('next26').style.display = "none"
          }
        }}>
          <img src={next} alt="" id="next26" />
        </div>


      </div>


      <div id="projectDetails27" onClick={() => {
      }}>
        <div onClick={() => {
          window.location.href = "../Projects"

        }}>X</div>


        <div onClick={() => {
           setState28(Luxury - 1)
           if(Luxury == 1){
            document.getElementById('back27').style.display = "none"
           }else if(Luxury == 3){
            document.getElementById('next27').style.display = "block"
           }
        }}>
          <img src={back} alt="" id="back27" />
        </div>


        <div>
          <img src={luxuryApartment[Luxury].src} alt="" />
        </div>


        <div onClick={() => {
          setState28(Luxury + 1)
          if(Luxury == 0){
              document.getElementById('back27').style.display = "block"
             
          }else if(Luxury == 2){
            document.getElementById('next27').style.display = "none"
          }
        }}>
          <img src={next} alt="" id="next27" />
        </div>


      </div>

      <div id="projectDetails28" onClick={() => {
      }}>
        <div onClick={() => {
          window.location.href = "../Projects"

        }}>X</div>


        <div onClick={() => {
           setState29(SAHQ - 1)
           if(SAHQ  == 1){
            document.getElementById('next28').style.display = "block"
            document.getElementById('back28').style.display = "none"
           }
          
        }}>
          <img src={back} alt="" id="back28" />
        </div>


        <div>
          <img src={sahq[SAHQ].src} alt="" />
        </div>


        <div onClick={() => {
            setState29(SAHQ + 1)
            if(SAHQ  == 0){
              document.getElementById('next28').style.display = "none"
              document.getElementById('back28').style.display = "block"
             }
        }}>
          <img src={next} alt="" id="next28" />
        </div>


      </div>


      <div id="projectDetails29" onClick={() => {
      }}>
        <div onClick={() => {
          window.location.href = "../Projects"

        }}>X</div>


        <div onClick={() => {
           setState30(Executive - 1)
           if(Executive  == 1){
            document.getElementById('back29').style.display = "none"
           }else if(Executive == 5){
            document.getElementById('next29').style.display = "block"
           }
          
        }}>
          <img src={back} alt="" id="back29" />
        </div>


        <div>
          <img src={executive[Executive].src} alt="" />
        </div>


        <div onClick={() => {
            setState30(Executive + 1)
            if(Executive == 0){
              document.getElementById('back29').style.display = "block"
             }else if(Executive == 4){
              document.getElementById('next29').style.display = "none"
             }
        }}>
          <img src={next} alt="" id="next29" />
        </div>


      </div>




      <div id="projectDetails30" onClick={() => {
      }}>
        <div onClick={() => {
          window.location.href = "../Projects"

        }}>X</div>


        <div onClick={() => {
           setState31(Farmhouse - 1)
           if(Farmhouse  == 1){
            document.getElementById('back30').style.display = "none"
           }else if(Farmhouse == 7){
            document.getElementById('next30').style.display = "block"
           }
          
        }}>
          <img src={back} alt="" id="back30" />
        </div>


        <div>
          <img src={farmhouse[Farmhouse].src} alt="" />
        </div>


        <div onClick={() => {
            setState31(Farmhouse + 1)
            if(Farmhouse == 0){
              document.getElementById('back30').style.display = "block"
             }else if(Farmhouse == 6){
              document.getElementById('next30').style.display = "none"
             }
        }}>
          <img src={next} alt="" id="next30" />
        </div>


      </div>

      <div id="projectDetails31" onClick={() => {
      }}>
        <div onClick={() => {
          window.location.href = "../Projects"

        }}>X</div>


        <div onClick={() => {
           setState32(FarmDesign - 1)
           if(FarmDesign  == 1){
            document.getElementById('back31').style.display = "none"
           }else if(FarmDesign == 4){
            document.getElementById('next31').style.display = "block"
           }
          
        }}>
          <img src={back} alt="" id="back31" />
        </div>


        <div>
          <img src={farmDesign[FarmDesign].src} alt="" />
        </div>


        <div onClick={() => {
            setState32(FarmDesign + 1)
            if(FarmDesign == 0){
              document.getElementById('back31').style.display = "block"
             }else if(FarmDesign == 3){
              document.getElementById('next31').style.display = "none"
             }
        }}>
          <img src={next} alt="" id="next31" />
        </div>


      </div>





      <footer onMouseOver={() => {
        document.getElementById('menuLinks').classList.remove('show')
      }}>










        <div className="social">
          <a href="https://www.facebook.com/profile.php?id=61551238487509" target='_blank' id='facebook'>

            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z" fill="#000000" />
            </svg>
          </a>
          <a href="https://www.instagram.com/atelier75.co/?igshid=MjEwN2IyYWYwYw%3D%3D" target='_blank' id='insta'>
            <svg width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">

              <g fill="none" fill-rule="evenodd">

                <path d="m0 0h32v32h-32z" />

                <path d="m23.6190476.13999994.2518496.00400082c4.4330352.13698982 7.9850489 3.77162206 7.9891029 8.23707871v15.23796813l-.0040009.2518496c-.1369898 4.4330352-3.771622 7.9850489-8.2370787 7.9891029h-15.23796812l-.25184954-.0040009c-4.43303524-.1369898-7.98504891-3.771622-7.9891029-8.2370787v-15.23796812l.00400082-.25184954c.13698982-4.43303524 3.77162206-7.98504891 8.23707871-7.9891029zm0 2.00571434h-15.23809522l-.2285857.00411224c-3.33773425.12028135-6.0066524 2.86402399-6.0066524 6.23112586v15.23809522l.00411224.2285857c.12028135 3.3377343 2.86402399 6.0066524 6.23112586 6.0066524h15.23809522l.2285857-.0041122c3.3377343-.1202814 6.0066524-2.864024 6.0066524-6.2311259v-15.23809522l-.0041122-.2285857c-.1202814-3.33773425-2.864024-6.0066524-6.2311259-6.0066524zm-7.6191758 4.85142851.2653486.00407526c4.8475552.14463612 8.7331682 4.11734025 8.7376368 8.99891015 0 4.9720125-4.0307165 9.002729-9.0028572 9.002729s-9.00285716-4.0307165-9.00285716-9.0028572c0-4.8833525 3.88804756-8.8586028 8.73741066-8.99901883zm.0001282 2.00571437c-3.8644153 0-6.99714284 3.13272754-6.99714284 6.99714284s3.13272754 6.9971428 6.99714284 6.9971428 6.9971428-3.1327275 6.9971428-6.9971428-3.1327275-6.99714284-6.9971428-6.99714284zm8.7619048-3.91047622c.7642569 0 1.3838095.61955263 1.3838095 1.38380953s-.6195526 1.38380953-1.3838095 1.38380953c-.764257 0-1.3838096-.61955263-1.3838096-1.38380953s.6195526-1.38380953 1.3838096-1.38380953z" fill="#000000" fill-rule="nonzero" />

              </g>

            </svg>
          </a>

          <a href="https://www.linkedin.com/in/saad-bashir-28b3ba116/" target='_blank' id='linkedin'>
            <svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
              viewBox="-143 145 512 512" xmlSpace="preserve">
              <path d="M-143,145v512h512V145H-143z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7
              c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6
              c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1
              c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z"/>
            </svg>
          </a>

        </div>
        <div className="whatsapp" id='wapp'>
          <a href="https://wa.me/923212556912" target='_blank'>
            <img src={whatsapp} alt="" className='whatsapp_btn blinking-image' />
          </a>
        </div>



      </footer>
    </>
  )
}
