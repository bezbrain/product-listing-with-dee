import { Link, useLocation } from "react-router-dom";
import "./pages.css";
import { FiMenu } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { SiTiktok } from "react-icons/si";
import { MdClose } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

import logo from "../assets/logo-copy.png";
import backimg from "../assets/images/background.png";
import { useEffect, useState } from "react";

const Home = () => {
  const [ismenu, setIsMenu] = useState<boolean>(false);

  const service = document.querySelector(".service");
  const about = document.querySelector(".about");

  const location = useLocation();

  const handlehome = () => {
    const header = document.querySelector(".summaryCon");
    if (header) {
      header.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactUs = () => {
    const contact = document.querySelector(".contactUs");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScroll = (screen: string) => {
    if (screen === "service" && service) {
      setIsMenu(false);
      service.scrollIntoView({ behavior: "smooth" });
    }
    if (screen === "about" && about) {
      setIsMenu(false);
      about.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      <div className="headerCon">
        <div className="header">
          <div onClick={handlehome} className="logoCon">
            <Link to="/">
              {" "}
              <img className="logo" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="headItem">
            <button onClick={handleContactUs} className="btn">
              Contact us
            </button>
            <div onClick={() => setIsMenu(true)} className="menuIcon">
              <FiMenu size={30} />
            </div>
          </div>
        </div>
        <div className="headerLine"></div>
      </div>
      {/* end of header */}
      {ismenu && (
        <div className="menuCon">
          <button onClick={() => setIsMenu(false)} className="closeCon">
            <MdClose color="red" className="closeIcon" />
          </button>
          <div style={{ marginInline: "auto", width: "60%" }}>
            <div className="meetMe">
              <h1>Let Deal</h1>
              <FaHandshake color="#f6ff00ff" size={40} />
            </div>
            <div className="ppCon">
              <p className="pp" onClick={() => handleScroll("service")}>
                Our Service
              </p>
              <p className="pp" onClick={() => handleScroll("about")}>
                About Us
              </p>
              <Link className="pp" to="/products">
                All Products
              </Link>
            </div>

            <div className="modaline"></div>

            <div className="linksCon">
              <a href="mailto:michaelwspence@gmail.com">
                <MdEmail className="contactIcon" />
                <p>E-mail Me</p>
              </a>
              <a
                href="https://wa.me/+13039443673"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoWhatsapp className="contactIcon" />
                <p>Whatsapp Me</p>
              </a>
              <a href="https://www.tiktok.com/@cheapcarforsellinusa0?_t=ZT-8yYVaqfpG3R&_r=1">
                <SiTiktok className="contactIcon" />
                <p>Tiktok</p>
              </a>
            </div>
          </div>
        </div>
      )}
      {/* end of moda */}
      <div className="summaryCon">
        <h2>
          Welcome to Precisious Auto Sales <br />
          where Luxury, Reliability, and Affordability meet.
        </h2>
        <p>
          At <span>Precisious Auto Sales</span> , we are committed to providing
          the public with <span>dependable, high quality luxury vehicles</span>{" "}
          at competitive prices all with a focus on convenience and customer
          satisfaction. We offer flexible financing options as well as the
          ability to pay in full, making the buying process seamless for every
          customer.
        </p>
        <p>
          We invite you to explore our <span>About Us</span> and{" "}
          <span>Our Services </span>
          sections to learn more about how we operate and how you can take
          advantage of our exceptional offers.
        </p>
      </div>
      {/* end of summary */}
      <div className="displayImg">
        <div className="imgCon">
          <img className="img" src={backimg} alt="" />
        </div>
        <div className="imgText">
          <p>
            we <br /> <span>offer</span> <br />
            great <br />
            <span>deal</span>
          </p>
          <div className="productBtn">
            {" "}
            <Link className="productLink" to="/products">
              All Products
            </Link>
          </div>
        </div>
      </div>
      {/* end of display img */}
      <div id="service" className="service">
        <h1>Our Service</h1>
        <p>
          At Precisious, we make purchasing a vehicle simple, transparent, and
          customer focused. Our process begins once a reservation fee or down
          payment is made. For full payments, a{" "}
          <span>70% deposit is collected upfront </span> , with the remaining
          balance due upon finalization.
        </p>
        <p>
          For financing,{" "}
          <span>the process begins after the down payment is completed </span> ,
          and ongoing payment terms will be arranged by our customer service
          team. Once the down payment is confirmed, we handle all the necessary
          paperwork and arrange for our courier service to deliver the vehicle
          directly to your address. If a monthly payment is missed under a
          financing plan, a <span>$25 late fee </span> (or an amount agreed upon
          in the contract) will be applied.
        </p>
        <h3>Each vehicle comes with:</h3>
        <ul>
          <li>No additional mileage</li>
          <li>Two keys</li>
          <li>Bill of sale</li>
          <li>Temporary tag</li>
          <li>Clean title</li>
        </ul>

        <p>
          You will have <span>two days </span> to test drive the vehicle or have
          it inspected by your mechanic. If you choose to keep it, you’ll sign
          the final documents and either complete the payment or proceed with
          your financing agreement. If you decide not to keep the vehicle within
          the two day test period, simply notify us, and our courier will
          arrange pickup. Your deposit will be refunded.{" "}
        </p>
        <p className="goal">
          Our goal is to ensure a smooth, convenient, and risk free car buying
          experience.
        </p>
      </div>
      {/* end of our service */}
      <div id="about" className="about">
        <h1>About Us</h1>
        <p>
          Precisious is a trusted automotive company specializing in clean title
          vehicles, free from mechanical or structural issues. Our inventory
          primarily consists of bank-seized cars, offered at competitive prices
          based on the outstanding amounts owed to the bank.
        </p>
        <p>
          We are committed to transparency and customer satisfaction. Every
          customer is provided with a two day test drive period to evaluate the
          vehicle or have it inspected by their own mechanic. Additionally, we
          offer a two-year warranty on every vehicle purchased from us, ensuring
          peace of mind and long-term reliability.
        </p>
        <p>
          For convenience, we provide nationwide doorstep delivery through our
          dedicated courier service. Customers who prefer to collect their
          vehicles in person are required to book a reservation in advance to
          ensure a smooth pickup process.
        </p>
      </div>
      {/* end of about us */}
      <div id="contactUs" className="contactUs">
        <h2>Contact Us</h2>
        <p className="address">873 TX-21, Cedar Creek, TX 78612</p>
        <div className="contacts">
          <a
            href="https://wa.me/+13039443673"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoWhatsapp />
            <p>Whatsapp me</p>
          </a>
          <a href="mailto:michaelwspence@gmail.com">
            <MdEmail />
            <p>Email Me</p>
          </a>
          <a href="https://www.tiktok.com/@cheapcarforsellinusa0?_t=ZT-8yYVaqfpG3R&_r=1">
            <SiTiktok />
            <p>Tiktok</p>
          </a>
          <div className="copywrite">
            <p>copywrite 2025</p>
            <FaRegCopyright />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
