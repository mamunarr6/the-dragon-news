import { useEffect, useState } from "react";
import LeftSideNews from "./LeftSideNews";
import { useLoaderData } from "react-router";

const LeftSideNav = () => {
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    fetch("/categories.json")
      .then((result) => result.json())
      .then((data) => setCategories(data));
  }, []);
  const news = useLoaderData();
  return (
    <div>
      <h2 className="text-[#403F3F] text-xl font-semibold p-3 pl-2">
        All Categories
      </h2>
      {/* Category of all news */}
      <div>
        {categories?.map((category) => (
          <div key={category.id}>
            <h3 className="pl-8 py-2 text-lg font-medium text-[#9F9F9F] hover:bg-gray-100">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
      <div>
        {news?.slice(0, 3).map((aNews) => (
          <LeftSideNews key={aNews._id} news={aNews}></LeftSideNews>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
