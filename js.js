import mbtidata from "./data.js"

let typeL = document.querySelectorAll(".typeL");
let typeR = document.querySelectorAll(".typeR");

// 결과물 배열
let mbtiObjectL = [
    [],
    [],
    [],
    []
];

let mbtiObjectR = [
    [],
    [],
    [],
    []
];

let LResult = document.querySelector("#leftResult");
let RResult = document.querySelector("#rightResult");

for(let i=0; i<typeL.length; i++){
    typeL[i].addEventListener("click", clickTypeL);
}

function clickTypeL(e){
    
    // tag 에 id 값 내부에 존재하는 숫자 뽑기 1-I = 1 - 1 = 0
    const lineNumber = e.target.id.split("-")[0] - 1;

    if (mbtiObjectL[lineNumber].length == 0) {
        mbtiObjectL[lineNumber].push(e.target.textContent);
        e.target.classList.add("active-td");
        
    }
    else if
    (mbtiObjectL[lineNumber].includes(e.target.textContent)) {
        mbtiObjectL[lineNumber].pop();
        e.target.classList.remove("active-td");
    }
    
    LResult.textContent = mbtiObjectL.join("")
}


for(let j=0; j<typeR.length; j++){
    typeR[j].addEventListener("click", clickTypeR);
}

function clickTypeR(e){
    
    const lineNumber = e.target.id.split("-")[0] - 1;

    if (mbtiObjectR[lineNumber].length == 0) {
        mbtiObjectR[lineNumber].push(e.target.textContent);
        e.target.classList.add("active-td");
        
    }
    else if
    (mbtiObjectR[lineNumber].includes(e.target.textContent)) {
        mbtiObjectR[lineNumber].pop();
        e.target.classList.remove("active-td");
    }
    
    RResult.textContent = mbtiObjectR.join("")
}

let select = document.querySelector("#selectBtn");

let result

let imgfile = document.querySelector("#imgfile");

let title = document.querySelector("#title")

let memo = document.querySelector("#memo")

select.addEventListener("click",selectFunction);

function selectFunction(){
    
    const A = LResult.textContent;
    const B = RResult.textContent;
    
    if(A.length!=4 || B.length!=4){
        result = "올바른 MBTI가 아닙니다";
    }else{
        imgfile.removeAttribute("hidden");
        result = mbtidata[A][B];

        if(result=="VERY_BAD"){
            imgfile.src = "./img/heart5.png";
            title.innerHTML = "맞지않는 관계입니다";
            memo.innerHTML="두사람 모두가 무조건 양보해야하고 서로에 대한 공감이 필요한 관계입니다."
        }
        else if(result=="BAD"){
            imgfile.src = "./img/heart4.png";
            title.innerHTML = "갈등 관계입니다";
            memo.innerHTML="서로간에 타협하고 성숙해져야만 하는 관계입니다."
        }
        else if(result=="SOSO"){
            imgfile.src = "./img/heart3.png";
            title.innerHTML = "잠재적 관계입니다";
            memo.innerHTML="끈끈한 관계의 유지를 위해서는 서로의 가치에 변화를 두어야 할 것입니다."
        }
        else if(result=="GOOD"){
            imgfile.src = "./img/heart2.png";
            title.innerHTML = "끈끈한 관계입니다";
            memo.innerHTML="서로의 관계에 작은 어려움은 있을 수 있으나, 쉽게 타협점을 찾을 수 있을 것입니다."
        }
        else{
            imgfile.src = "./img/heart1.png";
            title.innerHTML = "가장 이상적인 관계입니다";
            memo.innerHTML="문제가 생기더라도 해결이 쉽고, 관계 또한 자연스럽게 발전될 것입니다."
        }
    }
}

//리셋버튼
let resetbtn = document.querySelector("#resetBtn");

resetbtn.addEventListener("click",reset);

let tdBtn = document.querySelectorAll("td");

function reset(){
    for (let i = 0; i < tdBtn.length; i++){
        if (tdBtn[i].classList.contains("active-td")) {
            tdBtn[i].classList.remove("active-td");
        }
    };
    imgfile.setAttribute("hidden", true);
    title.innerHTML = "";
    memo.innerHTML = "";
}



    /*
    처음 구상한 것과 같이 if문을 쓰게 되면,
    if문을 16회나 중첩하여야하므로
    (else 속에 다시 if문을 넣어 다음 성향을 진행하여야 한다)
    json으로 정리하여 나타나도록 한다.
    
    const compareArr =[];
    
    
    compareArr.push(LResult.textContent);
    compareArr.push(RResult.textContent);

    //set는 중복값을 포함하지않으므로 같은 상성의 조합배열은
    //size를 1로 본다.
    const set = new Set(compareArr)
    //ENTJ
    if(compareArr.includes("ENTJ")){
        if(set.size==1){
            result.innerHTML="파멸";
        }
        else if(
            compareArr.includes("ESFJ")||
            compareArr.includes("ISFJ")){
                result.innerHTML="파멸";
        }
        else if(
            compareArr.includes("ENTP")||
            compareArr.includes("ESTJ")||
            compareArr.includes("ISTJ")||
            compareArr.includes("ENFJ")){
                result.innerHTML="불협화음";
        }
        else if(
            compareArr.includes("INTJ")||
            compareArr.includes("INTP")||
            compareArr.includes("ENFP")||
            compareArr.includes("INFJ")||
            compareArr.includes("ISTP")){
                result.innerHTML="평범";
        }
        else if(
            compareArr.includes("ESTP")||
            compareArr.includes("ESFP")){
                result.innerHTML="좀 치는";
            }
        else{
            result.innerHTML="결혼해";
        }
    }
    */

