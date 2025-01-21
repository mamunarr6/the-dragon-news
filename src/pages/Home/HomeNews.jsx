import PropTypes from "prop-types";
import { FaEye, FaRegBookmark, FaStar } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { Link } from "react-router";

const HomeNews = ({ news }) => {
  const { _id, author, details, title, image_url, rating, total_view } = news;
  console.log("home news", news, author);
  return (
    <div className="card bg-base-100 border border-t-0 rounded-sm mb-5">
      {/* news author section */}
      <div className="flex justify-between items-center px-5 py-4 bg-[#F3F3F3]">
        <div className="flex gap-2">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={author.img} />
            </div>
          </div>
          <div>
            <h4 className="text-base font-semibold">{author.name}</h4>
            <p className="text-[#706F6F] text-sm font-normal">
              {author.published_date}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[#706F6F] text-lg cursor-pointer">
          <FaRegBookmark />
          <FiShare2 />
        </div>
      </div>
      {/* news card body */}
      <div className="card-body items-center">
        <h2 className="card-title">{title}</h2>
      </div>
      <figure className="px-10">
        <img src={image_url} alt="Shoes" className="rounded-xl w-full" />
      </figure>
      <div className="card-body items-center">
        <p>
          {details.slice(0, 305)}{" "}
          <Link to={`/news/${_id}`} className="text-orange-500 font-medium">
            Read More
          </Link>
        </p>
        <div className="divider"></div>
        {/* rating and view section */}
        <div className="card-actions w-full flex justify-between text-[#706F6F] px-4">
          <div className="flex items-center gap-2">
            <FaStar className="text-xl text-orange-500" />
            <FaStar className="text-xl text-orange-500" />
            <FaStar className="text-xl text-orange-500" />
            <FaStar className="text-xl text-orange-500" />
            <FaStar className="text-xl text-orange-500" />
            <p className="font-medium mt-1">{rating.number}</p>
          </div>
          <div className="flex items-center gap-3 font-medium mt-1">
            <FaEye />
            <p>{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

HomeNews.propTypes = {
  news: PropTypes.object,
};

export default HomeNews;
