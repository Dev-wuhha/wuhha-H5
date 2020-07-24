var ran,score=1,str,grade=1;
function gradeJudge(){
    if(score==6)
    {
        score=1;
        grade++;
    }
    if(score==0){
        score=5;
        grade--;
    }
}
function rock(){
    document.getElementById("myChoice").innerHTML="<img src=\"images/rock.png\"/>";
    computerGuess();
    if(ran<1){
        str="可惜了,是平局!"+"<br/>目前得分:";
    }
    else if(ran<2){
        score++;
        str="Oh,My god,你赢了!"+"<br/>目前得分:";
    }
    else{
        score--;
        str="Oh,no,你输了!"+"<br/>目前得分:";
    }
    gradeJudge();
    document.getElementById("result").innerHTML=str+score+"<br>您的等级:"+grade;
}
function scissors(){
    document.getElementById("myChoice").innerHTML="<img src=\"images/scissors.png\"/>";
    computerGuess();
    if(ran<1){
        score--;
        str="Oh,no,你输了!"+"<br/>目前得分:";
    }
    else if(ran<2){
        str="可惜了,是平局!"+"<br/>目前得分:";
    }
    else{
        score++;
        str="Oh,My god,你赢了!"+"<br/>目前得分:";
    }
    gradeJudge();
    document.getElementById("result").innerHTML=str+score+"<br>您的等级:"+grade;
}
function paper(){
    document.getElementById("myChoice").innerHTML="<img src=\"images/paper.png\"/>";
    computerGuess();
    if(ran<1){
        score++;
        str="Oh,My god,你赢了!"+"<br/>目前得分:";
    }
    else if(ran<2){
        score--;
        str="Oh,no,你输了!"+"<br/>目前得分:";
    }
    else{
        str="可惜了,是平局!"+"<br/>目前得分:";
    }
    gradeJudge();
    document.getElementById("result").innerHTML=str+score+"<br>您的等级:"+grade;
}
function computerGuess(){
    ran=Math.random()*3;
    if(ran<1){
        document.getElementById("computerChoice").innerHTML="<img src=\"images/rock.png\"/>";
    }
    else if(ran<2){
        document.getElementById("computerChoice").innerHTML="<img src=\"images/scissors.png\"/>";
    }
    else{
        document.getElementById("computerChoice").innerHTML="<img src=\"images/paper.png\"/>";
    }
}