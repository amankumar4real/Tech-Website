import React from 'react';

class Cart extends React.Component {
    
    constructor(props){
        super(props)
        this.state={
            data: this.props.cart_data
        }
    }

    handleChanges=(id)=>{
        var changeData=this.props.cart_data.filter(a=>{
            return a.id !== id
        })

        this.props.cart_remo(changeData)

    }

    render() {
        console.log(this.props)
        if(this.props.cart_data.length===0){
            return(
                <>
                    <h1 className="m-5 col text-center">Add Items to the cart!</h1>
                </>
            )
        }
        else{
            return (
            this.props.cart_data.map(a=>(
                <>
                    <div class="card m-5" style={{width: "20rem"}}>
                        <img src={a.image} class="card-img-top" alt={`cart_${a.id}`}/>
                        <div class="card-body">
                            <h2>{a.name}</h2>
                            <h4>Price: Rs. {a.price}</h4>
                            <button onClick={()=>this.handleChanges(a.id)} class="btn btn-danger">Remove</button>
                        </div>
                    </div>
                </>
            ))
        )}
        
    }
}
 
export default Cart;