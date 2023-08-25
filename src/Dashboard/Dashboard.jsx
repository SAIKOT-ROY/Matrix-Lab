import { NavLink } from "react-router-dom";
import "../Dashboard/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="w-[288px] pt-[16px] bg-[#292929] text-white min-h-screen flex flex-col">
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-4">
          <div className="mb-[21px]">
            <img
              className="w-[25.333px] h-[29.333px]"
              src="https://i.ibb.co/m4QYTn9/Vector.png"
              alt=""
            />
            <h2
              className="text-4xl font-sans font-pacifico"
              style={{ color: "rgba(255, 255, 255, 0.70)" }}
            >
              NFTify
            </h2>
          </div>
          <NavLink
            className={({ isActive }) => (isActive ? "bg-red-500" : "")}
            to="/token"
          >
            <img
              className="mr-5 w-6 h-6 mt-2"
              src="https://i.ibb.co/NZB7yHj/ic-baseline-token-1.png"
              alt=""
            />
            <h2 className="text-2xl font-worksans">Token Address</h2>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "bg-red-500" : "")}
            to="/address"
          >
            <img
              className="mr-10 w-6 h-6"
              src="https://i.ibb.co/m69Rszc/fluent-pair-24-filled.png"
              alt=""
            />
            <h2 className="text-2xl font-worksans">Pair Address</h2>
          </NavLink>
        </div>
      </div>
      <div className="flex gap-5 justify-center items-center mt-[700px] ">
        <img src="https://i.ibb.co/4FC003C/facebook-4-1.png" alt="" />
        <img src="https://i.ibb.co/sW187Jp/twitter-1-1.png" alt="" />
        <img src="https://i.ibb.co/sW187Jp/twitter-1-1.png" alt="" />
      </div>
    </div>
  );
};

export default Dashboard;
