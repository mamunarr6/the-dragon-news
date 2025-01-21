import PropTypes from "prop-types";

const LeftSideNews = ({ news }) => {
  return (
    <div className="card card-compact bg-base-100">
      <figure className="rounded-sm">
        <img src={news?.image_url} alt="" />
      </figure>
      <div className="mb-4 mt-1">
        <h2 className="card-title">{news?.title}</h2>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

LeftSideNews.propTypes = {
  news: PropTypes.object,
};

export default LeftSideNews;
