import { useEffect, useState } from "react";
import { Navbar, Sidebar, Category, News } from "../components";

const Home = () => {
  const [sidebar, setSidebar] = useState(false);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://func-news-app-api.azurewebsites.net/api/GetNewsList?category=Nation&timestamp=2023-12-05T23:08:00.000000Z"
    );
    const json = await data.json();
    const list = json.news_list;
    setNewsData(list);
  };

  console.log(newsData);
  const handleSideBar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <Navbar handleSideBar={handleSideBar} />
      <Sidebar sidebar={sidebar} />
      <Category />
      <News data={newsData} />
    </>
  );
};

export default Home;
