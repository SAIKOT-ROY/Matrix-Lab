import "../Token/Token.css";
import { AiOutlineSearch } from "react-icons/ai";

const Token = () => {
  return (
    <div>
      <div className="ml-[65px] mt-[37px] mb-[55px] flex justify-between">
        <div className="border rounded-2xl font-pop">
          <div className="relative flex items-center">
            <input
              className="w-[435px] bg-black bg-opacity-30 h-[50px] p-4 rounded-2xl pl-12"
              type="text"
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white">
              <AiOutlineSearch size={24} />
            </span>
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white">
              Search
            </span>
          </div>
        </div>
        <button className="button mr-[44px]">Connect</button>
      </div>
      <h1 className="text-white font-worksan">Token Search Results</h1>
    </div>
  );
};

export default Token;
<h2>This is token</h2>;
