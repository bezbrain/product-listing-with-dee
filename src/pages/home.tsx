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
        </div>
      </div>
      {/* <Link to="/products">Go to Product Page</Link> */}
    </div>
  );
};

export default Home;
