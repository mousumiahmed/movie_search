import React from "react";
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Row,Col } from 'reactstrap';
import { declareExportAllDeclaration } from "@babel/types";
import Button from '@material-ui/core/Button';
import {Dialog,DialogActions,DialogContent,DialogTitle} from '@material-ui/core';





export default class Display extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			result:[] ,
			detailresult:[],
			open:false    
		}
	}
	handleClickOpen=()=>{
	
		this.setState({
			open:true
		})
	}
	handleClose=()=>{
		this.setState({
			open:false
		})
	}

	componentDidMount(){
		axios({
			method: 'get',
			url: `http://www.omdbapi.com/?apikey=2a1b2047&s=${this.props.moviename}&y=${this.props.year}`	
        })
        
		.then((response) =>{
			console.log(response)
           this.setState({
				result:response.data.Search
               
            });	
            console.log(response);          
        })
        
		.catch((err) => alert(err))
	}

	componentDidUpdate(prevProps){
		console.log(prevProps)
		if(this.props.moviename !== prevProps.moviename ||this.props.year !== prevProps.year){
			//console.log(this.props.moviename)
			axios({
				method: 'get',
	    		url: `http://www.omdbapi.com/?apikey=2a1b2047&s=${this.props.moviename}&y=${this.props.year}`
			})
			.then((response) =>{
				console.log(response)
					this.setState({
						result: response.data.Search
					});	
				
			})
			.catch((err) => alert(err))
		}
	}


	details =(e)=>{
		console.log(e.target.id)
		axios({
			 		method: 'get',
	 		 		url: `http://www.omdbapi.com/?i=${e.target.id}&plot=full&apikey=2a1b2047`
			 	})
			 	.then((res)=>{
					console.log(res.data)
					this.setState({
						detailresult:res.data
					   
					});	
					
				}).catch((err) => alert(err))
	}
	
	
	
	
	
	render(){
        //console.log(this.props.moviename)
       // console.log(this.props.lang)	
		//console.log(this.state.result)	
		console.log(this.state.detailresult.imdbID)
			
		return(
			<React.Fragment>
 					<Row>
 					{this.state.result.map((value,index)=>{
						
							 return (<Card className="bg-secondary col-md-3 m-4" key={index}>
								 {/* <p><img src={value.owner.avatar_url} style={{height:100,width:100}}/></p> */}
								    <h4> {value.Title}</h4>
									<p>Release Year :{value.Year}</p>
									
									

								<Button id ={value.imdbID}style={{marginLeft:"100px"}}color="primary" onClick={this.handleClickOpen}>
										<button type="button" onClick = {this.details} id={value.imdbID}>moreinfo</button>	
								</Button>

									<Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
									<DialogTitle id="form-dialog-title">Movie Details</DialogTitle>
										<DialogContent>
										<h4>imdbID : {this.state.detailresult.imdbID}</h4>
										{(this.state.detailresult.imdbRating>7)? (
										<p style={{color:"green"}}>HIT</p>
											) : (
										<p style={{color:"red"}}>FLOP</p>
										)}
										<img src={this.state.detailresult.Poster} alt="Sorry image not available"/> 
										<p>Title:{this.state.detailresult.Title}</p>
										<p>Actor:{this.state.detailresult.Actors}</p>
										<p>Director: {this.state.detailresult.Director}</p>
										<p>Plot:{this.state.detailresult.Plot}</p>
										<p>Release Date:{this.state.detailresult.Released}</p>
										<p>Writer:{this.state.detailresult.Writer}</p>
										</DialogContent>
										
										<DialogActions>
											<Button className="btn" onClick={this.handleClose} color="primary">
											Close
											</Button>
										</DialogActions>
									</Dialog>
							</Card>
							 		)
							}						
 						)
 				 }
				
				 </Row>					
				</React.Fragment>
			
		);
	}
}