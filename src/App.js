import React, {createContext} from 'react';
import styles from './App.module.css';
import {Route, Link} from "react-router-dom";
import Home from "./component/Home.jsx"
import SmartPhones from "./component/SmartPhones.jsx"
import Tablets from "./component/Tablets.jsx"
import Laptops from "./component/Laptops.jsx"
import Headphones from "./component/Headphones.jsx"
import AllProducts from "./component/AllProducts.jsx"
import Detail from "./component/Detail.jsx"
import Cart from "./component/Cart.jsx"
import Login from "./component/Login.jsx"
import {my_data} from "./data"

class App extends React.Component {
  constructor(pop){
    super(pop)

    this.state={
      data:my_data,
      cart_data:[],
      auth:false
    }
  }

  addCart=(c_data)=>{
    this.setState({
      cart_data:[...this.state.cart_data, c_data]
    })
  }

  removeCart=(cart_rem)=>{
    this.setState({
      cart_data:cart_rem
    })
  }

  handleLogin=(data, history)=>{
    var user="aman"
    var pass="aman"

    if(user===data.username && pass===data.password){
        this.setState({
          auth: true
        })
        history.push("/")
    }
    else{
        alert("Check password again!")
    }
  }

  handleLogout=()=>{
    this.setState({
      auth:false,
      cart_data:[]
    })
    
  }



  render() {
    var {auth}=this.state
    if(!auth){
      return (
        // <AuthContextProvider>
          <div class="contaoner-fluid ">
            <div className="row mt-4 mx-2">
              <div className="col-12">
                <img className="img-fluid float-left" style={{maxWidth: "5rem"}} src="1539958-resolucion-original-pluspngcom-png-cool-cool-png-1000_1000_preview.png" alt="logo"/>
                <h2 className="card-title text-center font-weight-bold mt-3 text-secondary float-left ml-4">CtrlAltFix</h2>
              </div>
          </div>


            <div className="row  mb-1">
              <div className="col-12 text-right">
                <div>
                  <Link className="mx-2" to="/Login"><button className="btn btn-success">Login</button></Link>
                  <Link  to="/cart"><img className="ml-3 img-fluid" src="shopping-cart--v2.png" style={{maxWidth: "2rem"}} alt="cart_logo"/></Link>
                  <div className="mx-2 ">{this.state.cart_data.length}</div>
                </div>
              </div>
            </div>

            <div class="row mb-3 py-3" style={{background:"rgb(218, 234, 252)"}}>
              <div class="col-12 text-center">
                  <Link className="mx-2" to="/">Home</Link>
                  <Link className="mx-2" to="/smartPhones">Smart Phone</Link>
                  <Link className="mx-2" to="/laptops">Laptops</Link>
                  <Link className="mx-2" to="/tablets">Tablets</Link>
                  <Link className="mx-2" to="/headphones">Headphones</Link>
                  <Link className="mx-2" to="/allProducts">All Products</Link>
                </div>
            </div>
  
            <div class="row mb-5 mt-5">
                {/* <switch> */}
                  <Route path="/" exact component={Home}/>
                  <Route path="/smartPhones" render={(props)=><SmartPhones {...props} auth={this.state.auth} data={this.state.data} cartf={this.addCart}/>}/>
                  <Route path="/laptops" render={(props)=><Laptops {...props} auth={this.state.auth} data={this.state.data} cartf={this.addCart}/>}/>
                  <Route path="/tablets" render={(props)=><Tablets {...props} auth={this.state.auth} data={this.state.data} cartf={this.addCart}/>}/>
                  <Route path="/Login" render={(props)=><Login {...props} logs={this.handleLogin}/>}/>
                  <Route path="/headphones" render={(props)=><Headphones data={this.state.data} {...props} auth={this.state.auth} cartf={this.addCart}/>}/>
                  <Route path="/allProducts" render={(props)=><AllProducts {...props} auth={this.state.auth} data={this.state.data} cartf={this.addCart}/>}/>
                  <Route path="/cart" strict render={(props)=><Cart cart_data={this.state.cart_data} {...props} auth={this.state.auth} cart_remo={this.removeCart}/>}/>
                  <Route path="/:id/" strict render={(props)=><Detail data={this.state.data} {...props} auth={this.state.auth} cartf={this.addCart}/>}/>
                {/* </switch> */}
            </div>

            <div class="row">
              <div className={styles.footer}>
                <div class="mt-2 text-center">
                  <Link className="mx-2" to="/">Home</Link>
                  <Link className="mx-2" to="/">About Us</Link>
                  <Link className="mx-2" to="/">Contact</Link>
                </div>
                <div class="text-center mt-1">
                  <img src="174848.svg" className="img-fluid ml-3" style={{maxWidth: "2rem"}} alt="fb"/>
                  <img src="174855.svg" className="img-fluid ml-3" style={{maxWidth: "2rem"}} alt="insta"/>
                  <img src="174876.svg" className="img-fluid ml-3" style={{maxWidth: "2rem"}} alt="twitter"/>
                </div>
              <div class="footer-copyright text-center py-3 text-secondary">
                © 2020 Copyright:
              </div>
              </div>
            </div>
          </div>
        // </AuthContextProvider>
      )
    }
    else{
      return (
        // <AuthContextProvider>
         <div class="contaoner-fluid ">
            <div className="row mt-4 mx-2">
              <div className="col-12">
                <img className="img-fluid float-left" style={{maxWidth: "5rem"}} src="1539958-resolucion-original-pluspngcom-png-cool-cool-png-1000_1000_preview.png" alt="logo"/>
                <h2 className="card-title text-center font-weight-bold mt-3 text-secondary float-left ml-4">CtrlAltFix</h2>
              </div>
          </div>
            <div className="row  mb-1">
              <div className="col-12 text-right">
                <div>
                  <button onClick={this.handleLogout} className="btn btn-danger mx-2">Logout</button>
                  <Link  to="/cart"><img className="mx-2 img-fluid" src="shopping-cart--v2.png" style={{maxWidth: "2rem"}} alt="cart"/></Link>
                  <div className="mx-2 ">{this.state.cart_data.length}</div>
                </div>
              </div>
            </div>
            
            <div class="row mb-3 py-3" style={{background:"rgb(218, 234, 252)"}}>
              <div class="col-12 text-center">
                  <Link className="mx-2" to="/">Home</Link>
                  <Link className="mx-2" to="/smartPhones">Smart Phone</Link>
                  <Link className="mx-2" to="/laptops">Laptops</Link>
                  <Link className="mx-2" to="/tablets">Tablets</Link>
                  <Link className="mx-2" to="/headphones">Headphones</Link>
                  <Link className="mx-2" to="/allProducts">All Products</Link>
                </div>
            </div>
  
            <div class="row mt-5 mb-5">
                {/* <switch> */}
                  <Route path="/" exact component={Home}/>
                  <Route path="/smartPhones" render={(props)=><SmartPhones {...props} auth={this.state.auth} data={this.state.data} cartf={this.addCart}/>}/>
                  <Route path="/laptops" render={(props)=><Laptops {...props} auth={this.state.auth} data={this.state.data} cartf={this.addCart}/>}/>
                  <Route path="/tablets" render={(props)=><Tablets {...props} auth={this.state.auth} data={this.state.data} cartf={this.addCart}/>}/>
                  <Route path="/headphones" render={(props)=><Headphones data={this.state.data} {...props} auth={this.state.auth} cartf={this.addCart}/>}/>
                  <Route path="/allProducts" render={(props)=><AllProducts {...props} auth={this.state.auth} data={this.state.data} cartf={this.addCart}/>}/>
                  <Route path="/cart" strict render={(props)=><Cart cart_data={this.state.cart_data} {...props} auth={this.state.auth} cart_remo={this.removeCart}/>}/>
                  <Route path="/:id/" strict render={(props)=><Detail data={this.state.data} {...props} auth={this.state.auth} cartf={this.addCart}/>}/>
                {/* </switch> */}
            </div>

            <div class="row">
              <div className={styles.footer}>
                <div class="mt-2 text-center">
                  <Link className="mx-2" to="/">Home</Link>
                  <Link className="mx-2" to="/">About Us</Link>
                  <Link className="mx-2" to="/">Contact</Link>
                </div>
                <div class="text-center mt-1">
                  <img src="174848.svg" className="img-fluid ml-3" style={{maxWidth: "2rem"}} alt="fb"/>
                  <img src="174855.svg" className="img-fluid ml-3" style={{maxWidth: "2rem"}} alt="insta"/>
                  <img src="174876.svg" className="img-fluid ml-3" style={{maxWidth: "2rem"}} alt="twitter"/>
                </div>
              <div class="footer-copyright text-center py-3 text-secondary">
                © 2020 Copyright:
              </div>
              </div>
            </div>
          </div>
        // </AuthContextProvider>
      )
    }
    
  }
}
 
export default App;
