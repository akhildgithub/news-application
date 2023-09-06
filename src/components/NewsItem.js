import React from "react";


export default function NewsItem (props){
    let { title, description, imageUrl, readMore, author, date, source } = props;
    return (
      <div>
        <div className="card">
            <div style={{dispay:'flex',justifyContent:'end',right:'0',position:'absolute'}}>
            <span className="badge rounded-pill bg-danger" >
              {source}
            </span>
            </div>
          <img src={!imageUrl?'../default.webp':imageUrl} alt="..." style={{ height: "35vh" }} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By <strong>{!author ? "Unknown" : author}</strong> on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={readMore} target="blank" className="btn btn-dark">
              ReadMore &rarr;
            </a>
          </div>
        </div>
      </div>
    );
  
}

