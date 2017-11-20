import React, { Component } from 'react';
import Box from './../component/box';
import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js"


class BoxCon extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="box">
          <Box handleClick={this.props.loadColor} color={this.props.color}></Box>
        </div>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return state
};

export default connect(mapStateToProps, actionCreators)(BoxCon);
