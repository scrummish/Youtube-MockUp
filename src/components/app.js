import React, { Component } from 'react';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import _ from 'lodash';

const API_KEY = 'AIzaSyD6MZAoOr4GRRuDs71a7MEcOwgRkKmIw5w';

export default class App extends Component {
	constructor(props){
		super(props);

		this.state={
			videos: [],
			selectedVideo: null
		};
	}
	videoSearch(term){
		YTSearch({key: API_KEY, term: term}, (videos)=>{
			this.setState({ videos: videos, selectedVideo: videos[0] });
		});
	}
	componentDidMount(){
		this.videoSearch('limbodawg');
	}

  render() {
  	const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 300)
    return (
      <div>
      	<SearchBar onSearchTermChange={videoSearch}/>
      	<VideoDetail video={this.state.selectedVideo}/>
      	<VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
      </div>
    );
  }
}
