const News = ({ data }) => {
  return (
    <section className="news-sec m-4">
      {data.length > 0 ? (
        data.map((data) => (
          <div
            key={data?.article_id}
            className="py-2 border-b-2 border-lightGray lg:w-[75%] m-auto"
          >
            <div className="news-title">
              <span className="text-peach font-semibold">
                {data?.category}
              </span>
              <h2 className="text-2xl font-bold">{data?.title}</h2>
            </div>
            <div className="news-content md:flex items-start gap-8">
              <div className="news-desc md:w-1/2">
                <p className="font-medium pb-4 md:my-4">{data?.description}</p>
                <p className="text-sm text-greyText pt-1 pb-4 ">
                  {new Date(data?.published_timestamp).toLocaleString()}
                </p>
              </div>
              <div className="news-img my-4 md:w-1/2">
                <img src={data?.image_url} alt="Image" />
              </div>
            </div>

            {/* <div className="news-content lg:flex-1">
              <div className="news-title">
                <span className="text-red-500 font-semibold">
                  {data?.category}
                </span>
                <h2 className="text-2xl font-bold">{data?.title}</h2>
              </div>
              <div className="news-desc">
                <p className="font-medium pb-4">{data?.description}</p>
                <p className="text-sm text-greyText pt-1 pb-4">
                  {new Date(data?.published_timestamp).toLocaleString()}
                </p>
              </div>
            </div>
            <div className="news-img lg:flex-shrink-0 lg:ml-8">
              <img src={data?.image_url} alt="Image" />
            </div> */}
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </section>
  );
};

export default News;
