import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state = {
			searchterm: ''
		};
	}

	onInputChange = (term)=>{
		this.setState({searchterm: term});
		this.props.onSearchTermChange(term);
	};
	
	render(){
		return(
			<div>
				<input 
					value={this.state.searchterm}
					onChange={e => this.onInputChange(e.target.value)} />
			</div>
		);
	};
};

export default SearchBar;