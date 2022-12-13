var score = 1;

function scorecount() {
    var num = document.querySelector(".scorecount");
    num.innerText = parseFloat(num.innerText) + 1;
}

function scoreincrease() {
    var num = document.querySelector(".scoreincrease");
    num.innerText = parseFloat(num.innerText) + 1;
}

function hidebutton(element) {
    element.remove();
}