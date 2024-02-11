import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class NewsArea extends Component {

  /*  Sdata = [
      {
        articles: [ { title :HelloWorld}]
      }
    ]
    */


  constructor() {
    super();
    this.state = {
      ARTICLESx: [],
      loading: false,
      currentPage: 1,
    }
  }



  DataFetch = async (PageNum) => {

    let url = `https://newsapi.org/v2/everything?q=apple&from=2024-02-08&to=2024-02-08&sortBy=popularity&apiKey=dba3289219ba4869a19efefc93d6caca&pageSize=18&page=${PageNum}`;
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      ARTICLESx: parsedData.articles
    })
  }

  async componentDidMount() {

    this.DataFetch(this.currentPage);
  }

  handelNextBtn = async () => {
    let nextPage = this.state.currentPage + 1;
    this.setState({ currentPage: nextPage });
    this.DataFetch(nextPage);
  };

  handelPrevBtn = async () => {
    let prevPage = this.state.currentPage - 1;
    this.setState({ currentPage: prevPage });
    this.DataFetch(prevPage);
  }


    render() {
      return (
        <div className="container my-3">
          <h2>NewsX - Top heading.</h2>
          <div className="row">
            {(this.state.ARTICLESx || this.state.ARTICLESx.urlToImage) && this.state.ARTICLESx.map((element) => {
              if (element.urlToImage) {
                return <div className="col-sm mb-5" key={element.url}>
                  <NewsItem title={element.title ? element.title.slice(0, 60) : ""} description={element.description ? element.description.slice(0, 88) : ""} articleLink={element.url} imageURL={element.urlToImage} />
                </div>
              }
            })}
          </div>
          <div className="d-flex justify-content-between">
            <button disabled={this.state.currentPage<=1} type="button" className="btn btn-dark" onClick={this.handelPrevBtn}>&larr;Previous</button>
            <button disabled={this.state.currentPage>=5} type="button" className="btn btn-dark" onClick={this.handelNextBtn}>Next&rarr;</button>
          </div>
        </div>
      );
    }

  }