import React, { Component } from 'react'

export default class Images extends Component {
  componentWillUnmount(){
    console.log("Images Comp Unmounted");
  }

  render() {
    return (
      <img src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmljeWNsZXxlbnwwfHwwfA%3D%3D"
      />
    )
  }
}
