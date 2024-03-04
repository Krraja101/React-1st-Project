import { Link } from "react-router-dom";
import "../style/adminnav.css";
const AdminNav = () => {
  return (
    <div className="adminnavbar">
      <div className="logo">
        <Link to={"/adminHomePage"}>
          <h1 title="click here to go to home page">
            Food<span>Cart</span>
            <span>
              <img
                height={25}
                src="https://static-00.iconduck.com/assets.00/shopping-cart-icon-512x462-yrde1eu0.png"
                alt=""
              />
            </span>
          </h1>
        </Link>
      </div>
      <div className="options">
        <Link to={"/adminHomePage/adminView"}>View Products</Link>
        <Link to={"/adminHomePage/adminAddProduct"}>Add products</Link>
      </div>
    </div>
  );
};
export default AdminNav;
