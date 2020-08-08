import React from 'react';
// import {AuthContext} from "../Context/AuthContextProvider"

class Login extends React.Component {
    constructor(props){
        super(props)

        this.state={
            username:"",
            password:""
        }
    }

    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit=(stats, his)=>{

                        this.props.logs(stats, his)
                    }

    render() { 
        // console.log(this.props)
        var {username, password}=this.state
        var {history}=this.props
        // return (
            // <AuthContext.Consumer> 
                // (value)=>{
        return(
                <div class="col-5 m-auto">
                    <h1 class="font-weight-bolder mb-5">LOGIN</h1>

                    <div class="mt-5">
                        <div class="form-group">
                            <label >Username:</label>
                            <input placeholder="Try aman as your email!" onChange={this.handleChange} name="username"  class="form-control" />
                            <small  value={this.state.username} >We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" placeholder="Try aman as your password!" onChange={this.handleChange} value={this.state.password}  name="password" class="form-control"/>
                        </div>
                        <button onClick= {()=>this.handleSubmit(this.state, history)} class="btn btn-success">Submit</button>
                    </div>

                </div>
                    )
                // }
                
            // </AuthContext.Consumer>
        //  );
    }
}
 
export default Login;