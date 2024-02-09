import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {

    let {title, description,imageURL,articleLink} =this.props

    return (
     
        <div className="card" style={{width: "18rem"}}>
  <img src={imageURL} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}...</p>
    <a href={articleLink} target="_blank" className="btn btn-primary btn-sm">Read more</a>
  </div>
</div>

    )
  }
}

export default NewsItem
