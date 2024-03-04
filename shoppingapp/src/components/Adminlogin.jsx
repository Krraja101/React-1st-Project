import { useState, useEffect } from "react";
import "../style/AdminLogin.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const AdminPage = () => {
  let [uname, setuname] = useState("");
  let [password, setpassword] = useState("");
  let [admin, setadmin] = useState([]);
  let navigate = useNavigate();
  // function login() {
  //   if (uname == "admin" && password == "1234") {
  //     alert("Admin logged in successfully");
  //   } else {
  //     alert("Admin logged in failed");
  //   }
  // }

  useEffect(() => {
    axios
      .get("http://localhost:1001/manager")
      .then((res) => {
        console.log(res.data);
        setadmin(res.data);
      })
      .catch((err) => {
        console.log("err");
      });
  }, []);

  function login(e) {
    e.preventDefault();
    let flag = false;
    {
      admin.map((x) => {
        if (x.email === uname && x.password === password) {
          alert("login successfully");
          navigate("/adminHomePage");
          flag = true;
        }
      });
      if (flag == false) {
        alert("Username or Password is incorrect!");
      }
    }
  }

  return (
    <div className="adminpage">
      <h1>Admin Login</h1>
      <div className="alogin">
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
            Password:
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
          <button onClick={login}>Login</button> <br /> <br /> <hr /> <br />
          <p>
            are you new to this page ? <Link to="/adminsignup">Signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default AdminPage;
