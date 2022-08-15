

const Questions = [{
    id: 0,
    q: "Qual o valor da conta?",
    a: [{ text: "R$ 120,57", isCorrect: false },
        { text: "R$ 154,90", isCorrect: false },
        { text: "R$ 87,33", isCorrect: true },
        { text: "R$ 98,59", isCorrect: false }
    ]

}/* ,
{
    id: 1,
    q: "What is the capital of Thailand?",
    a: [{ text: "Lampang", isCorrect: false, isSelected: false },
        { text: "phuket", isCorrect: false },
        { text: "Ayutthaya", isCorrect: false },
        { text: "Bangkok", isCorrect: true }
    ]

},
{
    id: 2,
    q: "What is the capital of Gujarat",
    a: [{ text: "surat", isCorrect: false },
        { text: "vadodara", isCorrect: false },
        { text: "gandhinagar", isCorrect: true },
        { text: "rajkot", isCorrect: false }
    ]

} */
]





var start = true;

function iterate(id) {

var result = document.getElementsByClassName("result");
result[0].innerText = "";

const question = document.getElementById("question");

question.innerText = Questions[id].q;

const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');

op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

op1.addEventListener("click", () => {
    op1.style.backgroundColor = "rgba(234,97,0,1)";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})

op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "rgba(234,97,0,1)";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})

op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "rgba(234,97,0,1)";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
})

op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "rgba(234,97,0,1)";
    selected = op4.value;
})

const evaluate = document.getElementsByClassName("evaluate");

evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "Acertou";
        result[0].style.color = "green";
        result[0].style.textTransform = "uppercase";
        result[0].style.fontFamily = "Quicksand";
        result[0].style.fontWeight = "bold";
        result[0].style.marginTop = "1rem";
    } else {
        result[0].innerHTML = "Errou";
        result[0].style.color = "red";
        result[0].style.textTransform = "uppercase";
        result[0].style.fontFamily = "Quicksand";
        result[0].style.fontWeight = "bold";
        result[0].style.marginTop = "1rem";
    }
})
}

if (start) {
iterate("0");
}

const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 2) {
    id++;
    iterate(id);
    console.log(id);
}

})