import { Link } from "react-router-dom";
import "./pages.css";
import { FiMenu } from "react-icons/fi";

import logo from "../assets/logo-copy.png";
import backimg from "../assets/images/background.png";

const Home = () => {
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
            <button className="btn">Contact us</button>
            <div className="menuCon">
              <FiMenu size={30} />
            </div>
          </div>
        </div>
        <div className="headerLine"></div>
      </div>
      {/* end of header */}
      <div className="summaryCon">
        <h2>
          Welcome to Precisious Auto Sales <br />
          where Luxury, Reliability, and Affordability meet.
        </h2>
        <p>
          At <span>Precisious Auto Sales</span> , we are committed to providing
          the public with <span>dependable, high-quality luxury vehicles</span>{" "}
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
      <div className="service">
        <h1>Our Service</h1>
        <p>
          At Precisious, we make purchasing a vehicle simple, transparent, and
          customer-focused. Our process begins once a reservation fee or down
          payment is made. For full payments, a 70% deposit is collected
          upfront, with the remaining balance due upon finalization. For
          financing, the process begins after the down payment is completed, and
          ongoing payment terms will be arranged by our customer service team.
          Once the down payment is confirmed, we handle all the necessary
          paperwork and arrange for our courier service to deliver the vehicle
          directly to your address. If a monthly payment is missed under a
          financing plan, a $25 late fee (or an amount agreed upon in the
          contract) will be applied. Each vehicle comes with: No additional
          mileage Two keys Bill of sale Temporary tag Clean title You will have
          two days to test drive the vehicle or have it inspected by your
          mechanic. If you choose to keep it, you’ll sign the final documents
          and either complete the payment or proceed with your financing
          agreement. If you decide not to keep the vehicle within the two-day
          test period, simply notify us, and our courier will arrange pickup.
          Your deposit will be refunded. Our goal is to ensure a smooth,
          convenient, and risk-free car buying experience.
        </p>
      </div>
      {/* end of our service */}
    </div>
  );
};

export default Home;
