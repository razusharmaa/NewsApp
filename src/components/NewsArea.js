import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function NewsArea({ category, themeTxt, runProgress }) {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);
  const [toploading, settopLoading] = useState(true);

  useEffect(() => {
    document.title = `NewsX - ${category}`;
    fetchArticles();
  }, [currentPage, category]);

  const fetchArticles = async () => {
    if (toploading) {
      runProgress(20);
    } else {
      setLoading(true);
    }
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=dba3289219ba4869a19efefc93d6caca&pageSize=12&page=${currentPage}`;
    const response = await fetch(url);
    if (toploading) {
      runProgress(60);
    }
    const data = await response.json();
    setArticles(prevArticles => [...prevArticles, ...data.articles]);
    setTotalResults(data.totalResults);
    if (toploading) {
      runProgress(100);
      settopLoading(false);
    } else {
      setLoading(false);
    }
  };

  const fetchMoreData = () => {
    settopLoading(false);
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <InfiniteScroll
      dataLength={articles.length}
      next={fetchMoreData}
      hasMore={articles.length !== totalResults}
      loader={loading && <Spinner/>}
      height={550}
      endMessage={'Completed news'}
    >
      <div className="container" style={{height:"100vh"}}>
        <h2 className="text-center my-2">NewsX - Top heading on {category.charAt(0).toUpperCase() + category.slice(1)}</h2>
        <div className="row">
        {articles.map((element,index) => {
              if (element.urlToImage) {
                return (
                <div className="col-md-4 mb-3" key={`${element.url}-${index}`}>
                <NewsItem
                  themeTxt={themeTxt}
                  title={element.title ? element.title.slice(0, 60) : ""}
                  description={element.description ? element.description.slice(0, 88) : ""}
                  articleLink={element.url}
                  imageURL={element.urlToImage}
                  author={element.author}
                  time={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          }
        })}
        </div>
      </div>
    </InfiniteScroll>
  );
};
