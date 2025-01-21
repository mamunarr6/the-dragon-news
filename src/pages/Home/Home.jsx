import { useLoaderData } from "react-router";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import HomeNews from "./HomeNews";

const Home = () => {
  const news = useLoaderData();
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 gap-4">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-[#403F3F] text-xl font-semibold p-3 pl-2">
            Dragon News Home
          </h2>
          <div>
            {news?.map((aNews) => (
              <HomeNews key={aNews._id} news={aNews}></HomeNews>
            ))}
          </div>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
