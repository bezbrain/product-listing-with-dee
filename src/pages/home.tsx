// import { Link } from "react-router-dom";
import "./pages.css";

const Home = () => {
  return (
    <div>
      <div className="header"></div>
      <div className="summaryCon">
        <h2>
          Welcome to Precisious Auto Sales <br /> where Luxury, Reliability, and
          Affordability meet.
        </h2>
        <p>
          At Precisious Auto Sales, we are committed to providing the public
          with dependable, high-quality luxury vehicles at competitive prices
          all with a focus on convenience and customer satisfaction. We offer
          flexible financing options as well as the ability to pay in full,
          making the buying process seamless for every customer.
        </p>
        <p>
          We invite you to explore our About Us and Services sections to learn
          more about how we operate and how you can take advantage of our
          exceptional offers.
        </p>
      </div>
      {/* <Link to="/products">Go to Product Page</Link> */}
    </div>
  );
};

export default Home;
