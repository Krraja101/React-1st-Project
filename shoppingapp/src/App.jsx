import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpage from "./components/Landingpage";
import AdminPage from "./components/Adminlogin";
import Userlogin from "./components/Userlogin";
import Adminsignup from "./components/Adminsignup";
import Usersignup from "./components/Usersignup";
import AdminHomePage from "./components/AdminHomePage";
import Error from "./components/ErrorPage";
import UserHome from "./components/UserHomePage";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/*" element={<Error />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/user" element={<Userlogin />} />
          <Route path="/adminsignup" element={<Adminsignup />} />
          <Route path="/usersignup" element={<Usersignup />} />
          <Route path="/adminHomePage/*" element={<AdminHomePage />} />
          <Route path="/userHomePage/*" element={<UserHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
// This App is variable
