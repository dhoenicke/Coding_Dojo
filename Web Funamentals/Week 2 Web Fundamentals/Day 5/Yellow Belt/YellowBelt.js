function hidebutton(element) {
    element.remove();
}

function getVal() {
    const val = document.querySelector('#search').value;
    console.log(val)
    alert("You are searching for" + val)
}

var like = 1;

function petcount() {
    var num = document.querySelector(".petcount");
    num.innerText = parseFloat(num.innerText) + 1;
}

function petamount() {
    var num = document.querySelector(".petamount");
    num.innerText = parseFloat(num.innerText) + 1;
}

function petnumber() {
    var num = document.querySelector(".petnumber");
    num.innerText = parseFloat(num.innerText) + 1;
}