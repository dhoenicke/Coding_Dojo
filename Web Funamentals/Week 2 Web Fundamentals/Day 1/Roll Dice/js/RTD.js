
const images = ["one.png", "two.png", "three.png", "four.png", "five.png", "six.png"];

function rollTheDice( element ){
    let num = Math.floor( Math.random() * 6 );
    console.log( num );
    let result = document.querySelector( ".result");
    result.innerHTML = <img src="./images/${images[num]}" alt="Dice number"/>;
}