import React, { Component } from 'react';
import _ from 'lodash';
import searchYouTube from 'youtube-api-v3-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };
    this.videoSearch('');
  }

  videoSearch(term) {
    const options = {
      q: term, 
      part: "snippet", 
      type: "video", 
      maxResults: 5
    };
    
    searchYouTube(process.env.REACT_APP_GOOGLE_API_KEY, options)
      .then(response => {
        this.setState({
          videos: response.items,
          selectedVideo: response.items[0]
        });
      });
  }

  render() {
    // comment 3
    const videoSearch = _.debounce(term => this.videoSearch(term), 300);
    return (
      <div>
        <SearchBar onSearchTermChange={ videoSearch } />
        <div className="row">
          <VideoDetail video={ this.state.selectedVideo } />
          <VideoList
            videos={ this.state.videos }
            onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
          />
        </div>
      </div>
    );
  }
}
