import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  const navigatation = useNavigation();
  const loading = navigatation.state === "loading";
  return (
    <>
      <Navbar />
      <section className="page">
        {loading ? <div className="loading" /> : <Outlet />}
      </section>
    </>
  );
};
export default HomeLayout;
