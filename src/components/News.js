import React, { useState, useEffect } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  // defining state variable
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  document.title = `NewsMonkey - ${props.UP(
    props.category === "general" ? "home" : props.category
  )}`;

  


  // let componentDidMount = async () => {
  //   props.setProgress(0);
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&pageSize=${props.pageSize}`;
  //   setloading(true);
  //   let data = await fetch(url);
  //   props.setProgress(50);
  //   let parsedData = await data.json();
  //   setarticles(parsedData.artilcles);
  //   setloading(false)
  //   props.setProgress(100);
  // };

  const Update = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&pageSize=${props.pageSize}&page=${page}`;
    setloading(true);
    props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(50);
     
    setarticles(articles.concat(parsedData.articles));
    setloading(false);
    settotalResults(parsedData.totalResults);
    props.setProgress(80);
    setpage(page + 1 );
    props.setProgress(100);
  };

  useEffect(() => {
    Update();
  }, [])

  const fetchMoreData = async () => {
    setpage(page + 1 );
    Update();
  };
  return (
    <>
      <h1
        className="text-center"
        style={{ padding: "5px" }}
      >{`NewsMonkey - Top ${props.UP(props.category)} Headlines`}</h1>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row centering">
            {articles.map((element) => {
              return (
                <div className="container col-md-4 " key={element.url}>
                  <Newsitem
                    title={element.title}
                    description={element.description}
                    // title={element.title ? element.title.slice(0, 35) : ""}
                    // description={
                    //   element.description
                    //     ? element.description.slice(0, 70)
                    //     : ""
                    // }
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                    mode={props.mode}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

News.defaultProps = {
  country: "in",
  pageSize: 15,
  category: "general",
};

// News.PropTypes = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string,
// };
