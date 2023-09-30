import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import location from "../assets/location.png"
import emailIcon1 from "../assets/emailIcon1.png"
import phone from "../assets/phoneIcon.png"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from './Modal'
import Menu from './Menu'
import whatsapp from "../assets/WhatsApp.svg.webp"
import img from "../assets/2) Lobby Lounge.jpg"
import seating from "../assets/3) Seating Space.jpg"
import img1 from "../assets/advertisement.jpg"
import img2 from "../assets/Living Room 3.jpg"
import img3 from "../assets/arch1.jpg"
import landScape from "../assets/landscape.jpg"
import landScape1 from "../assets/landscape1.png"
import lobby from "../assets/9) Lobby.jpg"
import manager from "../assets/6) Manager's Room.jpg"
import final from "../assets/Final 11.jpg"
import final2 from "../assets/Final 2.jpg"

export default function Services() {
  window.addEventListener("scroll", () => {
    const topBorder = document.getElementById('navbar-container').getBoundingClientRect().top;
    topBorder >= 0
      ? document.getElementById("navbar").classList.remove("fixed")
      : document.getElementById("navbar").classList.add("fixed");
  })
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }
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
              if (document.getElementById('sideBarContainer').style.display == "none" || document.getElementById('sideBarContainer').style.display == "") {
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
                <Link to="/projects" onClick={handleNavLinkClick}>PROJECTS</Link>
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
        <li><Link to="/services/commercial">COMMERCIAL INTERIORS</Link></li>
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

      <div className="mainService" onMouseOver={() => {
        document.getElementById('menuLinks').classList.remove('show')
      }}>
        <div className="serviceWebsiteHeading">
          <h1>Expertise</h1>
        </div>
        <div className="imgsSlider1">
          <Slider {...settings} speed={4000} fade>
            <img src={img} alt="" />
            <img src={seating} alt="" />
            <img src={final} alt="" />
            <img src={final2} alt="" />
          </Slider>

        </div>
        <div className="serviceImage">
          <div>
            <h2>Atelier 75</h2>
            <hr />
            <p id='firstPara'>At Atelier 75, we specialize in innovative and visionary architectural designs that inspire and transform spaces. With extensive experience and expertise, our team of skilled architects brings creativity and technical precision to every project. <span id='read'>We excel in translating clients' visions into functional and aesthetically pleasing architectural solutions. From conceptualization to execution, we are proficient in all phases of the design process. Our expertise lies in producing detailed architectural drawings, 3D visualizations, and renderings to effectively communicate design intent. Sustainability is integral to our designs, incorporating green building practices and energy-efficient solutions. Collaboration is key, as we value open communication and work closely with clients, engineers, contractors, and consultants. Our portfolio showcases diverse projects tailored to each client's needs. Atelier 75 is your trusted partner for architectural innovation.</span></p>
          </div>


        </div>

        <div className="architectureSection">
          <div>
            <Link to="architecture"><img src={img1} alt="" /></Link>
            <h1>Architecture</h1>
          </div>
          <div>
            <Link to="res"><img src={img3} alt="" /></Link>
            <h1>Residential</h1>
          </div>



        </div>
        <div className="text">
          <h1>Breaking Barriers</h1>
          <p id='secondPara'>With a diverse range of capabilities, we offer comprehensive architectural services tailored to meet the unique needs of our clients. Our areas of expertise span a wide spectrum, including architectural design, interior design, landscape and urban design, product design, facade design, 3D Visualization, hospitality, residential, commercial architecture, and virtual reality.</p>
          <p id="thirdPara">
            With our team of talented interior designers, we seamlessly integrate interior design into our architectural projects. Meticulous attention to detail is at the core of our interior design approach, allowing us to create cohesive and captivating spaces that are both aesthetically pleasing and highly functional. Moreover, we pride ourselves on our project management expertise, ensuring that every aspect of the architectural process is effectively managed, from initial concept development to final construction. This guarantees timely delivery, cost control, and seamless coordination with contractors and other stakeholders.
          </p>
          <p id="fourthPara">
            Furthermore, we harness cutting-edge technology to provide immersive 3D visualizations and virtual reality experiences. By leveraging these tools, our clients can fully envision their projects before construction begins, enhancing communication, reducing risks, and enabling informed decision-making throughout the design process.
          </p>
          <span id='more1' onClick={() => {
            document.getElementById('thirdPara').style.display = "block"
            document.getElementById('fourthPara').style.display = "block"
            document.getElementById('less1').style.display = "block"
            document.getElementById('more1').style.display = "none"
          }}>See More...</span>
          <span id='less1' onClick={() => {
            document.getElementById('thirdPara').style.display = "none"
            document.getElementById('fourthPara').style.display = "none"
            document.getElementById('more1').style.display = "block"
            document.getElementById('less1').style.display = "none"
          }}>See Less...</span>
        </div>

        <div className="interiorSection">

          <div>
            <Link to="interiors"><img src={img2} alt="" /></Link>
            <h1>Interiors</h1>
          </div>
          <div>
            <Link to="facade-design"><img src={landScape} alt="" /></Link>
            <h1>Facade Design</h1>
          </div>
          <div>
            <Link to="landscape"><img src={landScape1} alt="" /></Link>
            <h1>Landscape Architecture</h1>
          </div>
        </div>
        <div className="commercial">
          <p>Our approach starts by deeply understanding people's needs and how spaces will be utilized. By prioritizing functionality and elegance, our aim is to create commercial interiors that not only serve their purpose but also evoke a unique sense of place, perfectly complementing the building's overall expression.</p>
          <div>
            <Link to="commercial"><img src={lobby} alt="" /></Link>
            <h1>Corporate Interiors</h1>
          </div>
          <div>
            <Link to="commercial"><img src={manager} alt="" /></Link>
            <h1>Executive Offices</h1>
          </div>



        </div>
        <footer id='servicefooter' onMouseOver={() => {
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
          <div className="whatsapp">
            <a href="https://wa.me/923212556912" target='_blank'>
              <img src={whatsapp} alt="" className='whatsapp_btn blinking-image' />
            </a>
          </div>



        </footer>
      </div>


    </>
  )
}
