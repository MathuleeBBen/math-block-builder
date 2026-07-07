let score = 0;

let a = 3;
let b = 4;
let answer = 7;

const scoreBox = document.querySelector(".topbar div");
const message = document.getElementById("message");

function newQuestion(){

    a = Math.floor(Math.random()*6)+1;
    b = Math.floor(Math.random()*(10-a))+1;

    answer = a+b;

    document.getElementById("num1").textContent = a;
    document.getElementById("num2").textContent = b;

    const choices = [];

    choices.push(answer);

    while(choices.length<4){

        let n = Math.floor(Math.random()*10)+1;

        if(!choices.includes(n))
            choices.push(n);

    }

    choices.sort(()=>Math.random()-0.5);

    document.querySelectorAll(".choices .block").forEach((block,i)=>{

        block.textContent=choices[i];

    });

}

document.querySelectorAll(".choices .block").forEach(block=>{

    block.style.cursor="pointer";

    block.onclick=()=>{

        let value=Number(block.textContent);

        if(value===answer){

            score+=10;

            scoreBox.textContent="⭐ คะแนน : "+score;

            message.textContent="🎉 ถูกต้อง";

            setTimeout(()=>{

                message.textContent="";

                newQuestion();

            },1000);

        }else{

            message.textContent="❌ ลองใหม่";

        }

    }

});

newQuestion();
