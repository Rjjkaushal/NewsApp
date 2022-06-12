import React from 'react'

const NewsItem=(props)=> {  
    let {title,description,imageUrl, newsUrl,author,date,source}=props;
    return (
      <div className="my-3">
        <div className="card">
          
            <img src={!imageUrl?"https://talksport.com/wp-content/uploads/sites/5/2022/03/TALKSPORT-joe-root-copy.jpg?strip=all&quality=100&w=1200&h=800&crop=1": imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {!author?"Unknown": author}on {new Date(date).toGMTString()}</small></p>
                <a  rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
}

export default NewsItem
