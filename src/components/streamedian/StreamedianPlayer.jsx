import React from "react";


export default class StreamedianPlayer extends React.Component {


  render() {
    return (
      
         <div>
        <video id={this.props.id} controls autoPlay>
          {this.props.children}
        </video>
      </div>
     
    );
  }
}
