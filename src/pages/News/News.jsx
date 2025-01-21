import { useLoaderData, useParams } from "react-router";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { FaEye, FaRegBookmark, FaStar } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";

const News = () => {
  const { id } = useParams();
  const news = useLoaderData();
  const idNews = news?.find((n) => n._id === id);
  console.log(idNews);
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 gap-4">
        <div className="md:col-span-3">
          <h2 className="text-[#403F3F] text-xl font-semibold p-3 pl-2 mt-3">
            Dragon News
          </h2>
          <div className="card bg-base-100 border rounded-sm">
            {/* news card body */}
            <div className="card-body">
              <figure className="">
                <img
                  src={idNews.image_url}
                  alt="Shoes"
                  className="rounded-xl w-full"
                />
              </figure>

              <h2 className="card-title">{idNews.title}</h2>

              <p>{idNews.details}</p>
              <div className="divider"></div>
              {/* rating and view section */}
              <div className="card-actions w-full flex justify-between text-[#706F6F] px-4">
                <div className="flex items-center gap-2">
                  <FaStar className="text-xl text-orange-500" />
                  <FaStar className="text-xl text-orange-500" />
                  <FaStar className="text-xl text-orange-500" />
                  <FaStar className="text-xl text-orange-500" />
                  <FaStar className="text-xl text-orange-500" />
                  <p className="font-medium mt-1">{idNews.rating.number}</p>
                </div>
                <div className="flex items-center gap-3 font-medium mt-1">
                  <FaEye />
                  <p>{idNews.total_view}</p>
                </div>
              </div>
              {/* news author section */}
              <div className="flex justify-between items-center px-5 py-4  bg-[#F3F3F3]">
                <div className="flex gap-2">
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src={idNews.author.img} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold">
                      {idNews.author.name}
                    </h4>
                    <p className="text-[#706F6F] text-sm font-normal">
                      {idNews.author.published_date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#706F6F] text-lg cursor-pointer">
                  <FaRegBookmark />
                  <FiShare2 />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-1">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </>
  );
};

export default News;
