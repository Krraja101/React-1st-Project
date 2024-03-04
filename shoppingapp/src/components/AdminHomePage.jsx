import AdminNav from "./AdminNavBar";
import { Route, Routes } from "react-router-dom";
import AdminView from "./AdminView";
import AdminProd from "./AdminAddProduct";
import EditProd from "./EditProd";
const AdminHomePage = () => {
  return (
    <div>
      <AdminNav />
      <Routes>
        <Route path="/adminView" element={<AdminView />} />
        <Route path="/adminAddProduct" element={<AdminProd />} />
        <Route path="/editProduct/:id" element={<EditProd />} />
      </Routes>
    </div>
  );
};
export default AdminHomePage;
