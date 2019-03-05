import React, { Component } from 'react';
import AppComponent from './components/appComponent'
import './App.css';
import axios from 'axios'

class App extends Component {
	constructor() {
		super()
		this.state = {
			userInfo: null,
			repos: [],
			starred: [],
			isFetching: false
		}
	}

	handleSearch = (e) => {
		const keyCode = e.which || e.keyCode
		const Enter = 13
		if(keyCode === Enter){
			this.setState({ isFetching: true })
			axios.get(`http://api.github.com/users/${e.target.value}`)
				.then(({data}) => {
					this.setState({
						userInfo: {
							userName: data.name,
							login: data.login,
							photo: data.avatar_url,
							repos: data.public_repos,
							followers: data.followers,
							following: data.following,
							link: data.url
						}
					})
					this.setState({ isFetching: false })
				})
				.catch((error) => { 
					this.setState({ isFetching: false })
					console.log(error)
				})
		}
	}

	getRepos(type) {
		return (e) =>
			axios.get(`http://api.github.com/users/${this.state.userInfo.login}/${type}`)
				.then(({data}) => {
					this.setState({
						[type]: data.map(element => { return {name: element.name, link: element.html_url}})
					})
				})
	}

	render() {
		return (
			<AppComponent
				userInfo={this.state.userInfo}
				repos={this.state.repos}
				starred={this.state.starred}
				handleSearch={this.handleSearch}
				getRepos={this.getRepos('repos')}
				getStarred={this.getRepos('starred')}
				isFetching={this.state.isFetching}
			/>
		);
	}
}

export default App;
