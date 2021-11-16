import React, { Component } from "react";
// import PropTypes from 'prop-types'

export default class Alert extends Component {
  render() {
    return (
      <div style={{height:"50px"}}>
      {this.props.alert && (
        <div class="alert alert-success text-center" role="alert" >
          {this.props.UP(this.props.alert.type)} ❤{this.props.alert.msg}❤
        </div>
      )}
      </div>
    );
  }
}
