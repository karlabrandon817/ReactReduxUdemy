import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBpYco08kEyRC4XDU0N4mHC_L1KY6UB0FU'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render(){
    return(
      <div className="main-container">
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo  => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
   );
  }
}

// Take this component's generated HTML and put it in the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));
