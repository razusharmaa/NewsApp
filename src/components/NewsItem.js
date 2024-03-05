import React from 'react'

export default function NewsItem(props) {

  let { title, description, imageURL, articleLink, themeTxt, author, time, source } = props;

  return (
    <div style={{marginTop:"10px"}} className={`card text-bg-${themeTxt}`}>
         
      <span className="position-absolute end-0 badge rounded-pill bg-danger" style={{position:'absolute',top:"-9px"}}>
        {source}
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
