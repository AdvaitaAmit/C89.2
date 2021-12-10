var score=0

function updatescore(){
score=score+1
document.getElementById("score").innerHTML="score:"+score

}

function savescore(){
    localStorage.setItem("scorekey",score)
}
    
function newpage(){
    window.location="activity_2.html"
}