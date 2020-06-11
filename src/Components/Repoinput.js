import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Jumbotron } from 'reactstrap';


export default class Repoinput extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			moviename : "",
			year : ""
		}
	}

	handleInput = event => this.setState({[event.target.name] : event.target.value})

	render(){
		//console.log(this.state.moviename)
		return (
			<React.Fragment>
				<input type = "text" placeholder ="Enter Movie Name"onChange = {this.handleInput} name = "moviename" value = {this.state.moviename}/>
				<input type = "text" placeholder = "Enter release Year" onChange = {this.handleInput} name = "year" value = {this.state.year}/>
				<button 
					onClick = {() => this.props.handleSearch(this.state.moviename, this.state.year)}> 
					Search 
				</button> 
			</React.Fragment>
		);
	}
}