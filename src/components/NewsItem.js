import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {

    let { title, description, imageURL, articleLink, themeTxt,author,time,source } = this.props

    return (


      <div className={`card text-bg-${themeTxt}`}
      // style={{width: "18rem"}}
      >
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:"1"}}>
   {source}
    <span className="visually-hidden">unread messages</span>
    </span>
        <img src={imageURL} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <div className="card-footer ">
            <small className="text-info">By <strong className='text-warning'>{!author?"Unknown":author}</strong>  on {new Date(time).toGMTString()}</small>
          </div>
          <a href={articleLink} target="_blank" className="btn btn-primary btn-sm">Read more</a>
        </div>
      </div>


    )
  }
}

export default NewsItem
