import { Link, useNavigate } from "react-router-dom";
import "./pages.css";
import { FiMenu } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { SiTiktok } from "react-icons/si";
import { MdClose } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { type DataProp } from "../types/data-type";

import logo from "../assets/logo-copy.png";
import { useState } from "react";
import image1 from "../assets/images/image1.jpeg";
import image2 from "../assets/images/image2.jpeg";
import image3 from "../assets/images/image3.jpeg";
import image4 from "../assets/images/image4.jpeg";
import image5 from "../assets/images/image5.jpeg";
import image6 from "../assets/images/image6.jpeg";
import image7 from "../assets/images/image7.jpeg";
import image8 from "../assets/images/image8.jpeg";
import image9 from "../assets/images/image9.jpeg";
import image10 from "../assets/images/image10.jpeg";

const Products = () => {
  const data: DataProp[] = [
    {
      id: "1",
      image: image1,
      details: "2024 Lexus NX • 350",
      miles: "8,615",
      price: "$10,000",
      deposite: "$1000",
      instock: "Available",
      warranty: "2 Years Warranty",
      detailes1:
        "This vehicle is in excellent condition with only 8,615 miles driven. It features an efficient I-4 cylinder engine, all-wheel drive (AWD), and a smooth automatic transmission. The exterior comes in a striking orange finish, paired with a sleek black interior. It also includes the 350 trim and comes with a great warranty, giving you extra confidence on every drive.",
      detailes2: "",
      detailes3: "Transmission: Automatic ",
      detailes4: "Exterior color: Orange",
      detailes5: "Interior color: Black",
      detailes6: "Trim: 350",
      detailes7: "",
      detailes8: "",
      detailes9: "",
      detailes10: "",
    },
    {
      id: "2",
      image: image2,
      details:
        "2019 Lamborghini Aventador SVJ Coupe 1 of 1 Matte Baby Blue from the factory",
      miles: "6,578",
      price: "$9800",
      deposite: "$800",
      instock: "Available",
      warranty: "2 Years Warranty",
      detailes1:
        "For sale is a truly unique 2019 Lamborghini Aventador SVJ Coupe — a 1-of-1 example finished in factory Matte Baby Blue (Blu Seiler). With my new Revuelto finally delivered, it’s time for this special SVJ to find its next owner. This SVJ has just 6,578 miles and is in exceptional condition, fully loaded with premium options and extensive carbon fiber accents. The entire body is protected by high-quality paint protection film (PPF) to preserve its rare finish.",
      detailes2:
        "It comes equipped with a brilliant F1 Valvetronic exhaust for an exhilarating sound experience, with the option to return it to the original stock exhaust if preferred. This is a rare opportunity to own one of the most unique SVJs ever built, combining Lamborghini’s legendary performance with unmatched exclusivity.",
      detailes3: "",
      detailes4: "",
      detailes5: "",
      detailes6: "",
      detailes7: "",
      detailes8: "",
      detailes9: "",
      detailes10: "",
    },
    {
      id: "3",
      image: image3,
      details: "2022 Dodge Charger, Scat Pack Sedan 4D",
      miles: "36,000",
      price: "$9000",
      deposite: "$1000",
      instock: "Available",
      warranty: "2 Years Warranty",
      detailes1:
        "For sale is a 2022 Dodge Charger Scat Pack 6.4L V8 with only 36,000 miles. This vehicle has a clean title, no accident history, and runs and drives like new. Everything functions perfectly, with a very clean interior and exterior.",
      detailes2:
        "Equipped with SRT drive modes, a premium sound system, Bluetooth audio, Apple CarPlay, and keyless entry/start, this Charger offers both performance and modern convenience. It also includes blind-spot monitoring, a rearview camera, leather seats, heated and cooled seating, and a starlight headliner for a custom luxury touch. Additional features include a sunroof, tinted windows, and tires in excellent condition. This is a powerful yet comfortable performance sedan that’s ready for its next owner.",
      detailes3: "Transmission: Automatic",
      detailes4: "Exterior color: Black",
      detailes5: "Interior color: Red",
      detailes6: "Fuel type: Gasoline",
      detailes7: "Trim: Scat Pack Sedan 4D",
      detailes8: "",
      detailes9: "",
      detailes10: "",
    },
    {
      id: "4",
      image: image4,
      details: "2015 AUDI A6 3.0 QUATTRO TDI PRESTIGE S-LINE",
      miles: "136,558",
      price: "$6500",
      deposite: "$500",
      instock: "Available",
      warranty: "2 Years Warranty",
      detailes1:
        "For sale is a 2015 Audi A6 3.0 Quattro TDI Prestige S-Line — a well-maintained luxury sedan with a clean title, no accidents, and a clean Carfax history. This is a 2-owner vehicle in excellent condition, ready for its next driver. It features newer tires and fresh fluids, ensuring smooth and reliable performance. With 136,558 miles, the car runs and drives great, showcasing Audi’s signature blend of power, comfort, and all-weather capability thanks to the Quattro all-wheel drive system.",
      detailes2: "",
      detailes3: "Transmission: Automatic",
      detailes4: "Exterior color: White",
      detailes5: "Interior color: Black",
      detailes6: "Fuel type: Diesel",
      detailes7: "VIN: WAUHMAFC1FN032057",
      detailes8: "",
      detailes9: "",
      detailes10: "",
    },
    {
      id: "5",
      image: image5,
      details: "2023 Chevrolet Blazer RS Sport Utility 4D",
      miles: "9,418",
      price: "$9000",
      deposite: "$1000",
      instock: "Available",
      warranty: "2 Years Warranty",
      detailes1:
        "For sale is a 2023 Chevrolet Blazer RS Sport Utility 4D — an eye-catching SUV with a clean title, one owner, and only 9,418 miles. This Blazer features a striking color combination with a black and red interior, giving it a sporty and unique look.",
      detailes2:
        "Despite being a versatile SUV, the RS trim delivers impressive performance. It’s loaded with premium features, including a digital rearview mirror and a panoramic sunroof for an open, modern feel. Offered at $9,000 with a $1,000 down payment, in-house financing is available — making it easy to drive this stylish, low-mileage Blazer home. We put dreams in driveways!",
      detailes3: "Transmission: Automatic",
      detailes4: "Exterior color: Yellow",
      detailes5: "Interior color: Black",
      detailes6: "Fuel type: Gasoline",
      detailes7: "Trim: RS Sport Utility 4D",
      detailes8: "Number of owners: 1",
      detailes9: "",
      detailes10: "",
    },
    {
      id: "6",
      image: image6,
      details: "Luxury for Less!2022 Acura MDX SH-AWD w/Tech Pkg",
      miles: "42,000",
      price: "$6000",
      deposite: "$800",
      instock: "Available",
      warranty: "2 Years Warranty",
      detailes1:
        "Luxury for Less! Presenting a 2022 Acura MDX SH-AWD with Technology Package — a premium SUV offering style, performance, and value. This MDX is in excellent condition inside and out, with only 42,000 miles on the odometer. The Super Handling All-Wheel Drive (SH-AWD) system ensures confident performance in all conditions, while the Technology Package adds advanced comfort, convenience, and safety features. Don’t miss this unbeatable deal on a luxury SUV that blends performance, reliability, and value.",
      detailes2: "",
      detailes3: "transmission: Automatic",
      detailes4: "1-owner",
      detailes5: "Exterior color: Grey",
      detailes6: "Interior color: Black",
      detailes7: "All-Wheel Drive",
      detailes8: "",
      detailes9: "",
      detailes10: "",
    },
    {
      id: "7",
      image: image7,
      details: "2018 Ford Mustang Convertible ",
      miles: "58,000",
      price: "$7,700",
      deposite: "$700",
      instock: "Available",
      warranty: "2 Years Warranty",
      detailes1:
        "For sale is a 2018 Ford Mustang Convertible — the perfect car for summer cruising. This Mustang is ready to drive anywhere and has only 58,000 original miles. It runs flawlessly with no mechanical issues and comes well-equipped with Apple CarPlay, Bluetooth, reverse camera, backup sensors, and leather seats for comfort and style. It also features remote start for added convenience. With a clean title and excellent condition, this Mustang Convertible is 100% ready for the road and summertime fun.",
      detailes2: "",
      detailes3: "CarPlay",
      detailes4: "Bluetooth",
      detailes5: "Reverse camera",
      detailes6: "Leather seats",
      detailes7: "back up sensor",
      detailes8: "VIN: 1FATP8UH9J5133244 ",
      detailes9: "",
      detailes10: "",
    },
    {
      id: "8",
      image: image8,
      details: "2021 Ram 1500 Crew Cab • TRX Pickup 4D 5 1/2 ft",
      miles: "40,494 ",
      price: "$15,000",
      deposite: "$2,500",
      instock: "Available",
      warranty: "2 Years Warranty",
      detailes1:
        "For sale is a 2021 Ram 1500 TRX Crew Cab 4D (5 1/2 ft bed) — a high-performance pickup with a clean title and only one previous owner. This TRX has 40,494 miles and is equipped with a powerful gasoline engine paired with an automatic transmission. It comes in a sleek grey exterior with a black interior, offering both aggressive styling and comfort.",
      detailes2:
        "The vehicle is in excellent condition with no significant damage or problems. Guaranteed financing is available, making it easy to get behind the wheel of this powerful and capable truck.",
      detailes3: "Transmission: Automatic",
      detailes4: "Exterior Color: Grey",
      detailes5: "Interior Color: Black",
      detailes6: "Fuel Type: Gasoline",
      detailes7: "Trim: TRX Pickup 4D 5 1/2 ft",
      detailes8: "Number of Owners: 1",
      detailes9: "",
      detailes10: "",
    },
    {
      id: "9",
      image: image9,
      details:
        "2016 Mustang GT Premium Track Pack 5.0 Coyote, with a Roush Supercharger",
      miles: "56,000",
      price: "$8,000",
      deposite: "$500",
      instock: "Available",
      warranty: "2 Years warranty",
      detailes1:
        "For sale is an exceptionally clean 2016 Ford Mustang GT Premium Track Pack 5.0 Coyote, equipped with a Roush Supercharger and professionally tuned by Lund. This car runs perfectly with zero issues and delivers an impressive 737 WHP. It features a brand-new MCW flat stick shifter, Stage 3 clutch with warranty (paperwork and receipts included), and a built transmission. The car also has four brand-new tires and a fresh Royal Purple oil change. There are no warning lights or error codes, and it comes with a clean and clear title in hand. Price is best offer.",
      detailes2: "",
      detailes3: "",
      detailes4: "",
      detailes5: "",
      detailes6: "",
      detailes7: "",
      detailes8: "",
      detailes9: "",
      detailes10: "",
    },
    {
      id: "10",
      image: image10,
      details:
        "2024 Dodge RAM • 3500 Big Horn 6.7L Cummins Turbo Diesel Engine",
      miles: "32,000",
      price: "$10,500",
      deposite: "$1500",
      instock: "Available",
      warranty: "2 Years Warranty",
      detailes1:
        "For sale is a 2024 Dodge Ram 3500 Big Horn, a heavy-duty truck built for power, comfort, and capability. This truck comes with a Clean Carfax and Clean Title. Powered by the legendary 6.7L Cummins Turbo Diesel Engine delivering up to 420 HP and an incredible 1,075 lb-ft of torque, paired with a 6-speed automatic transmission, it offers a towing capacity of up to 37,090 lbs — perfect for demanding work or heavy hauling.",
      detailes2:
        "Inside, you’ll find the Uconnect 5 system with an 8.4-inch (optional 12-inch) touchscreen, Apple CarPlay, and Android Auto integration. The cabin features premium leather upholstery with heated front seats, ensuring comfort even on long drives. Equipped with a Trailer Brake Controller, Bed Utility Group, and advanced safety systems like Forward Collision Warning, Adaptive Cruise Control, and Blind Spot Monitoring, this Ram 3500 Big Horn is the ideal blend of strength, technology, and safety.",
      detailes3: "Touchscreen",
      detailes4: "Apple CarPlay",
      detailes5: "Blind Spot Monitoring",
      detailes6: "Android Auto Integration",
      detailes7: "Heated Front Seats",
      detailes8: "Trailer Brake Controller",
      detailes9: "",
      detailes10: "",
    },
    // {
    //   id: "",
    //   image: "",
    //   details: "",
    //   miles: "",
    //   price: "",
    //   deposite: "",
    //   instock: "",
    //   warranty: "",
    //   detailes1: "",
    //   detailes2: "",
    //   detailes3: "",
    //   detailes4: "",
    //   detailes5: "",
    //   detailes6: "",
    //   detailes7: "",
    //   detailes8: "",
    //   detailes9: "",
    //   detailes10: "",
    // },
  ];

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

      <div className="prodBody">
        <div className="exploy">
          <h2>Exploy Our Products</h2>
          <p>
            Like any product? <span>contact us</span>{" "}
          </p>
        </div>
        {data.map((each) => {
          return (
            <div className="carCon" key={each.id}>
              <img className="carImg" src={each.image} alt="" />
              <h4>{each.details}</h4>
              <p>Miles: {each.miles}</p>
              <p>{each.price}</p>
              <p>Deposit: {each.deposite}</p>
            </div>
          );
        })}
      </div>
      {/* <Link to="/">Go to Home Page</Link> */}
    </div>
  );
};

export default Products;
