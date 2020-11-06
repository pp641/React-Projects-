import React , {useState} from 'react'
import "./Quizproblems.css"

function Quizproblems2() {
   const  questions  = [
       {
           question : " What is the HTML tag under which one can write the JavaScript code?",
           answeroptions : [
                {option : "<javascript>",iscorrect : false},
                {option : "<scripted>",iscorrect : false},
                {option : "<js>",iscorrect : false},
                {option : "<script>",iscorrect : true}
           ]
       }
       ,
       {
        question : "Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?",
        answeroptions : [
             {option : "alertbox(“GeeksforGeeks”)",iscorrect : true},
             {option : "msg(“GeeksforGeeks”)",iscorrect : false},
             {option : "msgbox(“GeeksforGeeks”)",iscorrect : false},
             {option : "alert(“GeeksforGeeks”)",iscorrect : false}
        ]
    }
    ,
    {
        question : "Which of the following is not a reserved word in JavaScript?",
        answeroptions : [
             {option : "interface",iscorrect : false},
             {option : "throws",iscorrect : false},
             {option : "program",iscorrect : true},
             {option : "short",iscorrect : false}
        ]
    }
    ,
    {
        question : "In JavaScript, we do not have datatypes like integer and float. What is the function that can be used to check if the number is an integer or not?",
        answeroptions : [
             {option : "Integer(value)",iscorrect : false},
             {option : "ifInteger(value)",iscorrect : true},
             {option : "isInteger(value)",iscorrect : false},
             {option : "ifinteger(value)",iscorrect : true}
        ]
    }
   ]
   const [current,setCurrent] = useState(0);
   const [showans,setShowans] = useState(false);
   const [score,setScore] = useState(0);
   function handleClick(iscorrect)
   {
       if(iscorrect)
        {
            setScore(score+1);
        }
        const nextques = current+1;
                if(nextques < questions.length)
                        {
                            setCurrent(nextques);
                        }
                else
                        {
                            setShowans(true);
                        }
            
   }
    return( <div>
    {  showans ? (
                <div className = "result" >
                    you have scored {score} out of {questions.length}
                </div>

            )
            :
           <div>

                <div className = "question">
                    {questions[current].question}
                </div>
                <div>
                    {
                        questions[current].answeroptions.map((option) =>(
                        <button className = "answer btn btn-outline-success" onClick = {() => handleClick(option.iscorrect)}>{option.option}</button>
                                )
                            )
                    }
                    </div>
           </div>

           
    }
        </div>
    )
}

export default Quizproblems2;
