import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state = {
			searchterm: ''
		}
	}

	render(){
		return(
			<div>
				<input 
					value={this.state.searchterm}
					onChange={e => this.setState({ searchterm: e.target.value })} />
			</div>
		);
	};
};

export default SearchBar;