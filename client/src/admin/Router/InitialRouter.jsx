import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductsPage from "../Components/ProductsPage";
import Signup from "../Components/Signup";
import CouponHistory from "../Components/CoupunHistory";
import Clients from "../Components/Clients";
import AddAdmin from "../Components/AddAdmin";
const InitialRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/productspage" element={<ProductsPage />} />
      <Route path="/coupunhistoy" element={<CouponHistory />} />
      <Route path="/clienthistory" element={<Clients />} />
      <Route path="/addadmin" element={<AddAdmin />} />
    </Routes>
  );
};

export default InitialRouter;
