import React, { Component } from 'react';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';
import VideoDetail from './video_detail';

const API_KEY = 'AIzaSyD6MZAoOr4GRRuDs71a7MEcOwgRkKmIw5w';

export default class App extends Component {
	constructor(props){
		super(props);

		this.state={
			videos: [],
			selectedVideo: null
		};
	}
	componentDidMount(){
		YTSearch({key: API_KEY, term: 'limbodawg'}, (videos)=>{
			this.setState({ videos: videos, selectedVideo: videos[0] });
		});
	}
  render() {
    return (
      <div>
      	<SearchBar/>
      	<VideoDetail video={this.state.selectedVideo}/>
      	<VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
      </div>
    );
  }
}
