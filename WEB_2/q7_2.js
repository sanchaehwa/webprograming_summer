
function clac() 
{
    let total=0; 
    let questionArray=document.getElementsByClassName("question"); 
    let answerArray=document.getElementsByClassName("answer");

    for(i=0; i<questionArray.length; i++)
    {
        let question = questionArray[i].innerHTML;
        let correctanswer = eval(question);
        let useranswer = answerArray[i].value;

       
        console.log("parseInt(useranswer) : " + parseInt(useranswer));
        console.log("correctanswer: " + correctanswer);
        

        if(useranswer=="" || isNaN(useranswer)) 
        {
            total += 0;
            questionArray[i].style.textDecoration = "line-through";
        }
        else if(parseInt(useranswer)==correctanswer) 
        {
            total += 10;
            questionArray[i].style.textDecoration = "none";
        }
        else 
        {
            total += 0;
            questionArray[i].style.textDecoration = "line-through";
        }   
    }
    document.getElementById("score").innerHTML=total;
    if(total == 40)  document.getElementById("score").innerHTML=total +"점: 합격하셨습니다 : )";
}