import React, { Component } from 'react'

export class Newsitem extends Component {

  render() {
    let {title,description,imgUrl,newsUrl}=this.props;
    return (
      <div className="my-3">
        
        <div className="card">
        <img src={!imgUrl?"https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F8d2bfc5c-d774-4b96-a22f-8b135e0f5db2.jpg?source=next-barrier-page":imgUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem
