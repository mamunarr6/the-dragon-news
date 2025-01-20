import moment from "moment";
import logo from "../../../assets/logo.png";
const Header = () => {
  return (
    <div className="space-y-1">
      <img className="mx-auto" src={logo} alt="" />
      <p className="text-center text-[#706F6F]">
        Journalism Without Fear or Favour
      </p>
      <p className="text-center text-xl font-medium text-[#706F6F]">
        {moment().format("dddd, MMMM D, YYYY")}
      </p>
    </div>
  );
};

export default Header;
