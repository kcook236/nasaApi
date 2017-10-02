import React, { Component } from 'react';

class DisplayImage extends Component{
  render() {
    const images = this.props.?.map(image => {
      return(
        <div key={image.id}>
          <img className= "image" src="{image.img_src}" alt=""/>
        </div>
      )
    })
    return(
      <div>
        {images}
      </div>
    )
  }
}

export default DisplayImage
