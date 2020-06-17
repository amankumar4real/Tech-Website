import React from 'react';
import {Link} from "react-router-dom";

export default class Home extends React.Component{
    constructor(props){
        super(props)

        this.state={

        }
    }

    render(){
        return(
            <>
            <div class="col-12 mt-1 mb-2">
                <Link to="/:h01/"><img src="Screenshot from 2020-04-17 bi-48-26.png" class="img-fluid" alt="airpod"/></Link>
            </div>

            <div class="offset-1 col-5 mt-4">
            <Link to="/:l02/"><img src="Screenshot from 2020-04-17 16-07-12.png" alt="add13" class="img-fluid"/></Link>
            </div>

            <div class="col-5 mt-4">
            <Link to="/:s01/"><img src="Screenshot from ip-04-17 19-45-39.png" alt="add3" class="img-fluid"/></Link>
            </div>

            <div class="col-12 mt-1 mb-3">
                <Link to="/:l02/"><img src="Screenshot from 2020-ububub04-17 20-09-10.png" class="img-fluid" alt="hj"/></Link>
            </div>

            <div class=" offset-1 col-4 mt-1 mb-3">
                <Link to="/:s03/"><img src="Screenshot from 2020-04-17opp 20-16-49.png" class="img-fluid" alt="airipod"/></Link>
            </div>

            <div class="col-5 mt-1 mb-2">
                <Link to="/:t01/"><img src="Free-New-Full-Screen-iPad-Pro-2018-Mockup-PSD.jpg" class="img-fluid" alt="ihi"/></Link>
            </div>
                
            </>
        )
    }
}