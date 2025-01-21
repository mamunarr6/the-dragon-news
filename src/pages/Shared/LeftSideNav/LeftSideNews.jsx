import PropTypes from "prop-types";

const LeftSideNews = ({ news }) => {
  return (
    <div className="card card-compact bg-base-100">
      <figure>
        <img src={news?.image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
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
