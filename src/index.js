import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyBpYco08kEyRC4XDU0N4mHC_L1KY6UB0FU'

// Create a new component. This component should produce some HTML.
const App = () => {
  return <div> Hi! </div>; //JSX
}
// Take this component's generated HTML and put it in the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));
