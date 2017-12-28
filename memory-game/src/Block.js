import injectSheet from "react-jss";
import styles from "./styles.json";
import React from "react";

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "none"
    };
  }
  render(props) {
    this.changedColor = { display: this.state.color };
    return (
      <div
        className={this.props.classes.block}
        onClick={this.props.onClickEvent.bind(null, this)}
      >
        <span style={this.changedColor}>{this.props.label} </span>
      </div>
    );
  }
}

export default injectSheet(styles)(Block);
