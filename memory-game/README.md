## Memory Game.
Simple memory game , where the user win/loss if he matches previously selected block with the same number in the
next click. Complexity of this game can be increased by increasing the matrix size of the blocks.

## Create React App.
  Created the app from create-react-app command.
  This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Modularized Components to build the game.
  App has been split into different components like
  1. Block.js : This represents each blocks in the layout and handles different event on click.
  2. NoOfMatrixInput.js : This takes the number as the input and is used to draw the matrix.
  3. Information.js : This is just a text message , which takes text as a prop.
  4. Blocks.js : This wraps everything and interacts across different component.

## Styling using JSS
  Used React-Jss to apply styling on the component.
  Styles are present in styles.json file , which is then used in different styles.
  