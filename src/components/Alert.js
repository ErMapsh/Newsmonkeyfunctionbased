import React, { Component } from "react";
// import PropTypes from 'prop-types'

export default function Alert(props) {
  return (
    <div style={{height:"50px"}}>
      {props.alert && (
        <div class="alert alert-success text-center" role="alert" >
          {props.UP(props.alert.type)} ❤{props.alert.msg}❤
        </div>
      )}
      </div>
  )
}

