import { Link } from "react-router-dom";
import "./pages.css";

import logo from "../assets/logo-copy.png";

const Products = () => {
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
        </div>
        <div className="headerLine"></div>
      </div>

      <Link to="/">Go to Home Page</Link>
    </div>
  );
};

export default Products;
