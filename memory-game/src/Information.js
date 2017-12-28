import injectSheet from "react-jss";
import styles from "./styles.json";
import React from "react";

class Information extends React.Component {
  render(props) {
    return <div className={this.props.classes.messageHelp}>{this.props.value}</div>;
  }
}

export default injectSheet(styles)(Information);