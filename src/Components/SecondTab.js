import React from "react";
import Search from "./Search.js";
import Repoinput from "./Repoinput.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Jumbotron,Container } from 'reactstrap';

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
                <Jumbotron className="text-center">
                  <h2>Search by moviename and release year</h2>  
                  <hr></hr>
                  <Container>
                  <Repoinput handleSearch = {this.handleSearch} className="mt-5"/>

                  </Container>
                  <Container>
                  {this.state.moviename !== null ? (<Search moviename = {this.state.moviename} year={this.state.year}/>) : null} 

                  </Container>
                </Jumbotron>

				
				  
			</React.Fragment>
		);
	}
}