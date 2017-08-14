import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBpYco08kEyRC4XDU0N4mHC_L1KY6UB0FU'

// Create a new component. This component should produce some HTML.
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({ videos });
      //equivalent to this.setState({ videos: videos });
    });
  }
  render(){
    return(
      <div>
        <SearchBar />
      </div> //JSX
   );
  }
}

// Take this component's generated HTML and put it in the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));
