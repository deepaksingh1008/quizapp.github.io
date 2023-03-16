const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];

let index=0;
let correct1=0;
let incorrect=0;
let total = quizData.length;
let getQue=document.getElementById('questionBox');
let option = document.querySelectorAll('input[type=radio]');
const reset=()=>{
    option.forEach((item1)=>{
        item1.checked=false;
    })
}
const quizEnd= () =>{
    document.getElementsByClassName("box")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> Hii, you've scored ${correct1} / ${total} </h3>
        </div>
    `
}

const loadQue = ()=>{
    if (total === index) {
        return quizEnd()
    }
    reset()
  const data = quizData[index];
  getQue.innerText=`${index+1}) ${data.question}`;
  option[0].nextElementSibling.innerText = data.a;
  option[1].nextElementSibling.innerText = data.b;
  option[2].nextElementSibling.innerText = data.c;
  option[3].nextElementSibling.innerText = data.d;
  

}
const getAns = ()=>{
    let ans;
   option.forEach((input1)=>{
     if(input1.checked){
        ans = input1.value;
        console.log(ans);
     }
   })
   return ans;
}
document.querySelector("#btn").addEventListener("click",()=>{
   // console.log("hello world");
    const data = quizData[index];
    const ans = getAns();
     if(ans==data.correct)
     {
        correct1++;
       // console.log(correct1);
     }
    else{
        incorrect++;
    }
  index++;
  loadQue()
})

loadQue();