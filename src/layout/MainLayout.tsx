import { Outlet } from "react-router";
import Nabvar from "../components/Nabvar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div>
      <Nabvar></Nabvar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
