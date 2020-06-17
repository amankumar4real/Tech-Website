import React from "react";

var Detail=(props)=>{

    var match_id=props.match.params.id.split("")
    match_id.shift()
    match_id=match_id.join("")
    var use_data=props.data

    var dat={}

    for(var i=0; i<use_data.length; i++){
        if(use_data[i].id===match_id){
            dat=use_data[i]
            break
        }
    }

    let handleCart=()=>{
        if(!props.auth){
            return props.history.push("/Login")
            //redirect
        }
        // console.log(props.auth)
        props.cartf(dat)
        props.history.push("/cart")
        
    }

    return (
            <>
                <div class="text-center col-10 offset-2  m-5" >
                        <div class="row">
                            <div class="offset-2 col-10">
                            <img src={dat.image} className="img-fluid" style={{maxWidth: "10rem"}} alt={dat.id}/>
                            </div>
                            <div class="offset-2 col-10 mt-2">
                                <h1 class="mb-4 font-weight-bolder">{dat.name}</h1>
                                <h4 class="font-weight-bold">Price: Rs. {dat.price}</h4>
                                <h6 class="mb-3">Catagory: {dat.cat}</h6>
                                <p>{dat.desc}</p>
                            </div>
                            <div class="offset-2 col-10 mt-5">
                                <button onClick={handleCart} class="btn btn-primary">ADD TO CART</button>
                            </div>
                    </div>
                     
                </div>
                
            </>
    )
}
 
export default Detail