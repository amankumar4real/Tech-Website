import React from 'react';
import {Link} from "react-router-dom";

export default class AllProducts extends React.Component{
    constructor(props){
        super(props)

        this.state={

        }
    }

    handleCart=(dat)=>{
        if(!this.props.auth){
            return this.props.history.push("/Login")
        }
        // console.log(this.props.auth)
        this.props.cartf(dat)
        // this.props.history.push("/cart")
        
    }

    render(){
      
        return(
                this.props.data.map(a=>(
                    <>
                        <div class="col-11 card m-5 mx-auto" style={{maxWidth: "540px"}}>
                            <div class="row no-gutters">
                                <div class="col-md-4 m-auto">
                                <img src={a.image} class="card-img" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                <div class="card-body">
                                    <Link to={`/:${a.id}/`}><h3 class="card-title">{a.name}</h3></Link>
                                    <h5>Price: Rs {a.price}</h5>
                                    <h5>Catogery: {a.cat}</h5>
                                    <button onClick={()=>this.handleCart(a)} class="btn btn-primary">ADD TO CART</button>
                                </div>
                                </div>
                            </div>
                        </div>
                        
                    </>
                ))
            )
    }
        
}