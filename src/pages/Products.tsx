import { Link, useNavigate } from "react-router-dom";
import "./pages.css";
import { FiMenu } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { SiTiktok } from "react-icons/si";
import { MdClose } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";

import logo from "../assets/logo-copy.png";
import { useState } from "react";

const Products = () => {
  const [ismenu, setIsMenu] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleScroll = (scroll: string) => {
    if (scroll === "contact") {
      navigate("/#contactUs");
    }
    if (scroll === "service") {
      navigate("/#service");
    }
    if (scroll === "about") {
      navigate("/#about");
    }
    if (scroll === "service") {
      navigate("/#service");
    }
  };
  return (
    <div>
      <div className="headerCon">
        <div className="header">
          <div className="logoCon">
            <Link to="/">
              {" "}
              <img className="logo" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="headItem">
            <button onClick={() => handleScroll("contact")} className="btn">
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
      <Link to="/">Go to Home Page</Link>
    </div>
  );
};

export default Products;
