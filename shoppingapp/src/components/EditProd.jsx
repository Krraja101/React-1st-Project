import { useEffect, useState } from "react";
import "../style/editprod.css";
import { useParams } from "react-router-dom";
import axios from "axios";
const EditProd = () => {
  let [resname, setresname] = useState("");
  let [disname, setdisname] = useState("");
  let [quantity, setquantity] = useState("");
  let [price, setrprice] = useState("");
  let [rating, setrating] = useState("");
  let [image, setimage] = useState("");
  let [desc, setdesc] = useState("");
  let [catagory, setcatagory] = useState("");
  let param = useParams();
  console.log(param);
  useEffect(() => {
    axios
      .get(`http://localhost:1001/product/${param.id}`)
      .then((res) => {
        console.log(res.data);
        setresname(res.data.resname);
        setdisname(res.data.disname);
        setquantity(res.data.quantity);
        setrprice(res.data.price);
        setrating(res.data.rating);
        setimage(res.data.image);
        setdesc(res.data.desc);
        setcatagory(res.data.catagory);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let editedData = {
    resname,
    disname,
    quantity,
    price,
    rating,
    image,
    desc,
    catagory,
  };
  let editData = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:1001/product/${param.id}`, editedData)
      .then((res) => {
        alert(`data updated successfully`);
      })
      .catch((err) => {
        alert(`Can't update data`);
      });
  };
  return (
    <div className="editpg">
      <form onSubmit={editData}>
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
        </select>{" "}
        <br />
        <input
          required
          value={resname}
          onChange={(e) => {
            setresname(e.target.value);
          }}
          type="text"
          placeholder="Enter restaurent name"
        />{" "}
        <br />
        <input
          required
          value={disname}
          onChange={(e) => {
            setdisname(e.target.value);
          }}
          type="text"
          placeholder="Enter dish name"
        />{" "}
        <br />
        <input
          required
          value={quantity}
          onChange={(e) => {
            setquantity(e.target.value);
          }}
          type="text"
          placeholder="Quantity"
        />{" "}
        <br />
        <input
          required
          value={price}
          onChange={(e) => {
            setrprice(e.target.value);
          }}
          type="text"
          placeholder="Enter price"
        />{" "}
        <br />
        <textarea
          required
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
          placeholder="Enter the description"
          cols="30"
          rows="2"
        ></textarea>{" "}
        <br />
        <input
          required
          value={image}
          onChange={(e) => {
            setimage(e.target.value);
          }}
          type="text"
          placeholder="Enter image url"
        />{" "}
        <br />
        <input
          required
          value={rating}
          onChange={(e) => {
            setrating(e.target.value);
          }}
          type="number"
          min={0}
          max={5}
          placeholder="Rating of product"
        />{" "}
        <br />
        <button>Save changes</button>
      </form>
    </div>
  );
};
export default EditProd;
