var grade;
function test(score) {
    var score2 = parseInt(score);
    if (isNaN(score2) || score2 < 0 || score2 >= 98) {
        alert("잘못입력하셨습니다. ");
        return;
    }
    if(score2 >= 93 && score2 <= 97)
        grade = "A";
    else if(score2 >= 83 && score2 <= 87)
        grade = "B";
    else if(score2 >= 73 && score2 <= 77)
        grade = "C";
    else if(score2 >= 63 && score2 <= 67)
        grade = "D";
    else 
        grade = "F";
    var titleElement = document.createElement("span");
    titleElement.innerHTML = "황기태 성적표";
    titleElement.className = "title-element";
    document.body.appendChild(titleElement);
    var hrElement = document.createElement("hr");
    hrElement.classList.add("horizontal-line");
    document.body.appendChild(hrElement);
    var gradeElement = document.createElement("span");
    gradeElement.innerHTML = score + "는 " + grade + "입니다.";
    gradeElement.className = "grade-element";
    document.body.appendChild(gradeElement);

}
var score = prompt("황기태 님 점수를 입력하세요", "");
test(score)
