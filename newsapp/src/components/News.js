import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
        
constructor(){
super();
this.state ={
    articles:[],
    loading: false,
    page:1

}
}
async componentDidMount(){
  let url= "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5aff34f0cb2d405a84e976c0da46f4af&page=1pageSize=20";
  let data= await fetch(url);
  let parsedData =await data.json();
  console.log(parsedData);
  this.setState({articles: parsedData.articles,totalResults: parsedData.totalResults})
}
 
handlePreviousClick=async()=>{

let url= `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5aff34f0cb2d405a84e976c0da46f4af&page=${this.state.page - 1}&pageSize=20`;
  let data= await fetch(url);
  let parsedData =await data.json();
   console.log(parsedData);
  this.setState({
  page: this.state.page - 1,
  articles: parsedData.articles
})
}  

handleNextClick=async()=>{
if(this.state.page +1 >Math.ceil(this.state.totalResults/20)){

}
else{
let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5aff34f0cb2d405a84e976c0da46f4af&page=${this.state.page + 1}&pageSize=20`;
  let data= await fetch(url);
  let parsedData =await data.json();
   console.log(parsedData);
  this.setState({
  page: this.state.page + 1,
  articles: parsedData.articles
})
}
}
  render() {
    return (
      <div className="container my-3">
        <h1>News World -Top Headlines</h1>
        
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                     <Newsitem  title={element.title?element.title:""} description ={element.description?element.description:""}  imgUrl={element.urlToImage} newsUrl={element.url}/>
                   </div> 
  })}
           </div>
           <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
            <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>    
        </div>
      
    )
  }
}

export default News