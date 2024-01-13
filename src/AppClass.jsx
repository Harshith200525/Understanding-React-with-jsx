import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  // code here
  render(){
    let images = this.imageData()

    return(
      <>
        <h1>
          Kalvium gallary
        </h1>
        <div className='image-container'>
        {images.map((el) => {
          return (
            <div key={el.id}>
              <img src={el.img} alt='' />
            </div>
          )
        })}
        </div>
        <div>
          Using class Component
        </div>
      </>
    )
  }

}
