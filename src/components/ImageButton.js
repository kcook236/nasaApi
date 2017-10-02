import React, {Component} from 'react'

class ImageButton extends Component {
  render(){
    return (
      <div>
        <button className="submitButton" onClick={this.props.fetchRoverImage}>Submit</button>
      </div>
    )
  }
}


export default ImageButton
