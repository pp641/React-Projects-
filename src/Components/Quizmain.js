import React, { useState } from 'react'
import Quizproblems1 from "./Quizproblemscpp"
import Quizproblems2 from "./Quizproblemsjs"
import Quizproblems3 from "./Quizproblemsjava"
import Quizproblems4 from "./Quizproblemspy"
import "./Quizmain.css"
function Quizmain() 
{
    var  x  = (<h1>Hello r</h1>)

    const [props,setProps] = useState(-1);
    if(props === 1 )
            { x  = <Quizproblems1/>
            }
         if(props === 2)
                {
                  x = <Quizproblems2/>
                }
        
            if(props === 3)
                {
                   x = <Quizproblems3/>
                }
            if(props === 4)
                {
                   x = <Quizproblems4/>
                }
            if(props === -1 )
             {
            x = <div>
                    <h1 id = "quiztitle">Welcome to the quiz</h1> 
                    <button className = "btn1 btn2 btn btn-outline-success" onClick = {() => setProps(1)}>C++</button>
                    <button className = "btn1 btn btn-outline-danger" onClick = {() => setProps(2)}>java</button>
                    <button className = "btn1 btn btn-outline-info" onClick = {() => setProps(3)}>javascript</button>
                    <button className = "btn1 btn btn-outline-primary" onClick = {() => setProps(4)}>Python</button>
                </div>
            } 
    return(
        <div>
        <div>{x}</div>
        <button className = "btn3 btn btn-outline-warning" onClick  = { ()=> setProps(-1)}>Reset</button>
        </div>
    )

}  

export default Quizmain
