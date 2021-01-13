let btn_submit = document.getElementById("btn-submit");
let outputText = document.querySelector(".output");

let outputText1 = document.querySelector(".output1");
let selectYes1 = document.querySelector(".yes1");
let selectNo1 = document.querySelector(".no1");

let outputText2 = document.querySelector(".output2");
let selectYes2 = document.querySelector(".yes2");
let selectNo2 = document.querySelector(".no2");

let outputText3 = document.querySelector(".output3");
let selectYes3 = document.querySelector(".yes3");
let selectNo3 = document.querySelector(".no3");

let option1 = document.querySelector(".op1");
let option2 = document.querySelector(".op2");
let option3 = document.querySelector(".op3");
let option4 = document.querySelector(".op4");
let outputText4 = document.querySelector(".output4");

let selectYes5 = document.querySelector(".yes5");
let selectNo5 = document.querySelector(".no5");
let outputText5 = document.querySelector(".output5");

let selectYes6 = document.querySelector(".yes6");
let selectNo6 = document.querySelector(".no6");
let outputText6 = document.querySelector(".output6");

let btn_submit1 = document.getElementById("btn-submit1");
let outputText7 = document.querySelector(".output7");

let btn_submit2 = document.getElementById("btn-submit2");
let outputText8 = document.querySelector(".output8");

function onSubmit(e,angle1,angle2,angle3){
e.preventDefault();
angle1 = document.getElementById("angle_one").value;
angle2 = document.getElementById("angle_two").value;
angle3 = document.getElementById("angle_three").value;
let sum = Number(angle1)+Number(angle2)+Number(angle3);
if(sum === 180){
    outputText.innerText = "You are right!! These angles would make a traingle";
}
else{
    outputText.innerText = "You are wrong!! These angles wouldn't make a traingle";
}
}

function onSelectYes1(){
    outputText1.innerText = "You are right!!"
}
function onSelectNo1(){
    outputText1.innerText = "You are wrong!!"
}

function onSelectYes2(){
    outputText2.innerText = "You are right!!"
}
function onSelectNo2(){
    outputText2.innerText = "You are wrong!!"
}


function onSelectYes3(){
    outputText3.innerText = "You are wrong!!"
}
function onSelectNo3(){
    outputText3.innerText = "You are right!!"
}

function onSelectOp1(){
    outputText4.innerText = "You are wrong!!"
}
function onSelectOp2(){
    outputText4.innerText = "You are right!!"
}
function onSelectOp3(){
    outputText4.innerText = "You are wrong!!"
}
function onSelectOp4(){
    outputText4.innerText = "You are wrong!!"
}

function onSelectYes5(){
    outputText5.innerText = "You are right!!"
}
function onSelectNo5(){
    outputText5.innerText = "You are wrong!!"
}

function onSelectYes6(){
    outputText6.innerText = "You are wrong!!"
}
function onSelectNo6(){
    outputText6.innerText = "You are right!!"
}

function onSubmit1(e,side1,side2){
    e.preventDefault();
    side1 = document.getElementById("side_one").value;
    side2 = document.getElementById("side_two").value;
    let sum = (Number(side1)*Number(side1))+(Number(side2)*Number(side2));
    let hyp = Math.sqrt(sum);
    outputText7.innerText = "Length of the hypotenuse is: " + hyp;
}

function onSubmit2(e,baseLength,heightLength){
    e.preventDefault();
    baseLength = document.getElementById("base").value;
    heightLength = document.getElementById("height").value;
    let area = 0.5*(Number(baseLength)*Number(heightLength));
    outputText8.innerText = "Area of the triangle is: " + area;
}

btn_submit.addEventListener('click', onSubmit);

selectYes1.addEventListener('click', onSelectYes1);
selectNo1.addEventListener('click', onSelectNo1);

selectYes2.addEventListener('click', onSelectYes2);
selectNo2.addEventListener('click', onSelectNo2);

selectYes3.addEventListener('click', onSelectYes3);
selectNo3.addEventListener('click', onSelectNo3);

option1.addEventListener('click', onSelectOp1);
option2.addEventListener('click', onSelectOp2);
option3.addEventListener('click', onSelectOp3);
option4.addEventListener('click', onSelectOp4);

selectYes5.addEventListener('click', onSelectYes5);
selectNo5.addEventListener('click', onSelectNo5);

selectYes6.addEventListener('click', onSelectYes6);
selectNo6.addEventListener('click', onSelectNo6);

btn_submit1.addEventListener('click', onSubmit1);

btn_submit2.addEventListener('click', onSubmit2);