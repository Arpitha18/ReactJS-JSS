import injectSheet from "react-jss";
import styles from "./styles.json";
import React from "react";

class NoOfMatrixInput extends React.Component {
    render(props) {
      return (
        <div className={this.props.classes.messageHelp}>
          <span>Enter matrix size:</span>
          <input
            type="textarea"
            style={{ width: "40px" }}
            value={this.props.value}
            onChange={this.props.onChange.bind(null, this.state)}
          />
        </div>
      );
    }
  }
  
export default injectSheet(styles)(NoOfMatrixInput);