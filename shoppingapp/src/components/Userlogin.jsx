import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../style/UserLogin.css";
import axios from "axios";
const Userlogin = () => {
  let [uname, setuname] = useState("");
  let [password, setpassword] = useState("");
  let [users, setusers] = useState("");
  let navigate = useNavigate("");
  // function login() {
  //   if (uname == "user" && password == "4321") {
  //     alert("User logged in successfully");
  //   } else {
  //     alert("User logged in failed");
  //   }
  // }
  useEffect(() => {
    axios
      .get("http://localhost:1002/users")
      .then((res) => {
        setusers(res.data);
      })
      .catch((err) => {
        alert("Invalid data");
      });
  }, []);

  function login() {
    let a = false;
    {
      users.map((x) => {
        if (x.email == uname && x.pass == password) {
          alert("Logged in successfully");
          navigate("/userHomePage");
          a = true;
        }
      });
      if (a == false) {
        alert("Username & password are incorrect");
      }
    }
  }
  return (
    <div className="userpage">
      <h1>User Login</h1>
      <div className="ulogin">
        <form action="">
          <label htmlFor="">
            Username:
            <input
              type="text"
              placeholder="Enter username"
              value={uname}
              onChange={(e) => {
                setuname(e.target.value);
              }}
            />
          </label>
          <br /> <br />
          <label htmlFor="">
            Password :{" "}
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </label>
          <br /> <br />
          <button onClick={login}>Login</button> <br />
          <br /> <hr /> <br />
          <p>
            are you new to this page ? <Link to="/usersignup">Signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Userlogin;
