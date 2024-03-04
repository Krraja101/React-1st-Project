import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../style/display.css";
const Dis = (x) => {
  let param = useParams();
  let [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:1001/product/${param.id}`)
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="dismain">
      <div>
        <h2>
          Thanks to use our application <br /> you will get your order
          soon...!!!<span id="smile">&#128525;&#129505;</span>
        </h2>
      </div>
      <div className="disd">
        <h3>
          {" "}
          <b>Restaurant : </b>
          {data.resname}
        </h3>
        <h3>
          {" "}
          <b>Dish name : </b> {data.catagory}
        </h3>
        <h3>
          <b>Quantity : </b> {data.quantity}
        </h3>
        <h3>
          {" "}
          <b>Price : </b>
          {data.price}
        </h3>
      </div>
    </div>
  );
};
export default Dis;
