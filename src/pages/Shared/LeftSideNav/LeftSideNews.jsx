const LeftSideNews = ({ news }) => {
  console.log(news);
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

export default LeftSideNews;
