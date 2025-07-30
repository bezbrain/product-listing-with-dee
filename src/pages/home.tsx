import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>This is Home Page</h1>
      <Link to="/products">Go to Product Page</Link>
    </div>
  );
};

export default Home;
