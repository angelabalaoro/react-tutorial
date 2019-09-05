import React, { Component } from 'react'

class Detail extends Component {
  render() {
    console.log(this.props.location.state.id);

    return (
      <div>
          hello
      </div>
    )
  }
}

export default Detail