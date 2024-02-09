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
      loading: false
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/everything?q=apple&from=2024-02-08&to=2024-02-08&sortBy=popularity&apiKey=dba3289219ba4869a19efefc93d6caca";
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      ARTICLESx: parsedData.articles
    })
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsX - Top heading.</h2>
        <div className="row">
          {(this.state.ARTICLESx || this.state.ARTICLESx.urlToImage == null) && this.state.ARTICLESx.map((element) => {
            if (element.urlToImage) {

              return <div className="col-sm mb-5" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 60) : ""} description={element.description ? element.description.slice(0, 88) : ""} articleLink={element.url} imageURL={element.urlToImage} />
              </div>
            }

          })}
        </div>
      </div>
    );
  }

}