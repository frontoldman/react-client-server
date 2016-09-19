import React, {Component, PropTypes} from "react";

export default class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      children
    } = this.props

    return ( < div >
      < h2 > layout
        <
        /h2> {
        children
      }
        <
        /div>
        )
        }


        }