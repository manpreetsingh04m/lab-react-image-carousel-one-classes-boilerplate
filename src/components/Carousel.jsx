import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state ={
      currentIndex: 0,
    }
  }
  increase=()=>{
    if(this.state.currentIndex>1){
        this.setState({
          currentIndex: 0
        })
    }else{
        this.setState({
          currentIndex: this.state.currentIndex+1
        })
    }
}
decrease=()=>{
    if(this.state.currentIndex<1){
        this.setState({
          currentIndex: 2
        })
    }else{
        this.setState({
          currentIndex: this.state.currentIndex-1
        })
    }
}
  render(){
    return(
      <>
      <h1 className="heading">Carousel</h1>
      <div className="carouselContainer flex">
        <div className="leftArrow arrowDiv flex" onClick={this.decrease}>
          <ArrowBackIosIcon />
        </div>
        <h2 className="title">{images[this.state.currentIndex].title}</h2>
        <p className="caption">{images[this.state.currentIndex].subtitle}</p>
        <img src={images[this.state.currentIndex].img}  />
        <div className="rightArrow arrowDiv flex" onClick={this.increase}>
          <ArrowForwardIosIcon />
        </div>
      </div>
      </>
    )
  }
  
}

export default Carousel;