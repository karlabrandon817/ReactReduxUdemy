import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBpYco08kEyRC4XDU0N4mHC_L1KY6UB0FU'

// Create a new component. This component should produce some HTML.
const App = () => {
  return(
    <div>
      <SearchBar />
    </div> //JSX
 );
};
// Take this component's generated HTML and put it in the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));
