import React from "react";
import injectSheet from "react-jss";
import styles from "./styles.json";
import MatrixInput from "./NoOfMatrixInput.js";
import Block from "./Block.js";
import Information from "./Information.js";

class Blocks extends React.Component {
  constructor(props) {
    super(props);
    this.handleCellClick = this.handleCellClick.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    const defaultNumOfBlocks = 3;
    this.state = {
      selectedValue: "",
      number: defaultNumOfBlocks,
      matrix: this.drawBlocks(defaultNumOfBlocks),
      won: null,
      previousLabel: "",
      noOfWins: 0,
      noOfLoss: 0
    };
  }

  drawBlocks(number) {
    let matrix = [];
    for (let i = 0; i < number; i++) {
      matrix[i] = [];
      for (let j = 0; j < number; j++) {
        matrix[i][j] = Math.floor(Math.random() * (number - 1 + 1)) + 1;
      }
    }
    return matrix;
  }

  handleCellClick(activeBlock) {
    activeBlock.state.color = "block";
    let previousSelectedComponent = this.state.selectedValue;
    let won = null;
    let noOfWins = this.state.noOfWins;
    let noOfLoss = this.state.noOfLoss;
    if (previousSelectedComponent !== "") {
      previousSelectedComponent.state.color = "none";
      if (activeBlock.props.label === this.state.selectedValue.props.label) {
        won = true;
        noOfWins++;
      } else {
        won = false;
        noOfLoss++;
      }
    }
    let message = "";
    if (this.state.selectedValue !== "") {
      message = `Previous selected cell is ${
        this.state.selectedValue.props.label
      }`;
    }
    if (this.state.selectedValue !== "") {
      message = `Previous selected cell is ${
        this.state.selectedValue.props.label
      }`;
    }
    this.setState({
      selectedValue: activeBlock,
      won: won,
      previousLabel: message,
      noOfLoss: noOfLoss,
      noOfWins: noOfWins
    });
  }

  handleNumberChange(prevValue, event) {
    let numberEntered = event.target.value;
    this.setState({ number: numberEntered });

    if (numberEntered !== "" && numberEntered >= 3) {
      this.setState({ matrix: this.drawBlocks(numberEntered) });
    }
  }
  render() {
    let blockitems = [];
    for (let i = 0; i < this.state.matrix.length; i++) {
      let blockCellItems = [];
      for (let j = 0; j < this.state.matrix[i].length; j++) {
        blockCellItems.push(
          <Block
            key={i.toString() + j.toString()}
            label={this.state.matrix[i][j]}
            onClickEvent={this.handleCellClick}
          />
        );
      }
      blockitems.push(
        <div key={i} className={this.props.classes.columns}>
          {blockCellItems}
        </div>
      );
    }
    let resultStatus = "";
    let styles = { color: "red" };
    if (this.state.won) {
      resultStatus = "Matched..! You Win :)";
      styles.color = "green";
    } else if (this.state.won !== null) {
      resultStatus = "You lost :( ";
      styles.color = "red";
    }

    return (
      <div>
        <MatrixInput
          value={this.state.number}
          onChange={this.handleNumberChange}
        />
        <div style={{ display: "flex" }}>{blockitems}</div>
        <Information value={this.state.previousLabel} />
        <h5 style={styles}> {resultStatus} </h5>
      </div>
    );
  }
}

export default injectSheet(styles)(Blocks);
