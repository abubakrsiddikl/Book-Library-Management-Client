import { Outlet } from "react-router";
import Nabvar from "../components/Nabvar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

export default function MainLayout() {
  return (
    <div>
      <Toaster></Toaster>
      <Nabvar></Nabvar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
