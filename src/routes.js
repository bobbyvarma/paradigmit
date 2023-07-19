import { Route, Routes } from "react-router-dom";
import Header from "./website/header";
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </div>
  );
};
export default Routing;
