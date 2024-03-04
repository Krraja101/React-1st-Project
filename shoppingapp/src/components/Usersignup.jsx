import { useState } from "react";
import "../style/UserSignup.css";
import axios from "axios";
const Usersignup = () => {
  let [name, setname] = useState("");
  let [email, setemail] = useState("");
  let [phone, setphone] = useState("");
  let [pass, setpass] = useState("");
  let [image, setimage] = useState("");
  let users = { name, email, phone, pass, image };
  // let addUsers = (e) => {
  //   e.preventDefault();
  //   fetch("http://localhost:1001/users", {
  //     method: "POST",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify(users),
  //   })
  //     .then((res) => {
  //       alert("User addes successfully");
  //     })
  //     .catch((err) => {
  //       alert("Invalid data");
  //     });
  // };
  let addUsers = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:1002/users", users)
      .then((res) => {
        alert("User added successfully");
      })
      .catch((err) => {
        alert("Invalid data");
      });
  };
  return (
    <div className="usignup">
      <h1>User Signup</h1>
      <form onSubmit={addUsers}>
        <label htmlFor="">
          User Name :
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
            required
            placeholder="Enter user name"
          />
        </label>
        <br /> <br />
        <label htmlFor="">
          User Email :
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            required
            placeholder="Enter user email id"
          />
        </label>
        <br />
        <br />
        <label htmlFor="">
          User Phone :
          <input
            type="tel"
            value={phone}
            onChange={(e) => {
              setphone(e.target.value);
            }}
            pattern="[0-9]{10}"
            placeholder="Enter Phone number"
          />
        </label>
        <br /> <br />
        <label htmlFor="">
          Password :
          <input
            type="password"
            value={pass}
            onChange={(e) => {
              setpass(e.target.value);
            }}
            required
            placeholder="Enter password"
          />
        </label>
        <br /> <br />
        <label htmlFor="">
          Profile Image :
          <input
            type="text"
            value={image}
            onChange={(e) => {
              setimage(e.target.value);
            }}
            required
            placeholder="Enter image url"
          />
        </label>
        <br /> <br />
        <button>Register</button>
      </form>
    </div>
  );
};
export default Usersignup;
