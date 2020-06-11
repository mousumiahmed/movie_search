import React from "react";
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Row,Col } from 'reactstrap';
import { declareExportAllDeclaration } from "@babel/types";



export default class Search extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			result:[]        
		}
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
	
	render(){
        //console.log(this.props.moviename)
       // console.log(this.props.lang)	
		console.log(this.state.result)	
	
		return(
			<React.Fragment>
                    {this.state.result.map((value,index)=>{
						
                        return (
                                <div class="card" >
                                <div class="card-body">
                                <img src={value.Poster} style={{height:"100"}}/>
                                  <h5 class="card-title">{value.Title}</h5>
                                </div>
                              </div>
                                )
                       }
                       
                    
                   
                    )
             }
					
				</React.Fragment>
			
		);
	}
}