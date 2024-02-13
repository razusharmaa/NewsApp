import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";


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
    this.setState({loading: true});
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=dba3289219ba4869a19efefc93d6caca&pageSize=12&page=${PageNum}`;
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      ARTICLESx: parsedData.articles,
      loading:false,
      totalResults: parsedData.totalResults
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
        <>
          {this.state.loading && <Spinner mode={true}></Spinner>}
          {!this.state.loading && <div className="container my-3">
            <h2>NewsX - Top heading.</h2>
            <div className="row">
              {this.state.ARTICLESx.length > 0 && this.state.ARTICLESx.map((element) => {
                if (element.urlToImage) {
                  return <div className="col-md-4 mb-3" key={element.url}>
                    <NewsItem themeTxt={this.props.themeTxt} title={element.title ? element.title.slice(0, 60) : ""} description={element.description ? element.description.slice(0, 88) : ""} articleLink={element.url} imageURL={element.urlToImage} />
                  </div>
                }
              })}
            </div>
            <div className="d-flex justify-content-between">
              <button disabled={this.state.currentPage<=1} type="button" className={`btn btn-outline-info btn-${this.props.themeTxt}`} onClick={this.handelPrevBtn}>←Previous</button>
              <button disabled={this.state.currentPage*12>=this.state.totalResults} type="button" className={`btn btn-outline-info btn-${this.props.themeTxt}`} onClick={this.handelNextBtn}>Next→</button>
            </div>
          </div>}
        </>
      );
      

  }}