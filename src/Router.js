import { Route, Routes } from "react-router-dom";

import App from "./App";
import Cancel from "./Cancel";
import E404 from "./E404";
import Success from "./Success";

export default function Router(props) {
  return (
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/thankyou" element={<Success />} />
      <Route exact path="/cancelled" element={<Cancel />} />
      <Route path="*" element={<E404 />} />
    </Routes>
  );
}
