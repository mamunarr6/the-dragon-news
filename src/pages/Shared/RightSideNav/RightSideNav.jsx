import {
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qZone1 from "../../../assets/swimming.png";
import qZone2 from "../../../assets/class.png";
import qZone3 from "../../../assets/playground.png";

const RightSideNav = () => {
  return (
    <div>
      <div>
        <h2 className="text-[#403F3F] text-xl font-semibold p-3 pl-2">
          Login With
        </h2>
        <div className="flex flex-col gap-2 px-4">
          <button className="btn btn-outline border-blue-500 text-blue-500 hover:bg-blue-500 hover:border-blue-500">
            <FaGoogle />
            Google Login
          </button>
          <button className="btn btn-outline">
            <FaGithub />
            GitHub Login
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-[#403F3F] text-xl font-semibold p-3 pl-2 mt-3">
          Find Us On
        </h2>
        <div className="flex flex-col px-4">
          <a
            className="border py-2 pl-5 rounded-t-md hover:text-blue-500 flex items-center gap-2 text-[#706F6F] font-medium"
            href=""
          >
            <FaFacebookF className="text-blue-700 w-8 h-8 p-2 bg-gray-100 rounded-full" />
            Facebook
          </a>
          <a
            className="border-x py-2 pl-5  hover:text-blue-500 flex items-center gap-2 text-[#706F6F] font-medium"
            href=""
          >
            <FaTwitter className="text-blue-400 w-8 h-8 p-2 bg-gray-100 rounded-full" />
            Twitter
          </a>
          <a
            className="border py-2 pl-5 rounded-b-md hover:text-blue-500 flex items-center gap-2 text-[#706F6F] font-medium"
            href=""
          >
            <FaInstagram className="text-pink-600 w-8 h-8 p-2 bg-gray-100 rounded-full" />
            Instagram
          </a>
        </div>
      </div>
      <div className="px-4 pb-3 bg-[#F3F3F3]">
        <h2 className="text-[#403F3F] text-xl font-semibold p-3 pl-2 mt-3">
          Q-Zone
        </h2>
        <div className="flex flex-col justify-center">
          <img src={qZone1} alt="" />
          <img src={qZone2} alt="" />
          <img src={qZone3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
