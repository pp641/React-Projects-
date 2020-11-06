import React , {useState} from 'react'
import "./Quizproblems.css"

function Quizproblems3() {
   const  questions  = [
       {
           
           question : "java.util.Collections is a:",
           answeroptions : [
                {option : "Class",iscorrect : true},
                {option : "Interface",iscorrect : false},
                {option : "Object",iscorrect : false},
                {option : "None of the Above",iscorrect : false}
           ]
       }
       ,
       {
        question : " Methods such as reverse, shuffle are offered in:",
        answeroptions : [
             {option : "Object",iscorrect : false},
             {option : "Collection",iscorrect : false},
             {option : "Collections",iscorrect : true},
             {option : "Apache Commons Collections",iscorrect : false}
        ]
    }
    ,
    {
        question : " Which of those allows duplicate elements?",
        answeroptions : [
             {option : "Set",iscorrect : false},
             {option : "List",iscorrect : true},
             {option : "All",iscorrect : false},
             {option : "None of the Above",iscorrect : false}
        ]
    }
    ,
    {
        question : "Which interface should be implemented for sorting on basis of many criteria’s?",
        answeroptions : [
             {option : "Comparator",iscorrect : false},
             {option : "Comparable",iscorrect : true},
             {option : "Serializable",iscorrect : false},
             {option : "None of the Above",iscorrect : true}
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

export default Quizproblems3;
