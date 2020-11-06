import React , {useState} from 'react'
import "./Quizproblems.css"

function Quizproblems1() {
   const  questions  = [
       {
           question : "Q 1 - Which data type can be used to hold a wide character in C++?",
           answeroptions : [
                {option : "virtual void f()=0 { }",iscorrect : false},
                {option : "void virtual f()=0 { }",iscorrect : false},
                {option : "virtual void f(){} = 0",iscorrect : false},
                {option : "None of The Above",iscorrect : true}
           ]
       }
       ,
       {
        question : " Q 2 -  Compiler generates ___ file ",
        answeroptions : [
             {option : "Executable code",iscorrect : false},
             {option : "Object code",iscorrect : true},
             {option : "Assembly code",iscorrect : false},
             {option : "None of the Above ",iscorrect : false}
        ]
    }
    ,
    {
        question : " Q 3 - 'cin' is an__",
        answeroptions : [
             {option : "Class",iscorrect : false},
             {option : "Object",iscorrect : false},
             {option : "Package",iscorrect : true},
             {option : "Namespace",iscorrect : false}
        ]
    }
    ,
    {
        question : " Q 4 - Which data type is used to create a variable that should store text?",
        answeroptions : [
             {option : "String",iscorrect : false},
             {option : "Txt",iscorrect : true},
             {option : "string",iscorrect : false},
             {option : "myString",iscorrect : true}
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

export default Quizproblems1;
