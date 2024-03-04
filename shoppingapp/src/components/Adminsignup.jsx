import { useState } from "react";
import "../style/AdminSignUp.css";
import axios from "axios";
const Adminsignup = () => {
  let [name, setname] = useState("");
  let [email, setemail] = useState("");
  let [phone, setphone] = useState("");
  let [password, setpassword] = useState("");
  let [imageurl, setimageurl] = useState("");
  let admins = { name, email, phone, password, imageurl };
  // let addAdmin = (e) => {
  //   e.preventDefault();
  //   fetch("http://localhost:1001/manager", {
  //     method: "POST",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify(admins),
  //   })
  //     .then((res) =>
  //       alert("Admin added successfully");
  //     })
  //     .catch((err) => {
  //       alert("Invalid data");
  //     });
  // };
  let addAdmin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:1001/manager", admins)
      .then((res) => {
        alert("Data added successfully");
      })
      .catch((err) => {
        alert("Invalid Data");
      });
  };

  return (
    <div className="adminsignup">
      <h1>Admin Signup</h1>
      <form onSubmit={addAdmin}>
        <label htmlFor="">
          Admin Name :
          <input
            type="text"
            required
            placeholder="Enter admins name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
        </label>{" "}
        <br /> <br />
        <label htmlFor="">
          Admin Email :
          <input
            type="email"
            required
            placeholder="Enter admins email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
        </label>{" "}
        <br /> <br />
        <label htmlFor="">
          Admin phone :
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => {
              setphone(e.target.value);
            }}
            pattern="[0-9]{10}"
            placeholder="Enter admins phone"
          />
        </label>
        <br /> <br />
        <label htmlFor="">
          Admin Password :
          <input
            type="password"
            required
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            placeholder="Enter admins password"
          />
        </label>
        <br /> <br />
        <label htmlFor="">
          Profile ImageUrl :
          <input
            type="text"
            required
            value={imageurl}
            onChange={(e) => {
              setimageurl(e.target.value);
            }}
            placeholder="Enter Profile Image Url"
          />
        </label>{" "}
        <br /> <br />
        <button>Register</button>
      </form>
    </div>
  );
};
export default Adminsignup;
