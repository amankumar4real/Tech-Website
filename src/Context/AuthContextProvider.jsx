import React, {createContext} from "react";

export let AuthContext = createContext()

class AuthContextProvider extends React.Component{
    constructor(props){
        super(props)

        this.state={
            auth:false
        }
    }
    handleLogin=(his)=>{
        this.setState({
          auth:true
        })

        // console.log("hi")
    
        his.push("/")
        // console.log(this.state.auth)
      }
    
      handleLogout=()=>{
        this.setState({
          auth:false,
          cart_data:[]
        })
      }

    render(){
        return(
        <AuthContext.Provider value={{...this.state, login:this.handleLogin}}>
            {this.props.children}
        </AuthContext.Provider>
        )
    }
}

export default AuthContextProvider