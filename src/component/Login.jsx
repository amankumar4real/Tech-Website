import React from 'react';
import {AuthContext} from "../Context/AuthContextProvider"

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

    

    render() { 
        // console.log(this.props)
        return (
            <AuthContext.Consumer> 
                {(value)=>{

                    var {username, password}=this.state
                    var {history}=this.props

                   function handleSubmit(e){
                        e.preventDefault()
                        var user="aman"
                        var pass="aman"
                
                        if(user===username && pass===password){
                            value.login(history)
                        }
                        else{
                            alert("Check password again!")
                        }
                    }

                    return(
                <div class="col-5 m-auto">
                    <h1 class="font-weight-bolder mb-5">LOGIN</h1>

                    <form class="mt-5" onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Username:</label>
                            <input onChange={this.handleChange} name="username"  class="form-control" aria-describedby="emailHelp"/>
                            <small id="emailHelp" value={this.state.username} class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input onChange={this.handleChange} value={this.state.password}  name="password" class="form-control"/>
                        </div>
                        <button  class="btn btn-success">Submit</button>
                    </form>

                </div>
                    )
                }}
                
            </AuthContext.Consumer>
         );
    }
}
 
export default Login;