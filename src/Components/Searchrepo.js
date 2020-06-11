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
			// response.data.Search.map((val,index)=>{
			// 	axios({
			// 		method: 'get',
	 		// 		url: `http://www.omdbapi.com/?i=${val.imdbID}&plot=full&apikey=2a1b2047`
			// 	})
			// 	.then((res)=>{
			// 		console.log(res.data)
			// 		this.setState({
			// 			detailresult:res.data
					   
			// 		});	
					
			// 	}).catch((err) => alert(err))
	 		// })
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
				// response.data.Search.map((val,index)=>{
			// 	axios({
			// 		method: 'get',
	 		// 		url: `http://www.omdbapi.com/?i=${val.imdbID}&plot=full&apikey=2a1b2047`
			// 	})
			// 	.then((res)=>{
			// 		console.log(res.data)
			// 		this.setState({
			// 			detailresult:res.data
					   
			// 		});	
					
			// 	}).catch((err) => alert(err))
	 		// })
				
					this.setState({
						result: response.data.Search
					});	
				
			})
			.catch((err) => alert(err))
		}
	}
	
	
	
	
	render(){
        //console.log(this.props.moviename)
       // console.log(this.props.lang)	
		//console.log(this.state.result)	
		//console.log(this.state.detailresult.Plot)
	
		return(
			<React.Fragment>
 				
		
				
 					<Row>
 					{this.state.result.map((value,index)=>{
						
							 return (<Card className="bg-secondary col-md-3 m-3"key={index}>
								 {/* <p><img src={value.owner.avatar_url} style={{height:100,width:100}}/></p> */}
								    <h4> {value.Title}</h4>
									<p>Release Year :{value.Year}</p>

									<Button style={{marginLeft:"100px"}}color="primary" onClick={this.handleClickOpen}>
					Moreinfo
				</Button>
					<Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
					<DialogTitle id="form-dialog-title">Movie Details</DialogTitle>
						<DialogContent>
						<img src={value.Poster}/>
						<h4> {value.Title}</h4>
						<p>Release Year :{value.Year}</p>
						<p>{value.imdbID}</p>
						
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