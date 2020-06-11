import React from "react";
import Search from "./Search.js";
import Repoinput from "./Repoinput.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Jumbotron,Container } from 'reactstrap';
import {Paper,Tabs,Tab,Typography,Box} from '@material-ui/core';
import { white } from "color-name";

export default class FirstTab extends React.Component{
	constructor(props){
		super(props);
		this.state = {
            moviename : null,
            year : null
		}
	}

	handleSearch = (moviename,year) => this.setState({
        moviename : moviename,
        year:year
	});
	render(){
		return(
			<React.Fragment>
                <Box className="text-center">
                  <h2 style={{color:"white"}}>Search Movie Poster</h2>  
                  <hr></hr>
                 
                  <Repoinput handleSearch = {this.handleSearch} className="mt-5"/>

                  {this.state.moviename !== null ? (<Search moviename = {this.state.moviename} year={this.state.year}/>) : null}       
                </Box>				  
			</React.Fragment>
		);
	}
}