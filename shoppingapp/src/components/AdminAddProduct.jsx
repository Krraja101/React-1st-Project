import { useState } from "react";
import "../style/AAddproducts.css";
import axios from "axios";

const AdminProd = () => {
  let [resname, setresname] = useState("");
  let [disname, setdisname] = useState("");
  let [quantity, setquantity] = useState("");
  let [price, setrprice] = useState("");
  let [rating, setrating] = useState("");
  let [image, setimage] = useState("");
  let [desc, setdesc] = useState("");
  let [catagory, setcatagory] = useState("");
  let prod = {
    resname,
    disname,
    quantity,
    price,
    rating,
    image,
    desc,
    catagory,
  };

  let addItem = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:1001/product", prod)
      .then((res) => {
        alert("product added successfully");
      })
      .catch((err) => {
        alert("Unexpected error");
      });
  };
  return (
    <div className="addItems">
      <form onSubmit={addItem}>
        <lable>
          <select
            required
            value={catagory}
            onChange={(e) => {
              setcatagory(e.target.value);
            }}
          >
            <option selected>Choose options</option>
            <option value="Paneer chilli">Paneer chilli</option>
            <option value="Gobi Manchurian">Gobi Manchurian</option>
            <option value="Samosha Chat">Samosha Chat</option>
            <option value="Aloo paratha">Aloo paratha</option>
            <option value="Chhola Bhatura">Chhola Bhatura</option>
            <option value="Masaala dhosa">Masaala dhosa</option>
            <option value="puri sabji">puri sabji</option>
            <option value="Pasta plain">Pasta plain</option>
            <option value="Chowmin veg">Chowmin veg</option>
            <option value="litti chokha">litti chokha</option>
            <option value="Sweets">Sweets</option>
            <option value="stuffed kachori">stuffed kachori</option>
            <option value="Burger">Burger</option>
            <option value="Pizza">Pizza</option>
            <option value="Veg Roll">Veg Roll</option>
            <option value="Sandwich">Sandwich</option>
            <option value="Veg fried rice">Veg fried rice</option>
            <option value="Lachha paratha">Lachha paratha</option>
            <option value="Idli">Idli</option>
            <option value="Cold drink">Cold drink</option>
          </select>
        </lable>
        <br />
        <lable>
          <input
            required
            value={resname}
            onChange={(e) => {
              setresname(e.target.value);
            }}
            type="text"
            placeholder="Enter restaurent name"
          />
        </lable>
        <br />
        <lable>
          <input
            required
            value={disname}
            onChange={(e) => {
              setdisname(e.target.value);
            }}
            type="text"
            placeholder="Enter dish name"
          />
        </lable>
        <br />
        <lable>
          <input
            required
            value={quantity}
            onChange={(e) => {
              setquantity(e.target.value);
            }}
            type="text"
            placeholder="Quantity"
          />
        </lable>
        <br />
        <lable>
          <input
            required
            value={price}
            onChange={(e) => {
              setrprice(e.target.value);
            }}
            type="text"
            placeholder="Enter price"
          />
        </lable>
        <br />
        <lable>
          <textarea
            required
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
            placeholder="Enter the description"
            cols="30"
            rows="2"
          ></textarea>
        </lable>
        <br />
        <lable>
          <input
            required
            value={image}
            onChange={(e) => {
              setimage(e.target.value);
            }}
            type="text"
            placeholder="Enter image url"
          />
        </lable>
        <br />
        <lable>
          <input
            required
            value={rating}
            onChange={(e) => {
              setrating(e.target.value);
            }}
            type="number"
            placeholder="Rating of product"
          />
        </lable>
        <br />
        <button>Add Item</button>
      </form>
    </div>
  );
};
export default AdminProd;
