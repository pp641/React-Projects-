import React , {useState} from 'react'
import "./Quizproblems.css"

function Quizproblems4() {
   const  questions  = [
       {
           question : "This is question 1 4",
           answeroptions : [
                {option : "option1",iscorrect : false},
                {option : "option2",iscorrect : false},
                {option : "option3",iscorrect : false},
                {option : "option4",iscorrect : true}
           ]
       }
       ,
       {
        question : "This is question 2",
        answeroptions : [
             {option : "option1",iscorrect : true},
             {option : "option2",iscorrect : false},
             {option : "option3",iscorrect : false},
             {option : "option4",iscorrect : false}
        ]
    }
    ,
    {
        question : "This is question 3",
        answeroptions : [
             {option : "option1",iscorrect : false},
             {option : "option2",iscorrect : false},
             {option : "option3",iscorrect : true},
             {option : "option4",iscorrect : false}
        ]
    }
    ,
    {
        question : "This is question 4",
        answeroptions : [
             {option : "option1",iscorrect : false},
             {option : "option2",iscorrect : true},
             {option : "option3",iscorrect : false},
             {option : "option4",iscorrect : true}
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

export default Quizproblems4;
