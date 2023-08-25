import { Outlet } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";

const Home = () => {
  return (
    <div className="flex">
      <Dashboard />
      <div
        className="flex-1 bg-[rgba(0, 0, 0, 0.57)] bg-cover bg-center bg-[#00000091]"
        style={{
          backgroundImage: "url(https://i.ibb.co/fMbrMks/Rectangle-9398.png)",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
